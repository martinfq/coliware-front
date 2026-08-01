const key = 'me-cv-theme';
const root = document.documentElement;
const button = document.querySelector('[data-theme-toggle]');
const label = document.querySelector('[data-theme-label]');
const select = document.querySelector('[data-lang-select]');

const saved = localStorage.getItem(key);
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = saved === 'light' || saved === 'dark' ? saved : prefersDark ? 'dark' : 'light';

const lightLabel = button?.getAttribute('data-light-label') || 'Light';
const darkLabel = button?.getAttribute('data-dark-label') || 'Dark';

const applyTheme = (theme) => {
	root.setAttribute('data-theme', theme);
	localStorage.setItem(key, theme);
	if (label) {
		label.textContent = theme === 'light' ? lightLabel : darkLabel;
	}
};

applyTheme(initialTheme);

if (button) {
	button.addEventListener('click', () => {
		const nextTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
		applyTheme(nextTheme);
	});
}

if (select) {
	select.addEventListener('change', (event) => {
		const target = event.target;
		if (!(target instanceof HTMLSelectElement)) {
			return;
		}
		if (target.value) {
			window.location.href = target.value;
		}
	});
}

// Theme and language controls are handled here; section-specific behavior lives in section scripts.

const accordionGroups = Array.from(document.querySelectorAll('[data-accordion-group]'));

accordionGroups.forEach((group) => {
	const triggers = Array.from(group.querySelectorAll('[data-accordion-trigger]'));

	const setExpanded = (trigger, expanded) => {
		const contentId = trigger.getAttribute('aria-controls');
		const content = contentId ? group.querySelector(`#${contentId}`) : null;
		const icon = trigger.querySelector('[data-accordion-icon]');

		trigger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
		if (icon) {
			icon.textContent = expanded ? '▲' : '▼';
		}
		if (content) {
			content.hidden = !expanded;
		}
	};

	triggers.forEach((trigger) => setExpanded(trigger, false));

	triggers.forEach((trigger) => {
		trigger.addEventListener('click', () => {
			const isCurrentlyOpen = trigger.getAttribute('aria-expanded') === 'true';

			triggers.forEach((item) => setExpanded(item, false));

			if (!isCurrentlyOpen) {
				setExpanded(trigger, true);
			}
		});
	});
});
