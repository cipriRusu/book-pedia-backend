# Bookpedia project - backend (W.I.P)

The following NodeTS project represents the backend side of the book-pedia project, the API side which provides the data on the page.
It will be connected to the platform itself and the Admin dashboard, the CMS that will allow the user to update or add new content.

This project is required by the [Frontend](https://github.com/cipriRusu/book-pedia-frontend) to work properly.

It requires a valid .env file with the following values

```env
DEFAULT_PORT=3001
FRONTPAGE_ROUTE=frontpage
ARTICLE_ROUTE=article
LISTING_ROUTE=listing
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
- [ ] Add permanent versioning/Refactor
- [ ] Add script running gate
- [ ] Write tests
- [x] Replace mock data with SQLite
- [x] Create GET resources to return data
- [ ] CREATE POST resources to edit/update/delete data
- [ ] Authentication/authorization

## General data description / architecture

V - 1.0.0: Initial version, which assumes no data is present (the application has never been run). It creates a default Sqlite database while creating two data sources:

A faker populated "frontpage" data source
A faker populated "resource" data source

V - 2.0.0: This version introduces tags, at the very moment populated with random "Fruits" values, allowing resources to be filtered by them.

A faker populated "tags" data source
A junction table which allows **many to many** relationships between tags and resources. This will further allow the API to filter resource by specific tags (W.I.P)

---

## Observations/thoughts

Given that the project is a simple portfolio application, it's not planned to go into production so it doesn't get any updates/security
patches or deep bugfixes. It's a personal take on how I would handle some developement challenges and nothing more, aimed at practicing and experimenting, so it will go through radical changes or some implementations might change radically in the future, depending on the situation

Most of the code has been written either by hand or scaffolded using local models like Qwen2.5 Coder 7B Instruct
