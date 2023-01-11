# Librarya


This is a fullstack Library application created with Rails in the backend and react in the front end. An author has many books and a book belongs to ane author. A category has many books and a book belongs to a category. It was created for learning purposes


![Screenshot from 2023-01-10 14-44-10](https://user-images.githubusercontent.com/50773868/211543951-edcbf0c3-50de-4d53-9688-a0e264db73d0.png)


## Learning Goals

-Build a fullstack web application with CRUD operations using Raild in the bakend and react in the frontend



## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Render account
- Postgresql


## Getting Started

### Backend Setup

- `git clone git@github.com:FIMoringa/Librarya.git`
- `cd Libraryat/rails_backend`
- `bundle install` to install the gems.

You can start your server with:

```console
$ rails server
```

This will run your server on port
[http://localhost:3000](http://localhost:3000).

### Frontend Setup

Your backend and your frontend should be in **two different repositories**.

`cd Librarya/react_frontend`

```console
$ npm start
```

### Fetch Example

Your React app should make fetch requests to your Sinatra backend! Here's an
example:

```js
fetch("http://localhost:3000/books")
  .then((r) => r.json())
  .then((data) => console.log(data));
```

## Author

##### 👤 **Kalunge**

- GitHub: [@kalunge](https://github.com/kalunge)
- Twitter: [@kalunge](https://twitter.com/titus_muthomi)
- LinkedIn: [kalunge](https://linkedin.com/in/titus_muthomi)

##  Contributing

Feel free to check the [issues page](https://github.com/FIMoringa/phase-3-sinatra-react-project/issues)

## Show your support

Give a :star: if you like this project!
## Resources

- [create-react-app][]
- [Postman][postman download]

[create-react-app]: https://create-react-app.dev/docs/getting-started
[create repo]: https://docs.github.com/en/get-started/quickstart/create-a-repo
[dbdiagram.io]: https://dbdiagram.io/
[postman download]: https://www.postman.com/downloads/
[network tab]: https://developer.chrome.com/docs/devtools/network/

## Backend Design(Rails)

