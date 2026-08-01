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
		role: 'Engineer (Software, Data, AI)',
		profileTitle: 'Profile',
		profileText:
			'Product and results oriented profile, focused on scalable systems design, data analytics, and practical AI solutions for real environments.',
		contactTitle: 'Contact',
		contactItems: [
			'Email: martin@example.com',
			'LinkedIn: linkedin.com/in/martin-fierro',
			'Location: Argentina'
		]
	}
};
