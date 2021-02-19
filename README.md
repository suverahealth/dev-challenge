# Product Engineer Technical Challenge

This challenge includes coding, a design question, and a database evaluation task.

Although as a small team we are realistically sharing the load on all applications, we recognise that everyone has their preferences and strengths across different parts of the stack. So this challenge is a holistic one where you will have options to highlight your strengths, as well as what you are still working on and learning. 

For the coding question, we have a basic News Reader: A set of applications that serve up a front-end, you can choose from two written in [Vue.js](https://vuejs.org/) and [React.js](https://reactjs.org/), and a backend written in Node.js using the [Serverless Framework](https://serverless.com/). They allow a reader to see the latest UK news and search for articles by keywords.

For the design challenge, you are able to **choose one** from the two tasks, either Analytics and API.

For the database evaluation task, there are 3 questions are in the included [DB-Task.md](DB-Task.md) file, and they are centred on an event registration system. The final task is meant to assess how you think about data-intensive systems - it does not use any specific database technology.

**Please email us the link to your repository when it's ready to review, at least 24h before your interview. Thank you, and good luck! 🎉**

##  What is the Challenge?

Please fork the repository to begin the task. [Submission guidelines](#what-we-are-looking-for) are at the bottom of this page 😊

### 1] Code
First, the code: After you have gotten familiar with the app, [technical details of the app are below](#main-app-functionality--file-structure), we would like for you to choose **three** tasks from the list of frontend and backend tasks below. 

**Please choose at least 1 from each of the following categories to make up your minimum of three.**

Functionality tasks:
1. *Frontend*: add a section to the homepage which allows the user to filter the results according to **ONE** category that a reader might want to filter news by (e.g. topic, source, date, or ??) 
2. *Backend*: add the backend functionality needed for users to be able to bookmark any headlines they want to read later

Quality tasks:
1. *Frontend*: implement web accessibility on components
2. *Backend*: make a performance improvement to the API as a whole
   
Testing tasks:
1. *Frontend*: Add end-to-end testing on the frontend (e.g. using [Cypress](https://www.cypress.io/)), including at least 1 or 2 user-behaviour-driven tests
2. *Backend*: Add unit testing on the backend (e.g. using [Jest](https://www.serverless.com/blog/unit-testing-nodejs-serverless-jest/) or [tape](https://www.npmjs.com/package/tape)), including at least 1 or 2 user-behaviour-driven tests

*optional extra tasks:* 
If you find that you have time and would like to make the app even nicer, you could tackle one of the following tasks:
   - (front-end) improve the functionality & design of the Article component (`src/components/Article(.vue|.js)`) so that it is more intuitive to a reader
   - (front-end) improve the overall design of the homepage
   - (front-end) make the website SEO friendly
   - (backend) improve error handling
   - (backend) add the minimum required documentation a front-end developer interfacing with this backend might like to see
   - (backend) write a load test for one of the endpoints (e.g. using [Artillery](https://artillery.io/docs/guides/overview/welcome.html))
   
**Whilst we have provided both Vue and React versions, If you prefer, you are welcome to use your own/preferred front-end framework**, to ping the backend service. You are also welcome to **make any changes to the codebase that you would like to, as long as it is still functional.** 

Please remember that this is merely a way for us to see how you approach problems and work on shared code, so we are not expecting the entire moon, just holistic improvements! 😬😅😊

### 2] Design
Then, for the design section, you can **choose one** between the following two:

Frontend - analytics design: create a markdown file describing what **types of user behaviour** you would like to capture on this page for an analytical framework (e.g. [Heap](https://docs.heap.io/docs), [Amplitude](https://developers.amplitude.com/docs) or [Mixpanel](https://developer.mixpanel.com/docs)), and **why**.

Backend - API design: create a markdown file describing what steps it takes for this API to become **ready for production usage**, including any dependencies, and **why**.

### 3] DB Task
Finally, write your answers to the **[Database Evaluation Task](DB-Task.md)** in your markdown file.

## What we are looking for

These are the guidelines on what we are looking for in our submissions:
- Code is human-readable and easy to understand
- Code patterns correspond to expected user-facing functionality
- Clear and holistic, systematic approach to problem-solving
- Clear demonstration of your solid foundational rooting in technical concepts behind scalable, reliable, privacy-preserving and accessible user-centric web-based applications & architectures
- The accompanying file of markdown answers is well-structured and communicates your thoughts clearly and concisely
- Any tests that are written make sense according to how a user might behave on the page
- The styling of code is consistent and technical choices are well-commnunicated
- As a news reader, it is clear how I should can use the page to find news that I am looking for
- If technologies used are changed (e.g. using React instead of Vue), a set of instructions on how to run the app are updated in the README.
- Any changes to file structure are also communicated in the README
- Good use of version control (git) + github to communicate your improvements
## Quickstart dev

Use the latest Node version as it's recommended.
On Mac, you can use [Homebrew] to get [nvm](https://github.com/nvm-sh/nvm) to manage your version & [`yarn`](https://classic.yarnpkg.com/en/docs/install/#mac-stable) or `npm` itself for packages, then:
- `nvm install node`
- `nvm use node`
For other OSes, the installation tools are in the links for `nvm` and `yarn` above. You are also welcome to use `npm` instead of `yarn`.

1. To run the backend service - written using the Serverless framework:
   1. If you haven't installed the serverless CLI tool, do so by using a package manager, like this: `npm install serverless -g`
   2. `cd news-service`
   3. set up your API key in the `.env` file `NEWS_API_KEY={{ your api key }}`
   4. `yarn install`
   5. Run `sls offline start --stage dev`
2. To run the front-end app:
   1. `cd news-app-vue` or `cd news-app-react`
   2. In your `news-app` frontend - `.env`:
        ```
        NODE_ENV=dev
        APP_SERVICE_URL=http://localhost:3000/
        ```
   3. for the Vue app: `yarn install`, for the React app: `npm install`
   4. Run `yarn serve`

Once you are able to run the app following the steps [above](#quickstart-dev), it'll render the view on `http://localhost:8080/` like this: ![news-app](news-app.png)
Your backend service will be running on `http://localhost:3000/` should look like this:
![news-service](news-service.png)

###  Main App Functionality & File Structure

The key dependencies used are the [`news-api` module](https://www.npmjs.com/package/newsapi) which allows us to fetch news from [NewsAPI.org](https://newsapi.org/) on our backend, for the vue app [`axios`](https://www.npmjs.com/package/axios) & [Vuetify](https://vuetifyjs.com/en/) or for the react app [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) & [styled-components](https://styled-components.com/) are used on the front-end for fetching data and components respectively.

The main backend endpoint is the `/articles` endpoint, which can return the [top headlines](https://newsapi.org/docs/endpoints/top-headlines) or results based on a query of ["everything"](https://newsapi.org/docs/endpoints/everything). It is a POST request that takes the type (`headlines` or `search`), along with the query body (uses `country` for headlines, and `q` for the search).

The front-end pings the endpoint, loads the data accordingly and renders it for the reader on the homepage.

In `news-app` front-end: `App.(vue|js)` renders different screens (in `src/views`) through the router, and pulls in data from the backend endpoint to load each into its own article component (`src/components/Article.(vue|js)`). The main view is the `src/views/Home.(vue|js)`.

**src folder structure**
```
components -> for reusable components
views      -> for various screens of the app
```

In `news-service` backend: 
- `serverless.yml` defines how the endpoints will be declared for the provider, as well as doing some basic request validation / handling. Written in the context of an AWS Lambda service, as that can be easily deployed, basically free and is still scalable
- `handler.js` contains AWS-specific event handler logic
- `newsapi.js` contains "business" / user-focused logic 
- `test-data.js` is an optional local set for mocking the API & testing

Both apps have [Jest](https://jestjs.io/) set up for testing in `/tests`, and use ESLint & Prettier for code formatting. The front-end app has [Cypress](https://www.cypress.io/) set up for E2E, but no E2E tests have been written, so **you are allowed to use whatever testing framework you would like**.

#### Credits
Vue + Serverless base: [parisandmilo](https://github.com/parisandmilo)
React base: [AkwasiSB](https://github.com/AkwasiSB) 
