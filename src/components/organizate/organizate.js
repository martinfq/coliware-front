const TASKS_STORAGE_KEY = "organizate-tasks-v3";
const OBJECTIVES_STORAGE_KEY = "organizate-objectives-v2";

const TIME_OPTIONS = ["5 min", "1 hora", "varias horas", "indeterminado"];
const YES_NO_OPTIONS = ["Sí", "No"];
const BENEFIT_OPTIONS = ["Alto", "Medio", "Bajo"];
const PRIORITY_OPTIONS = ["🔥 Alta", "🟡 Media", "🟢 Baja"];

const sampleObjectives = [
	{ id: "obj-1", name: "Estudio", benefit: "Alto", priority: "🔥 Alta" },
	{ id: "obj-2", name: "Productividad", benefit: "Medio", priority: "🟡 Media" }
];

const sampleTasks = [
	{
		id: "sample-1",
		objectiveId: "obj-1",
		task: "Estudiar Angular",
		importance: "Sí",
		urgency: "No",
		effort: 3,
		time: "1 hora"
	},
	{
		id: "sample-2",
		objectiveId: "obj-2",
		task: "Responder email",
		importance: "No",
		urgency: "Sí",
		effort: 1,
		time: "5 min"
	}
];

const objectiveForm = document.querySelector("#objective-form");
const objectiveIdInput = document.querySelector("#objective-id");
const objectiveNameInput = document.querySelector("#objective-name");
const objectiveBenefitSelect = document.querySelector("#objective-benefit");
const objectivePrioritySelect = document.querySelector("#objective-priority");
const objectiveSubmitButton = document.querySelector("#objective-submit-button");
const objectiveCancelEditButton = document.querySelector("#objective-cancel-edit");
const objectiveTableBody = document.querySelector("#objective-table-body");
const objectiveEmptyState = document.querySelector("#objective-empty-state");

const taskForm = document.querySelector("#task-form");
const taskIdInput = document.querySelector("#task-id");
const objectiveSelect = document.querySelector("#objective-select");
const taskSubmitButton = document.querySelector("#submit-button");
const taskCancelEditButton = document.querySelector("#cancel-edit");
const taskTableBody = document.querySelector("#task-table-body");
const taskEmptyState = document.querySelector("#empty-state");
const clearAllTasksButton = document.querySelector("#clear-all");

let objectives = loadObjectives();
let tasks = loadTasks();

renderObjectiveTable();
populateObjectiveSelect();
renderTaskTable();
updateTaskFormAvailability();

objectiveForm.addEventListener("submit", onObjectiveSubmit);
objectiveCancelEditButton.addEventListener("click", resetObjectiveFormState);
objectiveTableBody.addEventListener("click", onObjectiveTableClick);

taskForm.addEventListener("submit", onTaskSubmit);
taskCancelEditButton.addEventListener("click", resetTaskFormState);
clearAllTasksButton.addEventListener("click", clearAllTasks);
taskTableBody.addEventListener("click", onTaskTableClick);

function loadObjectives() {
	try {
		const raw = localStorage.getItem(OBJECTIVES_STORAGE_KEY);
		if (!raw) {
			const migrated = migrateLegacyObjectives();
			if (migrated.length > 0) {
				localStorage.setItem(OBJECTIVES_STORAGE_KEY, JSON.stringify(migrated));
				return migrated;
			}

			localStorage.setItem(OBJECTIVES_STORAGE_KEY, JSON.stringify(sampleObjectives));
			return [...sampleObjectives];
		}

		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) {
			return [...sampleObjectives];
		}

		const normalized = parsed
			.map(normalizeObjective)
			.filter((objective) => Boolean(objective.id) && Boolean(objective.name));

		if (normalized.length === 0) {
			localStorage.setItem(OBJECTIVES_STORAGE_KEY, JSON.stringify(sampleObjectives));
			return [...sampleObjectives];
		}

		return normalized;
	} catch {
		return [...sampleObjectives];
	}
}

function migrateLegacyObjectives() {
	try {
		const legacyRaw = localStorage.getItem("organizate-objectives-v1");
		if (!legacyRaw) {
			return [];
		}

		const parsed = JSON.parse(legacyRaw);
		if (!Array.isArray(parsed)) {
			return [];
		}

		return parsed.map(normalizeObjective);
	} catch {
		return [];
	}
}

function loadTasks() {
	try {
		const rawV3 = localStorage.getItem(TASKS_STORAGE_KEY);
		if (rawV3) {
			const parsed = JSON.parse(rawV3);
			if (!Array.isArray(parsed)) {
				return [];
			}

			return parsed.map((task) => normalizeTask(task, objectives));
		}

		const legacyRawV2 = localStorage.getItem("organizate-tasks-v2");
		if (legacyRawV2) {
			const parsedLegacy = JSON.parse(legacyRawV2);
			if (!Array.isArray(parsedLegacy)) {
				return [];
			}

			const migrated = parsedLegacy.map((task) => normalizeTask(task, objectives));
			localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(migrated));
			return migrated;
		}

		const legacyRawV1 = localStorage.getItem("organizate-tasks-v1");
		if (legacyRawV1) {
			const parsedLegacyV1 = JSON.parse(legacyRawV1);
			if (!Array.isArray(parsedLegacyV1)) {
				return [];
			}

			const migrated = parsedLegacyV1.map((task) => normalizeTask(task, objectives));
			localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(migrated));
			return migrated;
		}

		const fallback = sampleTasks.map((task) => normalizeTask(task, objectives));
		localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(fallback));
		return fallback;
	} catch {
		return [];
	}
}

function normalizeObjective(rawObjective) {
	const id = typeof rawObjective?.id === "string" && rawObjective.id.trim() ? rawObjective.id : createId();
	const name = typeof rawObjective?.name === "string" ? rawObjective.name.trim() : "";
	const benefit = normalizeBenefit(rawObjective?.benefit);
	const priority = normalizePriority(rawObjective?.priority);
	return { id, name, benefit, priority };
}

function normalizeTask(rawTask, objectiveList) {
	const normalizedImportance = normalizeYesNo(rawTask.importance);
	const normalizedUrgency = normalizeYesNo(rawTask.urgency);
	const normalizedEffort = normalizeEffort(rawTask.effort);
	const normalizedTime = normalizeTime(rawTask.time);
	const objectiveId = normalizeObjectiveId(rawTask, objectiveList);

	return {
		id: typeof rawTask.id === "string" && rawTask.id.trim() ? rawTask.id : createId(),
		objectiveId,
		task: typeof rawTask.task === "string" ? rawTask.task.trim() : "",
		importance: normalizedImportance,
		urgency: normalizedUrgency,
		effort: normalizedEffort,
		time: normalizedTime
	};
}

function normalizeObjectiveId(rawTask, objectiveList) {
	const rawId = typeof rawTask.objectiveId === "string" ? rawTask.objectiveId.trim() : "";
	if (rawId && objectiveList.some((objective) => objective.id === rawId)) {
		return rawId;
	}

	const rawName = typeof rawTask.objectiveName === "string" ? rawTask.objectiveName.trim().toLowerCase() : "";
	if (rawName) {
		const objectiveByName = objectiveList.find((objective) => objective.name.toLowerCase() === rawName);
		if (objectiveByName) {
			return objectiveByName.id;
		}
	}

	return objectiveList[0]?.id ?? "";
}

function normalizeYesNo(rawValue) {
	if (rawValue === "Sí" || rawValue === "No") {
		return rawValue;
	}

	if (typeof rawValue === "number") {
		return rawValue >= 3 ? "Sí" : "No";
	}

	if (typeof rawValue !== "string") {
		return "No";
	}

	const value = rawValue.trim().toLowerCase();
	if (value === "si" || value === "sí") {
		return "Sí";
	}

	if (value === "no") {
		return "No";
	}

	const asNumber = Number(value);
	if (Number.isInteger(asNumber)) {
		return asNumber >= 3 ? "Sí" : "No";
	}

	return "No";
}

function normalizeBenefit(rawValue) {
	if (rawValue === "Alto" || rawValue === "Medio" || rawValue === "Bajo") {
		return rawValue;
	}

	if (typeof rawValue === "number") {
		if (rawValue >= 4) {
			return "Alto";
		}
		if (rawValue >= 2) {
			return "Medio";
		}
		return "Bajo";
	}

	if (typeof rawValue !== "string") {
		return "Medio";
	}

	const value = rawValue.trim().toLowerCase();
	if (value === "alto") {
		return "Alto";
	}
	if (value === "medio") {
		return "Medio";
	}
	if (value === "bajo") {
		return "Bajo";
	}

	const asNumber = Number(value);
	if (Number.isInteger(asNumber)) {
		if (asNumber >= 4) {
			return "Alto";
		}
		if (asNumber >= 2) {
			return "Medio";
		}
		return "Bajo";
	}

	return "Medio";
}

function normalizePriority(rawValue) {
	if (PRIORITY_OPTIONS.includes(rawValue)) {
		return rawValue;
	}

	if (typeof rawValue !== "string") {
		return "🟡 Media";
	}

	const value = rawValue.trim().toLowerCase();
	if (value.includes("alta")) {
		return "🔥 Alta";
	}
	if (value.includes("baja")) {
		return "🟢 Baja";
	}
	if (value.includes("media")) {
		return "🟡 Media";
	}

	return "🟡 Media";
}

function normalizeEffort(rawValue) {
	const value = Number(rawValue);
	if (!Number.isInteger(value)) {
		return 1;
	}
	if (value <= 1) {
		return 1;
	}
	if (value >= 3) {
		return 3;
	}
	return value;
}

function normalizeTime(rawTime) {
	if (typeof rawTime !== "string") {
		return "indeterminado";
	}

	const value = rawTime.trim().toLowerCase();
	if (!value) {
		return "indeterminado";
	}

	if (value === "5 min" || value.includes("min") || value === "1") {
		return "5 min";
	}
	if (value === "1 hora" || value.includes("hora") || value === "2") {
		return "1 hora";
	}
	if (value === "varias horas" || value === "3" || value === "4" || value === "5" || value.includes("h")) {
		return "varias horas";
	}
	if (value === "indeterminado") {
		return "indeterminado";
	}

	return "indeterminado";
}

function saveObjectives() {
	localStorage.setItem(OBJECTIVES_STORAGE_KEY, JSON.stringify(objectives));
}

function saveTasks() {
	localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
}

function onObjectiveSubmit(event) {
	event.preventDefault();

	const name = objectiveNameInput.value.trim();
	const benefit = objectiveBenefitSelect.value;
	const priority = objectivePrioritySelect.value;

	if (!name || !BENEFIT_OPTIONS.includes(benefit) || !PRIORITY_OPTIONS.includes(priority)) {
		alert("Completa los campos del objetivo: Nombre, Beneficio y Prioridad.");
		return;
	}

	const editingId = objectiveIdInput.value;
	if (editingId) {
		objectives = objectives.map((objective) => {
			if (objective.id !== editingId) {
				return objective;
			}
			return { ...objective, name, benefit, priority };
		});
	} else {
		objectives.unshift({ id: createId(), name, benefit, priority });
	}

	saveObjectives();
	renderObjectiveTable();
	populateObjectiveSelect(editingId || objectives[0]?.id || "");
	renderTaskTable();
	updateTaskFormAvailability();
	resetObjectiveFormState();
}

function onObjectiveTableClick(event) {
	const target = event.target;
	if (!(target instanceof HTMLElement)) {
		return;
	}

	const action = target.dataset.action;
	const id = target.dataset.id;
	if (!action || !id) {
		return;
	}

	if (action === "edit") {
		startEditObjective(id);
		return;
	}

	if (action === "delete") {
		deleteObjective(id);
	}
}

function startEditObjective(id) {
	const objective = objectives.find((item) => item.id === id);
	if (!objective) {
		return;
	}

	objectiveIdInput.value = objective.id;
	objectiveNameInput.value = objective.name;
	objectiveBenefitSelect.value = objective.benefit;
	objectivePrioritySelect.value = objective.priority;
	objectiveSubmitButton.textContent = "Actualizar objetivo";
	objectiveCancelEditButton.hidden = false;
	objectiveForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function deleteObjective(id) {
	const usedByTasks = tasks.some((task) => task.objectiveId === id);
	if (usedByTasks) {
		alert("No puedes eliminar este objetivo porque hay tareas vinculadas. Reasigna o elimina esas tareas primero.");
		return;
	}

	const confirmed = confirm("¿Seguro que quieres eliminar este objetivo?");
	if (!confirmed) {
		return;
	}

	objectives = objectives.filter((objective) => objective.id !== id);
	saveObjectives();
	renderObjectiveTable();
	populateObjectiveSelect();
	renderTaskTable();
	updateTaskFormAvailability();

	if (objectiveIdInput.value === id) {
		resetObjectiveFormState();
	}
}

function resetObjectiveFormState() {
	objectiveForm.reset();
	objectiveIdInput.value = "";
	objectiveSubmitButton.textContent = "Guardar objetivo";
	objectiveCancelEditButton.hidden = true;
}

function renderObjectiveTable() {
	objectiveTableBody.innerHTML = "";

	if (objectives.length === 0) {
		objectiveEmptyState.hidden = false;
		return;
	}

	objectiveEmptyState.hidden = true;

	objectives.forEach((objective) => {
		const row = document.createElement("tr");
		row.innerHTML = `
			<td>${escapeHtml(objective.name)}</td>
			<td>${escapeHtml(objective.benefit)}</td>
			<td>${escapeHtml(objective.priority)}</td>
			<td>
				<div class="row-actions">
					<button class="row-btn edit" type="button" data-action="edit" data-id="${objective.id}">Editar</button>
					<button class="row-btn delete" type="button" data-action="delete" data-id="${objective.id}">Eliminar</button>
				</div>
			</td>
		`;

		objectiveTableBody.appendChild(row);
	});
}

function populateObjectiveSelect(selectedId = "") {
	objectiveSelect.innerHTML = '<option value="">Selecciona un objetivo</option>';

	objectives.forEach((objective) => {
		const option = document.createElement("option");
		option.value = objective.id;
		option.textContent = objective.name;
		objectiveSelect.appendChild(option);
	});

	if (selectedId && objectives.some((objective) => objective.id === selectedId)) {
		objectiveSelect.value = selectedId;
	}
}

function updateTaskFormAvailability() {
	const hasObjectives = objectives.length > 0;
	objectiveSelect.disabled = !hasObjectives;
	taskSubmitButton.disabled = !hasObjectives;
	if (!hasObjectives) {
		objectiveSelect.value = "";
	}
}

function onTaskSubmit(event) {
	event.preventDefault();

	if (objectives.length === 0) {
		alert("Crea al menos un objetivo antes de registrar tareas.");
		return;
	}

	const formData = new FormData(taskForm);
	const taskPayload = {
		objectiveId: (formData.get("objectiveId") || "").toString().trim(),
		task: (formData.get("task") || "").toString().trim(),
		importance: (formData.get("importance") || "").toString().trim(),
		urgency: (formData.get("urgency") || "").toString().trim(),
		effort: Number(formData.get("effort")),
		time: (formData.get("time") || "").toString().trim()
	};

	if (!isValidTask(taskPayload)) {
		alert("Completa los campos requeridos. Esfuerzo debe estar entre 1 y 3.");
		return;
	}

	const editingId = taskIdInput.value;
	if (editingId) {
		tasks = tasks.map((task) => {
			if (task.id !== editingId) {
				return task;
			}

			return {
				...task,
				...taskPayload
			};
		});
	} else {
		tasks.unshift({
			id: createId(),
			...taskPayload
		});
	}

	saveTasks();
	renderTaskTable();
	resetTaskFormState();
}

function isValidTask(payload) {
	if (!payload.task || !payload.time || !payload.objectiveId) {
		return false;
	}

	if (!objectives.some((objective) => objective.id === payload.objectiveId)) {
		return false;
	}

	const hasValidBinary = YES_NO_OPTIONS.includes(payload.importance) && YES_NO_OPTIONS.includes(payload.urgency);
	if (!hasValidBinary) {
		return false;
	}

	if (!Number.isInteger(payload.effort) || payload.effort < 1 || payload.effort > 3) {
		return false;
	}

	return TIME_OPTIONS.includes(payload.time);
}

function onTaskTableClick(event) {
	const target = event.target;
	if (!(target instanceof HTMLElement)) {
		return;
	}

	const action = target.dataset.action;
	const id = target.dataset.id;
	if (!action || !id) {
		return;
	}

	if (action === "delete") {
		deleteTask(id);
		return;
	}

	if (action === "edit") {
		startEditTask(id);
	}
}

function startEditTask(id) {
	const task = tasks.find((item) => item.id === id);
	if (!task) {
		return;
	}

	taskIdInput.value = task.id;
	setValue("#objective-select", task.objectiveId);
	setValue("#task", task.task);
	setValue("#importance", task.importance);
	setValue("#urgency", task.urgency);
	setValue("#effort", String(task.effort));
	setValue("#time", task.time);

	taskSubmitButton.textContent = "Actualizar tarea";
	taskCancelEditButton.hidden = false;
	taskForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function deleteTask(id) {
	const confirmed = confirm("¿Seguro que quieres eliminar esta tarea?");
	if (!confirmed) {
		return;
	}

	tasks = tasks.filter((task) => task.id !== id);
	saveTasks();
	renderTaskTable();

	if (taskIdInput.value === id) {
		resetTaskFormState();
	}
}

function clearAllTasks() {
	if (tasks.length === 0) {
		return;
	}

	const confirmed = confirm("Esto eliminará todas las tareas. ¿Deseas continuar?");
	if (!confirmed) {
		return;
	}

	tasks = [];
	saveTasks();
	renderTaskTable();
	resetTaskFormState();
}

function renderTaskTable() {
	taskTableBody.innerHTML = "";

	if (tasks.length === 0) {
		taskEmptyState.hidden = false;
		return;
	}

	taskEmptyState.hidden = true;

	tasks.forEach((task) => {
		const row = document.createElement("tr");
		const objective = getObjectiveById(task.objectiveId);
		const objectiveName = objective ? objective.name : "Objetivo no disponible";
		const objectiveBenefit = objective ? objective.benefit : "-";
		const objectivePriority = objective ? objective.priority : "-";

		row.innerHTML = `
			<td>${escapeHtml(task.task)}</td>
			<td>${escapeHtml(objectiveName)}</td>
			<td>${escapeHtml(task.importance)}</td>
			<td>${escapeHtml(task.urgency)}</td>
			<td>${escapeHtml(objectiveBenefit)}</td>
			<td>${task.effort}</td>
			<td>${escapeHtml(task.time)}</td>
			<td>${escapeHtml(objectivePriority)}</td>
			<td>
				<div class="row-actions">
					<button class="row-btn edit" type="button" data-action="edit" data-id="${task.id}">Editar</button>
					<button class="row-btn delete" type="button" data-action="delete" data-id="${task.id}">Eliminar</button>
				</div>
			</td>
		`;

		taskTableBody.appendChild(row);
	});
}

function getObjectiveById(objectiveId) {
	return objectives.find((item) => item.id === objectiveId) || null;
}

function resetTaskFormState() {
	taskForm.reset();
	taskIdInput.value = "";
	taskSubmitButton.textContent = "Guardar tarea";
	taskCancelEditButton.hidden = true;
}

function setValue(selector, value) {
	const input = document.querySelector(selector);
	if (input instanceof HTMLInputElement || input instanceof HTMLSelectElement) {
		input.value = value;
	}
}

function createId() {
	if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
		return crypto.randomUUID();
	}

	return `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}

function escapeHtml(value) {
	return String(value)
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#039;");
}
