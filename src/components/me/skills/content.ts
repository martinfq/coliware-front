import type { ResumeLocale } from '../content';

export type SkillsSectionContent = {
	skillsSectionLabel: string;
	skillsTitle: string;
	softSkillsTitle: string;
	softSkillsDefaultKey: 'comunicacion' | 'liderazgo' | 'autogestion' | 'proactivo';
	softSkills: Array<{
		key: 'comunicacion' | 'liderazgo' | 'autogestion' | 'proactivo';
		label: string;
		description: string;
	}>;
	hardSkillsTitle: string;
	hardSkills: Array<{
		key: 'software' | 'data' | 'mlops' | 'cloud';
		label: string;
		description: string;
	}>;
};

export const skillsContent: Record<ResumeLocale, SkillsSectionContent> = {
	es: {
		skillsSectionLabel: 'Diferente',
		skillsTitle: 'Skills',
		softSkillsTitle: 'Soft Skills',
		softSkillsDefaultKey: 'autogestion',
		softSkills: [
			{
				key: 'comunicacion',
				label: 'Comunicacion',
				description:
					'Tengo una comunicación clara y orientada a resultados, con capacidad para explicar ideas técnicas, plantear problemas de forma estructurada y adaptar la información según las necesidades del equipo y del proyecto.'
			},
			{
				key: 'liderazgo',
				label: 'Liderazgo',
				description:
					'Liderazgo orientado a la resolución de problemas y la toma de decisiones, impulsando proyectos de manera organizada, promoviendo buenas prácticas técnicas y manteniendo el enfoque del equipo en objetivos concretos y resultados de calidad.'
			},
			{
				key: 'autogestion',
				label: 'Autogestion',
				description:
					'Organizo de forma autónoma mis tareas, priorizando objetivos, investigando soluciones y dando seguimiento a los proyectos hasta alcanzar los resultados esperados.'
			},
			{
				key: 'proactivo',
				label: 'Proactivo',
				description:
					'Tengo iniciativa para identificar oportunidades de mejora, anticiparme a posibles problemas y buscar soluciones de manera autónoma, siempre orientado a optimizar procesos y alcanzar los objetivos del proyecto.'
			}
		],
		hardSkillsTitle: 'Hard Skills',
		hardSkills: [
			{
				key: 'software',
				label: 'Software',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'
			},
			{
				key: 'data',
				label: 'Data',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue.'
			},
			{
				key: 'mlops',
				label: 'MLops',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed.'
			},
			{
				key: 'cloud',
				label: 'Cloud',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis.'
			}
		]
	},
	en: {
		skillsSectionLabel: 'Second section',
		skillsTitle: 'Soft Skills and Hard Skills',
		softSkillsTitle: 'Soft Skills',
		softSkillsDefaultKey: 'autogestion',
		softSkills: [
			{
				key: 'comunicacion',
				label: 'Communication',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
			},
			{
				key: 'liderazgo',
				label: 'Leadership',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
			},
			{
				key: 'autogestion',
				label: 'Self-management',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna.'
			}
		],
		hardSkillsTitle: 'Hard Skills',
		hardSkills: [
			{
				key: 'software',
				label: 'Software',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'
			},
			{
				key: 'data',
				label: 'Data',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue.'
			},
			{
				key: 'mlops',
				label: 'MLops',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed.'
			},
			{
				key: 'cloud',
				label: 'Cloud',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis.'
			}
		]
	}
};
