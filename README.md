# Bookpedia project - backend (W.I.P)

The following NodeTS project represents the backend side of the book-pedia project, the API side which provides the data on the page.
It will be connected to the platform itself and the Admin dashboard, the CMS that will allow the user to update or add new content.

This project is required by the [Frontend](https://github.com/cipriRusu/book-pedia-frontend) to work properly.

It requires a valid .env file with the following values

```env
DEFAULT_PORT=3001
FRONTPAGE_ROUTE=frontpage
ARTICLE_ROUTE=article
```

To run locally:

```bash
#To install all necessary dependecies
npm install

#To build the project
npm run build

#To run the project
npm run exec
```

- [x] Set up the project
- [x] Add mock data
- [ ] Add permanent versioning
- [ ] Add script running gate
- [ ] Write tests
- [x] Replace mock data with SQLite
- [x] Create GET resources to return data
- [ ] CREATE POST resources to edit/update/delete data
- [ ] Authentication/authorization

## Observations/thoughts

Given that the project is a simple portfolio application, it's not planned to go into production so it doesn't get any updates/security
patches or deep bugfixes. It's a personal take on how I would handle some developement challenges and nothing more, aimed at practicing and experimenting, so it will go through radical changes or some implementations might change radically in the future, depending on the situation

Most of the code has been written either by hand or scaffolded using local models like Qwen2.5 Coder 7B Instruct