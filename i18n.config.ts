export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            hi: 'Hi there 👋, I’m',
            work: 'web developer and designer.',
            aboutDesc: 'I’m a student and freelance in the realms of sysadmin, web development and design.',
            articleListDesc: 'articles i’ve written',
            viewAll: 'See more',
            projectsListDesc: 'ventures i’m working on',
            organizationsListDesc: 'organizations i’ve been involved in',
            contactDesc: 'I\'m always open to new opportunities, collaborations, and discussions. Feel free to reach out to me through the bot or via the contact informations below.',
            contactBtn: 'Contact me',
            bookCall: 'Book a call'
        },
        fr: {
            hi: 'Salut 👋, je suis',
            work: 'développeur web et designer.',
            aboutDesc: 'Je suis un étudiant et, en parallèle, freelance dans le domaine du développement et du design web.',
            projectsListDesc: 'projets sur lesquels je travaille',
            organizationsListDesc: 'organisations dans lesquelles j’ai été impliqué',
            contactDesc: 'Je suis toujours ouvert à de nouvelles opportunités, collaborations et discussions. N\'hésitez pas à me contacter via le bot ou via les informations de contact ci-dessous.',
            contactBtn: 'Me contacter',
            bookCall: 'Réserver un appel'
        }
    }
}))
