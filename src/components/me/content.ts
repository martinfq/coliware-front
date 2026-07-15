export type ResumeLocale = 'es' | 'en';

export type ResumeContent = {
	metaDescription: string;
	title: string;
	brand: string;
	eyebrow: string;
	role: string;
	profileTitle: string;
	profileText: string;
	contactTitle: string;
	contactItems: string[];
	skillsSectionLabel: string;
	skillsTitle: string;
	softSkillsTitle: string;
	softSkills: string[];
	hardSkillsTitle: string;
	hardSkills: string[];
	experienceSectionLabel: string;
	experienceTitle: string;
	experienceItems: Array<{
		period: string;
		title: string;
		description: string;
	}>;
	projectsSectionLabel: string;
	projectsTitle: string;
	projectItems: Array<{
		title: string;
		description: string;
	}>;
	certSectionLabel: string;
	certTitle: string;
	certifications: string[];
	themePrefix: string;
	lightLabel: string;
	darkLabel: string;
	langAria: string;
	themeAria: string;
};

export const resumeContent: Record<ResumeLocale, ResumeContent> = {
	es: {
		metaDescription: 'Curriculum Vitae de Martin Fierro - Ingeniero de Software, Data e IA',
		title: 'Martin Fierro | CV',
		brand: 'Martin Fierro CV',
		eyebrow: 'Curriculum Vitae',
		role: 'Ingeniero (Software, Data, IA)',
		profileTitle: 'Perfil',
		profileText:
			'Perfil orientado a producto y resultados, con enfoque en diseno de sistemas escalables, analitica de datos e integracion de soluciones de inteligencia artificial en entornos reales.',
		contactTitle: 'Contacto',
		contactItems: [
			'Email: martin@example.com',
			'LinkedIn: linkedin.com/in/martin-fierro',
			'Ubicacion: Argentina'
		],
		skillsSectionLabel: 'Segunda seccion',
		skillsTitle: 'Soft Skills y Hard Skills',
		softSkillsTitle: 'Soft Skills',
		softSkills: [
			'Pensamiento estrategico',
			'Comunicacion clara',
			'Liderazgo colaborativo',
			'Resolucion de problemas complejos'
		],
		hardSkillsTitle: 'Hard Skills',
		hardSkills: [
			'Arquitectura de software',
			'Ingenieria de datos y ETL',
			'MLOps y despliegue de modelos',
			'Cloud e integraciones API'
		],
		experienceSectionLabel: 'Tercera seccion',
		experienceTitle: 'Experiencia',
		experienceItems: [
			{
				period: '2023 - Actualidad',
				title: 'Ingeniero de Software e IA',
				description:
					'Desarrollo de productos digitales con automatizacion inteligente, analitica aplicada y arquitectura orientada a rendimiento.'
			},
			{
				period: '2020 - 2023',
				title: 'Data Engineer',
				description:
					'Construccion de pipelines, modelado de datos y estandarizacion de procesos para equipos de producto y negocio.'
			}
		],
		projectsSectionLabel: 'Cuarta seccion',
		projectsTitle: 'Proyectos personales',
		projectItems: [
			{
				title: 'Asistente LLM para productividad',
				description:
					'Aplicacion para automatizar tareas de trabajo con prompts estructurados y flujos de aprobacion.'
			},
			{
				title: 'Dashboard de analitica operativa',
				description:
					'Panel interactivo para monitoreo de indicadores clave, alertas y tendencias de negocio.'
			}
		],
		certSectionLabel: 'Quinta seccion',
		certTitle: 'Certificaciones',
		certifications: [
			'Machine Learning Engineering - Certificacion Profesional',
			'Arquitectura Cloud - Nivel Profesional',
			'Data Engineering - Especializacion Tecnica'
		],
		themePrefix: 'Tema:',
		lightLabel: 'Light',
		darkLabel: 'Dark',
		langAria: 'Cambiar idioma',
		themeAria: 'Cambiar tema'
	},
	en: {
		metaDescription: 'Martin Fierro Resume - Software, Data and AI Engineer',
		title: 'Martin Fierro | Resume',
		brand: 'Martin Fierro Resume',
		eyebrow: 'Resume',
		role: 'Engineer (Software, Data, AI)',
		profileTitle: 'Profile',
		profileText:
			'Product and results oriented profile, focused on scalable systems design, data analytics, and practical AI solutions for real environments.',
		contactTitle: 'Contact',
		contactItems: [
			'Email: martin@example.com',
			'LinkedIn: linkedin.com/in/martin-fierro',
			'Location: Argentina'
		],
		skillsSectionLabel: 'Second section',
		skillsTitle: 'Soft Skills and Hard Skills',
		softSkillsTitle: 'Soft Skills',
		softSkills: [
			'Strategic thinking',
			'Clear communication',
			'Collaborative leadership',
			'Complex problem solving'
		],
		hardSkillsTitle: 'Hard Skills',
		hardSkills: [
			'Software architecture',
			'Data engineering and ETL',
			'MLOps and model deployment',
			'Cloud and API integrations'
		],
		experienceSectionLabel: 'Third section',
		experienceTitle: 'Experience',
		experienceItems: [
			{
				period: '2023 - Present',
				title: 'Software and AI Engineer',
				description:
					'Digital product development with intelligent automation, applied analytics, and performance oriented architecture.'
			},
			{
				period: '2020 - 2023',
				title: 'Data Engineer',
				description:
					'Built pipelines, data models, and standardized data processes for product and business teams.'
			}
		],
		projectsSectionLabel: 'Fourth section',
		projectsTitle: 'Personal projects',
		projectItems: [
			{
				title: 'LLM productivity assistant',
				description:
					'Application to automate daily work tasks with structured prompts and approval flows.'
			},
			{
				title: 'Operational analytics dashboard',
				description: 'Interactive panel for KPI monitoring, alerts, and business trend tracking.'
			}
		],
		certSectionLabel: 'Fifth section',
		certTitle: 'Certifications',
		certifications: [
			'Machine Learning Engineering - Professional Certification',
			'Cloud Architecture - Professional Level',
			'Data Engineering - Technical Specialization'
		],
		themePrefix: 'Theme:',
		lightLabel: 'Light',
		darkLabel: 'Dark',
		langAria: 'Change language',
		themeAria: 'Toggle theme'
	}
};
