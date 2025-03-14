export const DEFAULT_LANGUAGE = 'en';
export const LANGUAGES = ['en', 'cy'] as const;

export type Language = typeof LANGUAGES[number];

// Define type for translations structure
interface TranslationStructure {
    siteName: string;
    nav: {
        home: string;
        services: string;
        about: string;
        contact: string;
    };
    hero: {
        title: string;
        subtitle: string;
        cta: string;
    };
    about: {
        title: string;
        subtitle: string;
        text1: string;
        text2: string;
    };
    whyUs: {
        title: string;
        reasons: Array<{
            number: string;
            title: string;
            description: string;
        }>;
    };
    contact: {
        title: string;
        subtitle: string;
        form: {
            name: string;
            email: string;
            subject: string;
            message: string;
            send: string;
        };
    };
}

const translations: Record<Language, TranslationStructure> = {
    en: {
        siteName: "Plato",
        nav: {
            home: "Home",
            services: "Services",
            about: "About",
            contact: "Contact"
        },
        hero: {
            title: "Luxury Home Spray Painting",
            subtitle: "Sustainable Style for Modern Living",
            cta: "Get Started"
        },
        about: {
            title: "Why replace, when you can reimagine?",
            subtitle: "Our Services",
            text1: "At Plato, we specialise in luxury spray painting services that breathe new life into your home, all while protecting the planet.",
            text2: "We believe your home deserves more than ordinary. That's why we use premium, eco-friendly paints and coatings."
        },
        whyUs: {
            title: "Why Choose Us",
            reasons: [
                {
                    number: "01",
                    title: "Bespoke colour matching with endless luxury tones",
                    description: "Perfect color match"
                },
                {
                    number: "02",
                    title: "Smooth, seamless finishes rivaling new installations",
                    description: "Superior finish"
                }
            ]
        },
        contact: {
            title: "Contact Us",
            subtitle: "Get in Touch",
            form: {
                name: "Your Name",
                email: "Your Email",
                subject: "Subject",
                message: "Message",
                send: "Send Message"
            }
        }
    },
    cy: {
        siteName: "Plato",
        nav: {
            home: "Hafan",
            services: "Gwasanaethau",
            about: "Amdanom",
            contact: "Cysylltu"
        },
        hero: {
            title: "Paentio Chwistrellu Cartref Moethus",
            subtitle: "Arddull Gynaliadwy ar gyfer Byw Modern",
            cta: "Dechrau"
        },
        about: {
            title: "Pam ailosod, pan allwch chi ail-ddychmygu?",
            subtitle: "Ein Gwasanaethau",
            text1: "Yn Plato, rydym yn arbenigo mewn gwasanaethau paentio chwistrellu moethus.",
            text2: "Rydym yn credu bod eich cartref yn haeddu mwy na'r cyffredin."
        },
        whyUs: {
            title: "Pam Ni",
            reasons: [
                {
                    number: "01",
                    title: "Paru lliwiau pwrpasol gyda thonau moethus",
                    description: "Paru lliwiau perffaith"
                },
                {
                    number: "02",
                    title: "Gorffeniadau llyfn sy'n cystadlu â gosodiadau newydd",
                    description: "Gorffeniad rhagorol"
                }
            ]
        },
        contact: {
            title: "Cysylltu",
            subtitle: "Cysylltwch â Ni",
            form: {
                name: "Eich Enw",
                email: "Eich E-bost",
                subject: "Pwnc",
                message: "Neges",
                send: "Anfon Neges"
            }
        }
    }
};

export function getLanguageFromURL(pathname: string): Language | null {
    const langCodeMatch = pathname.match(/\/([a-z]{2})/);
    const matched = langCodeMatch ? langCodeMatch[1] : null;
    return LANGUAGES.includes(matched as Language) ? matched as Language : null;
}

export function getLangFromUrl(url: URL): Language {
    const [, lang] = url.pathname.split('/');
    if (LANGUAGES.includes(lang as Language)) return lang as Language;
    return DEFAULT_LANGUAGE;
}

export function useTranslations(lang: Language) {
    return function t(key: string): string {
        const i18nMap = translations[lang];
        return key.split('.').reduce((acc: any, curr) => {
            return acc ? acc[curr] : null;
        }, i18nMap) || key;
    };
}

export { translations };