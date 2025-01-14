<h1 align="center"><picture>
  <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp" type="image/webp">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif" alt="🚀" width="32" height="32">
</picture><a href="https://sethway.vercel.app/" target="_blank">Seth's Portfolio</a><picture>
  <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp" type="image/webp">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif" alt="🚀" width="32" height="32">
</picture></h1>

## Abstract

[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
This app is meant to help any developer easily showcase their work.

## Preview

[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)

<div align="center">
  <img src="/src/assets/images/site-nav.gif" alt="preview of app navigation" width="500px" height="auto">
</div>

## Installation Instructions

[//]: <> (What steps does a person have to take to get your app cloned down and running?)

> [!WARNING] > **[Node.js](https://nodejs.org/en) & [npm](https://www.npmjs.com/) are required to run this app.**<br> > _Please ensure you have both installed on your machine before proceeding._

- _(optional) \*Fork this project to your own Github account._
- Clone the repository to your local machine.
- `cd` into the project folder.
- Use the `npm install` command to install the project dependencies.
- Use the `npm run dev` command to run a preview version of the app.
- Check the console for the `PORT` & copy/paste `localhost:PORT` into your web browser.

## Customization

- To personalize this app's content for yourself, replace the info in `src/assets/resume-info/`.
- Be sure to maintain the json's format while editting.
- All project preview GIFs should be placed in `src/assets/images/projects/`
  - Their basename should share the `"short"` attribute from the project's info in `src/assets/resume-info/projects`.
  - example → a gif for a project with the attribute `"short":"spaceship"` would be saved as `src/assets/images/projects/spaceship.gif`
- To create new tech badges, add them to `src/assets/resume-info/badges.json`.
  - I only used badges from this [site](https://github.com/alexandresanlim/Badges4-README.md-Profile). If you use your own, it may require a small refactor.
- Add your own headshot & save it at `src/assets/images/headShot.jpg`.
- Save the most recent version of your resume at `src/assets/resume.pdf`.
- Update the browser title to your own in the index.html `<title>` tag.
- The 'Mini-Apps' section is very personalized. Feel free to use any of these custom cards, or alternatively, you can comment out this entire section quickly in App.jsx to remove it.
- If you use this app, I'd love to hear about it! Give me a shoutout on linkedin & a star on github.

## Deploy

- This app is built for a hassle-free [Vercel](https://vercel.com/) deployment. Their platform is free & doesn't require card information.
- Simply make an account, grant access to your forked repo, and create a new deployment.

## Context

[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
This portfolio was a solo, side project project completed during my 5th month at Turing. I spent roughly 20 hours writing the application.

## Contributors

[//]: <> (Who worked on this application? Link to their GitHubs.)
This app was a concept created, built & deployed by <a href="https://github.com/seth-way">Seth Way</a>.

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB]" alt="React logo badge"/>
  <img src="https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer motion logo badge"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript logo badge"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS logo badge"/>
  <img src="https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white" alt="Vite logo badge"/>
</p>

## What's Next

- The Dark/Light Mode Toggle should be linked to local storage to persist a user's choice on app reload.
- Accessibility should be checked/rechecked so that all possible updates are incorporated.
- A section for education/work history should be considered.
- A banner for 'fun facts' could be added for a more personal feel.
- A contact me form could be incororated? (This might require a 3rd party subscription)

Note: Any additional features should fit the overall design aesthetic and continue to incororate [shadcn](https://ui.shadcn.com/) components if possible.
