import type { ResumeLocale } from '../content';

export type HeroSectionContent = {
	eyebrow: string;
	role: string;
	profileTitle: string;
	profileText: string;
	contactTitle: string;
	contactItems: string[];
};

export const heroContent: Record<ResumeLocale, HeroSectionContent> = {
	es: {
		eyebrow: 'Curriculum Vitae',
		role: 'Ingeniero X (Software, Data, IA)',
		profileTitle: 'Perfil',
		profileText:
			'Profesional proactivo apasionado por la tecnología, especialmente interesado en Back-End, DataOps, Arquitectura de Software, Inteligencia Artifical y Cloud. ' +
			'Este enfoque multidisciplinar me ha proporcionado amplios conocimientos en diversas metodologías, arquitecturas, plataformas y lenguajes relevantes para mi campo. ' +
			'Autodidacta, organizado, curioso y responsable, con gran capacidad de planificación y análisis. Puedo resolver cualquier problema de manera lógica y eficiente.',
		contactTitle: 'Contacto',
		contactItems: [
			'Email: martin.fq1908@gmail.com',
			'https://www.linkedin.com/in/martin-fierro/',
			'Ubicacion: Quito, Ecuador'
		]
	},
	en: {
		eyebrow: 'Resume',
		role: 'Engineer X (Software, Data, AI)',
		profileTitle: 'Profile',
		profileText:
			'Proactive professional passionate about technology, especially interested in Back-End, DataOps, Software Architecture, Artificial Intelligence, and Cloud. ' +
			'This multidisciplinary approach has provided me with broad knowledge across methodologies, architectures, platforms, and languages relevant to my field. ' +
			'Self-taught, organized, curious, and responsible, with strong planning and analytical skills. I can solve problems in a logical and efficient way.',
		contactTitle: 'Contact',
		contactItems: [
			'Email: martin.fq1908@gmail.com',
			'LinkedIn: linkedin.com/in/martin-fierro',
			'Location: Quito, Ecuador'
		]
	}
};
