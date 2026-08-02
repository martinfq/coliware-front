export type ResumeLocale = 'es' | 'en';

import type { CareerSectionContent } from './career/content';
import { careerContent } from './career/content';
import type { HeroSectionContent } from './hero/content';
import { heroContent } from './hero/content';
import type { SkillsSectionContent } from './skills/content';
import { skillsContent } from './skills/content';

export type ResumeContent = {
	metaDescription: string;
	title: string;
	brand: string;
	themePrefix: string;
	lightLabel: string;
	darkLabel: string;
	langAria: string;
	themeAria: string;
} & HeroSectionContent & SkillsSectionContent & CareerSectionContent;

type SharedContent = {
	metaDescription: string;
	title: string;
	brand: string;
	themePrefix: string;
	lightLabel: string;
	darkLabel: string;
	langAria: string;
	themeAria: string;
};

const sharedContent: Record<ResumeLocale, SharedContent> = {
	es: {
		metaDescription: 'Curriculum Vitae de Martin Fierro - Ingeniero de Software, Data e IA',
		title: 'Martin Fierro | CV',
		brand: 'COLIWARE',
		themePrefix: 'Tema:',
		lightLabel: 'Light',
		darkLabel: 'Dark',
		langAria: 'Cambiar idioma',
		themeAria: 'Cambiar tema'
	},
	en: {
		metaDescription: 'Martin Fierro Resume - Software, Data and AI Engineer',
		title: 'Martin Fierro | Resume',
		brand: 'COLIWARE',
		themePrefix: 'Theme:',
		lightLabel: 'Light',
		darkLabel: 'Dark',
		langAria: 'Change language',
		themeAria: 'Toggle theme'
	}
};

export const resumeContent: Record<ResumeLocale, ResumeContent> = {
	es: {
		...sharedContent.es,
		...heroContent.es,
		...skillsContent.es,
		...careerContent.es
	},
	en: {
		...sharedContent.en,
		...heroContent.en,
		...skillsContent.en,
		...careerContent.en
	}
};
