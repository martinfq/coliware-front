const softSkillButtons = Array.from(document.querySelectorAll('[data-soft-skill]'));
const softSkillDescription = document.querySelector('[data-soft-skill-description]');
const softSkillsCard = document.querySelector('[data-soft-default-key]');
const softSkillDefaultKey = softSkillsCard?.getAttribute('data-soft-default-key') || 'gestion';

const hardSkillButtons = Array.from(document.querySelectorAll('[data-hard-skill]'));
const hardSkillDescription = document.querySelector('[data-hard-skill-description]');

const openSkill = (buttons, descriptionNode, skillKey, dataAttr) => {
	buttons.forEach((buttonItem) => {
		const isActive = buttonItem.getAttribute(dataAttr) === skillKey;
		buttonItem.classList.toggle('active', isActive);
		if (isActive && descriptionNode) {
			descriptionNode.textContent = buttonItem.getAttribute('data-description') || '';
		}
	});
};

if (hardSkillButtons.length > 0) {
	const defaultSkillButton =
		hardSkillButtons.find((item) => item.getAttribute('data-hard-skill') === 'software') ||
		hardSkillButtons[0];
	const defaultSkill = defaultSkillButton.getAttribute('data-hard-skill');
	if (defaultSkill) {
		openSkill(hardSkillButtons, hardSkillDescription, defaultSkill, 'data-hard-skill');
	}

	hardSkillButtons.forEach((buttonItem) => {
		buttonItem.addEventListener('click', () => {
			const skillKey = buttonItem.getAttribute('data-hard-skill');
			if (skillKey) {
				openSkill(hardSkillButtons, hardSkillDescription, skillKey, 'data-hard-skill');
			}
		});
	});
}

if (softSkillButtons.length > 0) {
	const defaultSkillButton =
		softSkillButtons.find((item) => item.getAttribute('data-soft-skill') === softSkillDefaultKey) ||
		softSkillButtons[0];
	const defaultSkill = defaultSkillButton.getAttribute('data-soft-skill');
	if (defaultSkill) {
		openSkill(softSkillButtons, softSkillDescription, defaultSkill, 'data-soft-skill');
	}

	softSkillButtons.forEach((buttonItem) => {
		buttonItem.addEventListener('click', () => {
			const skillKey = buttonItem.getAttribute('data-soft-skill');
			if (skillKey) {
				openSkill(softSkillButtons, softSkillDescription, skillKey, 'data-soft-skill');
			}
		});
	});
}
