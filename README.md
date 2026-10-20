# Bookpedia project - backend (W.I.P)

The following NodeTS project represents the backend side of the book-pedia project, the API side which provides the data on the page.
It will be connected to the platform itself and the Admin dashboard, the CMS that will allow the user to update or add new content.

This project is required by the [Frontend](https://github.com/cipriRusu/book-pedia-frontend) to work properly.

Admin side[AdminDashboard] N/A - Not required only for rendering data. Required for editing/creating.

It requires a valid .env file with the following values

```env
DEFAULT_PORT=3001
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
- [ ] Write tests
- [ ] Replace mock data with SQLite
- [ ] Create GET resources to return data
- [ ] CREATE POST resources to edit/update/delete data 