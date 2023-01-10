

Author
- id
- first_name
- last_name
- age
- boooks => author has many Books

Book
- id
- title
- Isbn
- author_id => book belongs to author
- category_id => book belongs to category

Category
- title
- Books => Category has many books

## Frontend Design(React)
BookList
- Homepage
- delete Book button
- Add Book Button

 BookCard(book details)
 - Title
 - Author name -> through authors table
 - ISBN
 - category title through categories table
 
 BookForm
 - add book - title, isbn
 - select category from categories 
 - select author from authors
 
 AuthorForm
 -  firstName
 - lastName
 - age
 
 ## Extra requirements
 ### Authentication
 
 Backend Design(Rails)
 ## User
 - email
 - password
 - first_name
 - last_name
 - jwt_token
 
 FronentEnd Design(React)
  Auth Form
  - password
  - confirmPassword
  - firstName
  - lastName
  - jwt_token
  