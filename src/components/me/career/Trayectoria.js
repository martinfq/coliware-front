const tabLinks = Array.from(document.querySelectorAll('[data-tab-link]'));
const tabPanels = Array.from(document.querySelectorAll('[data-tab-panel]'));
const tabExperience = tabLinks[0]?.getAttribute('data-tab-link') || 'experiencia';
const tabProjects = tabLinks[1]?.getAttribute('data-tab-link') || 'proyectos';
const tabCertifications = tabLinks[2]?.getAttribute('data-tab-link') || 'certificaciones';

const openTab = (tabName) => {
	tabPanels.forEach((panel) => {
		const isActive = panel.getAttribute('data-tab-panel') === tabName;
		panel.hidden = !isActive;
	});

	tabLinks.forEach((link) => {
		const isActive = link.getAttribute('data-tab-link') === tabName;
		link.classList.toggle('active', isActive);
		link.setAttribute('aria-current', isActive ? 'page' : 'false');
	});
};

const renderTabFromHash = () => {
	const tab = window.location.hash.replace('#', '');

	switch (tab) {
		case tabExperience:
			openTab(tabExperience);
			break;
		case tabProjects:
			openTab(tabProjects);
			break;
		case tabCertifications:
			openTab(tabCertifications);
			break;
		default:
			openTab(tabProjects);
	}
};

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

renderTabFromHash();
window.addEventListener('hashchange', renderTabFromHash);
