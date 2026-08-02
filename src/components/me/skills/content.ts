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
		key: 'lenguages' | 'backend' | 'arquitectura' | 'dataops' | 'database' | 'cloud' | 'ia' | 'more';
		label: string;
		description: string;
	}>;
};

export const skillsContent: Record<ResumeLocale, SkillsSectionContent> = {
	es: {
		skillsSectionLabel: 'Colibri',
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
				key: 'lenguages',
				label: 'Lenguajes',
				description:
					'Java | Python | Js/Ts | SQL'
			},
			{
				key: 'backend',
				label: 'Back-End',
				description:
					'Node Js | Nest Js | Django | Flask | Docker | SpringBoot | API Rest'
			},
			{
				key: 'arquitectura',
				label: 'Arquitectura',
				description:
					'Patrones de arquitectura | Patrones de diseño | Microservicios'
			},
			{
				key: 'dataops',
				label: 'DataOps',
				description:
					'PySpark | Stratio | AirFlow| Docker | DataOps'
			},
			{
				key: 'database',
				label: 'Base de Datos',
				description:
					'Postgres | Microsoft SQL Server | Firebase | MongoDB | Neo4j | Gobierno'
			},
			{
				key: 'cloud',
				label: 'Cloud',
				description:
					'AWS | Google Cloud | Azure | Cloudflare'
			},
			{
				key: 'ia',
				label: 'IA',
				description:
					'LLMs | Embeddings | Machine Learning | Prompting | LangChain | RAG'
			},
			{
				key: 'more',
				label: 'Mas',
				description:
					'Git | Github | Jira | Scrum | Pruebas unitarias | Automatización de pruebas'
			}
		]
	},
	en: {
		skillsSectionLabel: 'Colibri',
		skillsTitle: 'Soft Skills and Hard Skills',
		softSkillsTitle: 'Soft Skills',
		softSkillsDefaultKey: 'autogestion',
		softSkills: [
			{
				key: 'comunicacion',
				label: 'Communication',
				description:
					'I communicate clearly and with a results-oriented approach, with the ability to explain technical ideas, frame problems in a structured way, and adapt information to the needs of the team and project.'
			},
			{
				key: 'liderazgo',
				label: 'Leadership',
				description:
					'Leadership focused on problem solving and decision making, driving projects in an organized way, promoting strong technical practices, and keeping the team focused on concrete goals and quality outcomes.'
			},
			{
				key: 'autogestion',
				label: 'Self-management',
				description:
					'I organize my tasks autonomously by prioritizing goals, researching solutions, and following projects through until expected outcomes are achieved.'
			},
			{
				key: 'proactivo',
				label: 'Proactive',
				description:
					'I take initiative to identify opportunities for improvement, anticipate potential problems, and find solutions independently, always focused on optimizing processes and achieving project goals.'
			}
		],
		hardSkillsTitle: 'Hard Skills',
		hardSkills: [
			{
				key: 'lenguages',
				label: 'Languages',
				description:
                    'Java | Python | Js/Ts | SQL'},
			{
				key: 'backend',
				label: 'Back-End',
				description:
					'Node Js | Nest Js | Django | Flask | Docker | SpringBoot | API Rest'
			},
			{
				key: 'arquitectura',
				label: 'Architecture',
				description:
					'Architecture patterns | Design patterns | Microservices'
			},
			{
				key: 'dataops',
				label: 'DataOps',
				description:
					'PySpark | Stratio | AirFlow | Docker | DataOps'
			},
			{
				key: 'database',
				label: 'Database',
				description:
					'Postgres | Microsoft SQL Server | Firebase | MongoDB | Neo4j | Governance'
			},
			{
				key: 'cloud',
				label: 'Cloud',
				description:
					'AWS | Google Cloud | Azure | Cloudflare'
			},
			{
				key: 'ia',
				label: 'AI',
				description:
					'LLMs | Embeddings | Machine Learning | Prompting | LangChain | RAG'
			},
			{
				key: 'more',
				label: 'More',
				description:
					'Git | Github | Jira | Scrum | Unit testing | Test automation'
			}
		]
	}
};
