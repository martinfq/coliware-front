const key = 'me-cv-theme';
const root = document.documentElement;
const button = document.querySelector('[data-theme-toggle]');
const label = document.querySelector('[data-theme-label]');
const select = document.querySelector('[data-lang-select]');
const languageLinks = Array.from(document.querySelectorAll('.lang-switch a'));
const jobLinks = Array.from(document.querySelectorAll('[data-job-link]'));
const locale = root.getAttribute('lang') === 'en' ? 'en' : 'es';
const jobParam = new URL(window.location.href).searchParams.get('job');
const job = jobParam === 'data' || jobParam === 'ia' ? jobParam : 'software';

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
			window.location.href = `${target.value}${window.location.search}`;
		}
	});
}

const preserveLanguageQueryParams = () => {
	const currentSearch = window.location.search;

	languageLinks.forEach((link) => {
		const href = link.getAttribute('href');
		if (href) {
			link.setAttribute('href', `${href}${currentSearch}`);
		}
	});

	if (select) {
		Array.from(select.options).forEach((option) => {
			option.value = `${option.value}${currentSearch}`;
		});
	}
};

preserveLanguageQueryParams();

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const wrapHighlights = (text, terms) => {
	if (!text || terms.length === 0) {
		return text;
	}

	const uniqueTerms = Array.from(new Set(terms.filter(Boolean))).sort((a, b) => b.length - a.length);
	return uniqueTerms.reduce((acc, term) => {
		const pattern = new RegExp(`(${escapeRegExp(term)})`, 'gi');
		return acc.replace(pattern, '<strong><u>$1</u></strong>');
	}, text);
};

const setActiveJobLink = (activeJob) => {
	jobLinks.forEach((link) => {
		const isActive = link.getAttribute('data-job-link') === activeJob;
		link.classList.toggle('is-active', isActive);
		link.setAttribute('aria-current', isActive ? 'page' : 'false');
	});
};

const applyJobVariant = async () => {
	setActiveJobLink(job);

	if (job === 'software') {
		return;
	}

	const variantLoader =
		job === 'data'
			? () => import('./job-variants/data.js')
			: job === 'ia'
				? () => import('./job-variants/ia.js')
				: null;

	if (!variantLoader) {
		return;
	}

	const { jobVariant } = await variantLoader();
	const profileNodes = Array.from(document.querySelectorAll('[data-profile-paragraph]'));
	const experienceNodes = Array.from(document.querySelectorAll('[data-experience-item]'));
	const profileTerms = jobVariant.profileHighlights?.[locale] || [];
	const visibleExperienceIndexes = new Set(jobVariant.visibleExperienceIndexes || []);

	profileNodes.forEach((node) => {
		node.innerHTML = wrapHighlights(node.textContent || '', profileTerms);
	});

	experienceNodes.forEach((node) => {
		const index = Number(node.getAttribute('data-experience-index'));
		node.hidden = !visibleExperienceIndexes.has(index);
	});
};

applyJobVariant();
