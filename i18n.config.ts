export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            hi: 'Hi there 👋, I’m',
            work: 'web developer and designer.',
            aboutDesc: 'I’m a student and freelance in the realms of sysadmin, web development and design. I believe in the power of technology to catalyze radical change.',
            articleListDesc: 'articles i’ve written',
            viewAll: 'See more',
            projectsListDesc: 'ventures i’m working on',
            organizationsListDesc: 'organizations i’ve been involved in'
        },
        fr: {
            hi: 'Salut 👋, je suis',
            work: 'développeur web et designer.',
            aboutDesc: 'Je suis un étudiant et, en parallèle, freelance dans le domaine du développement et du design web. Je crois en la puissance de la technologie pour catalyser un changement radical.',
            articleListDesc: 'articles que j’ai écrit',
            viewAll: 'Voir plus',
            projectsListDesc: 'projets sur lesquels je travaille',
            organizationsListDesc: 'organisations dans lesquelles j’ai été impliqué'
        }
    }
}))
