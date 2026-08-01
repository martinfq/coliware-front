import type { ResumeLocale } from '../content';

export type CareerSectionContent = {
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
};

export const careerContent: Record<ResumeLocale, CareerSectionContent> = {
	es: {
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
		]
	},
	en: {
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
		]
	}
};
