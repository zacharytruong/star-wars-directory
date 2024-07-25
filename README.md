Welcome to the open project Star Wars Directory.

### Credits:

Special thanks to the SWAPI team for the API: https://swapi.dev/

## Getting Started

Clone the project from this rep:

```bash
git clone git@github.com:zacharytruong/star-wars-directory.git
```

Install all the dependencies:

```bash
npm i
```

Start the project locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser view the app.

## Live Demo

For demo purposes, a live version of this project is deployed at Vercel:
[https://star-wars-directory-kappa.vercel.app/](https://star-wars-directory-kappa.vercel.app/)

## Github setup

- Default branch: `main` is the production version of the project.
- Develop branch: `develop`, a dedicated branch for engineers to create branches to work on the project and submit PR.

## Project Details

### Deployment

- Provider: Vercel
- The 'main' branch is linked to the production environment.
- The 'develop' branch is for testing
- Other PRs are available for built preview within Vercel environments.

### Project features:

- Responsive designs, mobile-first approach.
- Users can search the Star Wars universe by Name, Planet, or Species.
- The results are displayed on a grid based on the search mode the user performed:
- Name search mode: display the character's name, homeworld (if available), and species (if available).
- Planets search mode: display the planet name, population number (if available), and climate (if available).
- Species search mode: display the species name, classification (if available), and their language (if available).
- The grid displays a "No Results" message if there are no results.
- The form is auto-cleared after fetching.

### Available tech-stacks:

- Next.js is great for React because it provides server-side rendering, improving performance and SEO. It also offers
  built-in routing, code splitting, and serverless deployment support, making complex web applications easier to build
  and maintain.
- Axios offers a user-friendly API, promise-based requests, and request/response interception. It also features built-in
  data and error handling support, seamless async/await integration, and cross-browser solid support, making it a
  reliable choice for API fetching with minimal setup.
- TailWindCSS complements Next.js by providing a streamlined approach to styling components, enabling rapid development
  and consistent design. Tailwind's utility classes align well with Next.js' component-based architecture, fostering
  quick prototyping and easy maintenance. This combination accelerates development and ensures a clean and consistent
  UI.
- DaisyUI: pairs well with Next.js and Tailwind CSS, offering a rich selection of UI components and utilities. Its
  seamless integration streamlines development promotes rapid design, and allows for extensive customization, making it
  an excellent choice for modern and responsive web interfaces.
- Lodash: everyone loves lodash; it is convenient and powerful.
- React-hook-form: is a powerful library for managing form state and validation in React applications. With a
  streamlined API and easy integration, it simplifies form management, improves user experience, and reduces code
  verbosity.

### Coding practices/optimizations:

- Intuit loading/waiting/skeleton-text informs users of ongoing data fetching or actions.
- Both fields are required to prevent extra and unnecessary API calls. The submit button and both fields are disabled
  while the front end is calling the API to retrieve data.

### Future improvements:

- Server actions fetch data from the back end and then return only the required data. Server actions are a better
  approach when authentication is needed.
- Unit tests for lib utilities.
- End-to-end tests for consistent quality deployment.