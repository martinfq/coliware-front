import type { ResumeLocale } from '../content';

export type CareerSectionContent = {
	experienceSectionLabel: string;
	experienceTitle: string;
	experienceItems: Array<{
		period: string;
		title: string;
		company: string;
		summary: string;
		location: string;
		keywords: string[];
		description: string[];
	}>;
	projectsSectionLabel: string;
	projectsTitle: string;
	projectItems: Array<{
		title: string;
		summary: string;
		keywords: string[];
		description: string[];
		repository?: string;
		demo?: string;
		link?: string;
	}>;
	certSectionLabel: string;
	certTitle: string;
	certifications: Array<{
		title: string;
		summary: string;
		description: string;
		link?: string;
	}>;
};

export const careerContent: Record<ResumeLocale, CareerSectionContent> = {
	es: {
		experienceSectionLabel: 'TEJON DE LA MIEL',
		experienceTitle: 'Experiencia',
		experienceItems: [
			{
				period: 'Sep 2025 – Actualidad',
				title: 'Ingeniero de Datos',
				company: 'TCS - Banco Pichincha ',
				summary: 'Diseñar, desarrollar y testear ETLs ',
				location: 'Quito, Ecuador',
				keywords: ['Airflow', 'Kafka', 'PySpark', 'Big Data', 'DataOps', 'SQL', 'Azure DevOps', 'Stratio'],
				description: [
					'**Diseñar, desarrollar y testear ETLs** para hacer ingestas de datos a lo largo de toda la arquitectura end to end dentro de Banco Pichincha.',
					'**Analizar, desarrollar y testear** soluciones de datos ad hoc dentro del area de cash management para los departamentos de **Desarrollo y CiberFraude**.',
					'Desarrollar soluciones de datos para el tratamiento, ingesta y reporteria de **Estructuras Normativas** ATS y A06 dentro de Banco Pichincha.',
					'Optimizar, validar y automatizar procesos de datos utilizando **Airflow**.',
					'Analisis y desarrollo de un framework de calidad de datos para el chapter de ingenieria de datos.',
					'Codificar, testear y versionar pipelines, codigo, assets y dags en **Azure DevOps**.'
				]
			},
			{
				period: 'Oct 2024 – Abril 2025',
				title: 'Data Trainee',
				company: 'Banco Pichincha',
				summary: 'Desarrollar workflows dentro de Stratio para obtener métricas de calidad de los datos',
				location: 'Quito, Ecuador',
				keywords: ['Python', 'PySpark', 'Big Data', 'SQL', 'Stratio', 'DataOps', 'Gobierno de datos', 'Calidad de datos'],
				description: [
					'Desarrollar, mejorar, optimizar y documentar workflows dentro de Stratio para obtener métricas de calidad de los datos de varios dominios dentro del banco utilizando PySpark y SQL. Esto incluye la creación de pipelines de datos, integración de fuentes heterogéneas, catálogos y listas de referencia.',
					'Monitorear y reportar problemas de calidad dentro de entorno de Stratio y Onpremise analizando múltiples fuentes de datos y recolectando metadatos.',
					'Participación en reuniones con stakeholders para identificar necesidades específicas de calidad de datos en áreas como administración seguros, buro de crédito, gestión de reclamos y requerimientos y ciber fraude.',
					'Auditoría de scripts en entornos On-Premise de SQL Server existentes para identificar y corregir problemas de rendimiento, redundancia o errores lógicos. Implementación de mejores prácticas en el manejo de consultas complejas.'
				]
			},
			{
				period: 'Nov 2023 – Jul 2024',
				title: 'Desarrollador Full Stack',
				company: 'Billusos',
				summary: 'Desarrollar una aplicacion web/mobile para generar ganancias con encuestas y tareas cortas',
				location: 'Remoto',
				keywords: ['Django', 'React Native', 'HTML', 'Jira', 'Git / Github'],
				description: [
					'Desarrollar nuevas funcionalidades en el backend Django, adaptándose a las necesidades cambiantes del mercado y de los usuarios.',
					'Dar mantenimiento a un sitio web dirigido a empresas, optimizando la experiencia del usuario y el rendimiento del sitio.',
					'Desarrollar y mantener nuevas funcionalidades en la aplicación móvil construida con React Native, mejorando continuamente su rendimiento y usabilidad.',
					'Crear mockups para visualizar nuevas funcionalidades y generar manuales de usuario.'
				]
			},
			{
				period: 'Feb 2024 – May 2024',
				title: 'Data Trainer',
				company: 'Tipti S.A.',
				summary: 'Desarrollar sistemas en la API de Tipti para generar recomendaciones con IA.',
				location: 'Quito, Ecuador',
				keywords: ['Python', 'Flask', 'Git', 'Github', 'LLM', 'AWS'],
				description: [
					'Desarrollar sistemas en la API de Tipti utilizando Flask e inteligencia artificial LLM para generar recomendaciones.',
					'Llevar a cabo análisis de datos holísticos (recopilación, limpieza, organización y análisis) en casos de falta de existencias en tiempo real, utilizando generadores de auditoría automatizados.',
					'Gobernar, mantener y ampliar el código existente de Python para proyectos de Datos, incluyendo la detección, diagnóstico y resolución de errores.',
					'Crear herramientas analíticas internas para el departamento de Datos, siguiendo los protocolos de mejores prácticas en la construcción de proyectos.'
				]
			}
		],
		projectsSectionLabel: 'Cuarta seccion',
		projectsTitle: 'Proyectos personales',
		projectItems: [
			{
				title: 'Prediccion de Diabetes',
				summary: 'Sistema full stack con IA para estimar probabilidad de diabetes a partir de datos de salud.',
				keywords: ['Python', 'Flask', 'IA', 'JavaScript', 'ViteJS', 'React', 'Neo4J', 'Google Cloud'],
				description: [
					'**IA:** Se desarrollo un modelo de IA utilizando datos de salud de una encuesta real para entrenar un modelo que prediga, segun diferentes aspectos de salud, la probabilidad de diabetes en una persona.',
					'**Backend:** Se implemento un backend para consumir el modelo, administrar usuarios y gestionar sus diferentes predicciones.',
					'**DB:** Se utilizo Neo4j para modelar y observar conexiones entre usuarios y predicciones.',
					'**Frontend:** Se desarrollo una aplicacion sencilla para autenticacion de usuarios, creacion de predicciones y consulta de historico de predicciones.'
				],
				repository: 'https://github.com/martinfq/TIC-DiabetesPredictorSoftware'
			},
			{
				title: 'Mini Red Social',
				summary: 'Aplicacion social con autenticacion JWT, gestion de contenido y arquitectura full stack cloud.',
				keywords: ['Angular', 'Nest Js', 'Postgres SQL', 'Firebase', 'Google Cloud'],
				description: [
					'**Backend:** Se desarrollo un backend para administracion de usuarios, publicaciones y grupos, con endpoints publicos y privados protegidos con autenticacion JWT para crear, mostrar, editar y eliminar informacion.',
					'**DB:** Se implemento con Postgres SQL usando el ORM de NestJS; para imagenes de perfil y publicaciones se utilizo Firebase.',
					'**Frontend:** Se construyo una app en Angular con pantallas de login/registro, home, listado general de posts y administracion de posts por usuario.'
				],
				repository: 'https://github.com/martinfq/mini-red-social-angular'
			}
		],
		certSectionLabel: 'Quinta seccion',
		certTitle: 'Certificaciones',
		certifications: [
			{
				title: 'Stratio',
				summary: 'Herramienta de bigdata para ingesta, procesamiento, guardado y gobierno de datos.',
				description:
					'He adquirido un profundo conocimiento en toda la suite de Stratio, desarrollando workflows de procesamiento y control de datos y programando en PySpark. Ademas, tengo experiencia en gobierno del dato, administracion de Data Catalog y Data Market, modelado semantico con ontologias y glosarios de negocio, y gestion de metadatos y seguridad. Esta certificacion valida mi dominio del ecosistema Stratio Rocket y Governance en analisis de datos, creacion y mantenimiento de assets.'
			},
			{
				title: 'DataOps',
				summary: 'Optimizacion de procesos para datos confiables y oportunos.',
				description:
					'Se enfoco en la optimizacion de procesos para garantizar datos confiables y oportunos. Aprendi a identificar y mitigar inconsistencias en la produccion de datos, implementar automatizacion en pruebas de calidad y monitorear metricas clave para detectar anomalias rapidamente. Ademas, desarrolle habilidades en la gestion de flujos de datos y orquestacion de procesos. A traves de un enfoque basado en la mejora continua y la colaboracion, soy capaz de disenar y mantener infraestructuras de datos eficientes, asegurando una integracion fluida entre equipos y tecnologias.'
			},
			{
				title: 'Google Cloud Engineer',
				summary: 'Gestion y despliegue de aplicaciones en infraestructura de Google Cloud.',
				description:
					'He adquirido un profundo conocimiento en la gestion y despliegue de aplicaciones en la infraestructura de Google Cloud, lo que me ha permitido manejar maquinas virtuales, configurar redes seguras y optimizar recursos en la nube. Ademas, he aprendido a implementar soluciones de almacenamiento, utilizar bases de datos como Cloud SQL y BigQuery, y automatizar procesos con herramientas como gcloud CLI. Tambien he trabajado en monitorizacion y mantenimiento de servicios, garantizando un rendimiento optimo y siguiendo las mejores practicas de seguridad y eficiencia en entornos de nube.'
			},
			{
				title: 'Amazon AWS Fundamentals',
				summary: 'Base solida en computacion en la nube y servicios fundamentales de AWS.',
				description:
					'Obtuve un conocimiento exhaustivo de la informatica en la nube y de los servicios basicos que ofrece AWS. Conoci los servicios clave de AWS, como EC2 para la potencia informatica, S3 para el almacenamiento y RDS para las bases de datos administradas. En el curso tambien se trataron temas esenciales como las practicas recomendadas de seguridad, las redes y la gestion de costes en el entorno de AWS.'
			}
		]
	},
	en: {
		experienceSectionLabel: 'HONEY BADGER',
		experienceTitle: 'Experience',
		experienceItems: [
			{
				period: 'Sep 2025 – Present',
				title: 'Data Engineer',
				company: 'TCS - Banco Pichincha',
				summary: 'Design, develop, and test ETL workflows.',
				location: 'Quito, Ecuador',
				keywords: ['Airflow', 'Kafka', 'PySpark', 'Big Data', 'DataOps', 'SQL', 'Azure DevOps', 'Stratio'],
				description: [
					'**Design, develop, and test ETLs** to run data ingestions across the entire end-to-end architecture at Banco Pichincha.',
					'**Analyze, develop, and test** ad hoc data solutions in the cash management area for the **Development and Cyber Fraud** departments.',
					'Develop data solutions for processing, ingestion, and reporting of **Regulatory Structures** ATS and A06 within Banco Pichincha.',
					'Optimize, validate, and automate data processes using **Airflow**.',
					'Analyze and develop a data quality framework for the data engineering chapter.',
					'Code, test, and version pipelines, code, assets, and DAGs in **Azure DevOps**.'
				]
			},
			{
				period: 'Oct 2024 – Apr 2025',
				title: 'Data Trainee',
				company: 'Banco Pichincha',
				summary: 'Develop workflows in Stratio to obtain data quality metrics.',
				location: 'Quito, Ecuador',
				keywords: ['Python', 'PySpark', 'Big Data', 'SQL', 'Stratio', 'DataOps', 'Data Governance', 'Data Quality'],
				description: [
					'Develop, improve, optimize, and document workflows in Stratio to obtain data quality metrics across multiple bank domains using PySpark and SQL. This includes creating data pipelines, integrating heterogeneous sources, catalogs, and reference lists.',
					'Monitor and report quality issues in Stratio and on-premise environments by analyzing multiple data sources and collecting metadata.',
					'Participate in stakeholder meetings to identify specific data quality needs in areas such as insurance administration, credit bureau, claims and requirements management, and cyber fraud.',
					'Audit existing SQL Server scripts in on-premise environments to identify and correct performance issues, redundancy, or logical errors, applying best practices for complex query management.'
				]
			},
			{
				period: 'Nov 2023 – Jul 2024',
				title: 'Full Stack Developer',
				company: 'Billusos',
				summary: 'Develop a web/mobile application to generate earnings through surveys and short tasks.',
				location: 'Remote',
				keywords: ['Django', 'React Native', 'HTML', 'Jira', 'Git / Github'],
				description: [
					'Develop new functionalities in the Django backend, adapting to changing market and user needs.',
					'Maintain a company-facing website, optimizing user experience and site performance.',
					'Develop and maintain new features in the mobile app built with React Native, continuously improving performance and usability.',
					'Create mockups to visualize new features and produce user manuals.'
				]
			},
			{
				period: 'Feb 2024 – May 2024',
				title: 'Data Trainer',
				company: 'Tipti S.A.',
				summary: 'Develop systems in the Tipti API to generate AI recommendations.',
				location: 'Quito, Ecuador',
				keywords: ['Python', 'Flask', 'Git', 'Github', 'LLM', 'AWS'],
				description: [
					'Develop systems in the Tipti API using Flask and LLM-based AI to generate recommendations.',
					'Carry out holistic data analysis (collection, cleaning, organization, and analysis) in real-time out-of-stock cases using automated audit generators.',
					'Govern, maintain, and extend existing Python code for Data projects, including error detection, diagnosis, and resolution.',
					'Create internal analytical tools for the Data department, following best-practice protocols for project development.'
				]
			}
		],
		projectsSectionLabel: 'Fourth section',
		projectsTitle: 'Personal projects',
		projectItems: [
			{
				title: 'Diabetes Prediction',
				summary: 'Full-stack AI system to estimate diabetes probability based on health data.',
				keywords: ['Python', 'Flask', 'AI', 'JavaScript', 'ViteJS', 'React', 'Neo4J', 'Google Cloud'],
				description: [
					'**AI:** An AI model was developed using health data from a real survey to train a model that predicts, from specific health factors, whether a person is likely to have diabetes.',
					'**Backend:** A backend was implemented to consume the model, manage users, and handle their different predictions.',
					'**DB:** Neo4j was used to model and visualize different possible connections between users and predictions.',
					'**Frontend:** A simple app was built so users can authenticate, create predictions, review past predictions, and run new ones.'
				],
				repository: 'https://github.com/martinfq/TIC-DiabetesPredictorSoftware'
			},
			{
				title: 'Mini Social Network',
				summary: 'Social app with JWT authentication, content management, and full-stack cloud architecture.',
				keywords: ['Angular', 'Nest Js', 'Postgres SQL', 'Firebase', 'Google Cloud'],
				description: [
					'**Backend:** A backend was developed to manage users, posts, and groups, including public and private endpoints with JWT authentication to create, view, edit, or delete user, post, and group data.',
					'**DB:** Built on PostgreSQL using the NestJS ORM. Firebase was used to store profile images and post images.',
					'**Frontend:** An Angular application was developed with login/register flows, home screen, a global post list, and per-user post management.'
				],
				repository: 'https://github.com/martinfq/mini-red-social-angular'
			}
		],
		certSectionLabel: 'Fifth section',
		certTitle: 'Certifications',
		certifications: [
			{
				title: 'Stratio',
				summary: 'Big data platform for ingestion, processing, storage, and data governance.',
				description:
					'I have acquired deep knowledge across the full Stratio suite by building data processing and control workflows and programming in PySpark. I also have experience in data governance, administration of Data Catalog and Data Market, semantic modeling with ontologies and business glossaries, and metadata/security management. This certification validates my command of the Stratio Rocket and Governance ecosystem for analytics, and for creating and maintaining data assets.'
			},
			{
				title: 'DataOps',
				summary: 'Process optimization for reliable and timely data.',
				description:
					'It focused on process optimization to ensure reliable and timely data. I learned to identify and mitigate inconsistencies in data production, implement automation in quality tests, and monitor key metrics to quickly detect anomalies. I also developed skills in data flow management and process orchestration. Through a continuous improvement and collaboration approach, I can design and maintain efficient data infrastructures, ensuring smooth integration across teams and technologies.'
			},
			{
				title: 'Google Cloud Engineer',
				summary: 'Application management and deployment on Google Cloud infrastructure.',
				description:
					'I gained in-depth knowledge in managing and deploying applications on Google Cloud infrastructure, including virtual machines, secure network configuration, and cloud resource optimization. I also learned to implement storage solutions, use databases such as Cloud SQL and BigQuery, and automate processes with tools like gcloud CLI. In addition, I worked on service monitoring and maintenance to ensure optimal performance while applying security and efficiency best practices in cloud environments.'
			},
			{
				title: 'Amazon AWS Fundamentals',
				summary: 'Solid foundation in cloud computing and core AWS services.',
				description:
					'I obtained a comprehensive understanding of cloud computing and the core services provided by AWS. I covered key AWS services such as EC2 for compute power, S3 for storage, and RDS for managed databases. The training also included essential topics like security best practices, networking, and cost management in AWS environments.'
			}
		]
	}
};
