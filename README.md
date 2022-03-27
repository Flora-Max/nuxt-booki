# Nuxt Booki

## Contexte

Le projet Booki est à l'origine l'intégration d'une maquette en HTML/CSS proposée au [parcours Développeur Web d'OpenClassrooms](https://openclassrooms.com/fr/paths/556-developpeur-web).

Une intégration statique a été réalisée [par mes soins](https://github.com/gtnsimon/booki) pour partager mon expérience avec les étudiants que j'accompagne dans le cadre du [mentorat](https://mentors.openclassrooms.com/) sur la plateforme.

## Exercice

**Dynamiser l'intégration en JavaScript avec [Nuxt 2](https://nuxtjs.org/), [Vue.js 2](https://v2.vuejs.org/) et une API.**

- [x] Mettre en place l'API
- [x] Configurer Nuxt
- [x] Importer la maquette dans le fichier `pages/index.vue`
- [ ] Refactoring du code CSS avec SASS
- [ ] Créer des composants réutilisables (formulaire de recherche, carte d'activité, etc.)
- [ ] Dynamiser l'affichage avec les données de l'API
- [ ] Mettre en place les filtres
- [ ] Faire fonctionner le bouton "Afficher plus" sous les hébergements
- [ ] Déployer l'API et le front dans le Cloud
- [ ] **Changer de ville**

*Le projet de portage de la maquette a été commencé par un développeur parisien mais les hébergements proposés n'étant que sur Marseille il a préféré quitter le pays car ce travail allait à l'encontre de sa déontologie.*

## Objectifs

- Découvrir les frameworks Front-End Nuxt et Vue
- Intéragir avec une API HTTP
- Utiliser [yarn 1](https://classic.yarnpkg.com/lang/en/), [git](https://git-scm.com/) et [GitHub](https://github.com/)

## Architecture

Le repo est un monorepo. Il contient l'API et le front dans la même codebase. On peut travailler sur l'un ou l'autre très facilement sans changer de repo ou faire des mises à jours de dépendances. Yarn assure le lien entre les packages que nous créons grâce aux [Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/).

### packages/backend (API)

Code source de l'API. Celle-ci fonctionne avec [json-server](https://github.com/typicode/json-server).

### packages/frontend (Front)

Code source du front. Celui-ci est une SPA sous Vue/Nuxt.

## F.A.Q

- Installer les packages: `yarn`. L'installation se fera pour tous les dossiers `packages`.
- En dev, l'API sera disponible directement au démarrage du front sous le chemin `/api/`.
- Pour démarrer le projet en dev: `yarn run dev`
