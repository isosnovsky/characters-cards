All is as usual `git clone && yarn install && yarn start`

☄️
[or you can check deployed app on gh-pages](https://isosnovsky.github.io/characters-cards/)
☄️

If you want to use debug mode you can modify VITE_MODE param in .env file to 'debug'

# Task

Using a third party API as a data source (example: Star Wars API https://swapi.dev/), 
implement a SPA application (React or Vue) consisting of two pages. 
On the main page, display a list or cards of characters, add the possibility of pagination to the list. 
Implement a page with detailed information on the selected character.
Pros: 
+ Using TypeScript 
+ Neat layout 
+ Using UI framework (Material, Ant, Bootstrap, etc.)
As an extra challenge: 
+ To work with data, use storage (Vuex, Redux, etc.) 
+ Edit user info and do not send changes to the server. Only localy changes
+ Subscribe to update the storage status 
+ Add character search field by API (or local filter) 
+ Add tests

## Features
🏛️ Project runs on [Feature-Sliced Design](https://feature-sliced.design/) architectural methodology

💅 Styled with [Chakra-ui](https://chakra-ui.com/) and [EmotionJS](https://emotion.sh/docs/introduction)

⚡ Bundled and processed with Next Generation Frontend Tooling [Vite](https://vitejs.dev/) 

🪲 Mocked all the data with [MSW](https://mswjs.io/)

📺 [Vitest](https://vitest.dev/) Unit Test Framework 

🌿 With testing utilities named [React Testing Library](https://testing-library.com/)

🧬 Linted and formatted with [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/)  respectively

💌 Checks, fills and validates with [React Hook Form](https://react-hook-form.com/)

🏢 [Typescript](https://www.typescriptlang.org/) all the way through

🐙 [React](https://react.dev/), [Redux](https://redux.js.org/), [Redux-persist](https://github.com/rt2zz/redux-persist), [RTK-Query](https://redux-toolkit.js.org/rtk-query/overview) and [React-Router 6](https://reactrouter.com/en/main)

## Next steps

1. [ ] Finish all integration tests
2. [ ] Fix debug mode. It breaks down after a while due to msw
3. [ ] Add a notification to a successful form edit
4. [ ] Add error boundary preventing a page crash
5. [ ] Think about isolation css instead of tailwinding
6. [ ] Enhance UX 
7. [ ] Replace selfwritten not-flexible pagination with something else
