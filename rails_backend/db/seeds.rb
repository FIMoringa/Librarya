# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# faker gem generate authors and books

# faker gem generate categories
10.times do
    BookCategory.create(
        title: Faker::Book.genre
    )
end


authors = Author.create([
    { first_name: "J.R.R.", last_name:"Tolkien", bio: "John Ronald Reuel Tolkien, CBE FRSL was an English writer, poet, philologist, and university professor who is best known as the author of the classic high fantasy works The Hobbit, The Lord of the Rings, and The Silmarillion." },
    { first_name: "George", last_name:"Orwell", bio: "Eric Arthur Blair, better known by his pen name George Orwell, was an English novelist, essayist, journalist, and critic. His work is marked by lucid prose, awareness of social injustice, opposition to totalitarianism, and commitment to democratic socialism." },
    { first_name: "William", last_name:"Shakespeare", bio: "William Shakespeare was an English poet, playwright, and actor, widely regarded as the greatest writer in the English language and the world's pre-eminent dramatist. He is often called England's national poet and the 'Bard of Avon'." },
    { first_name: "Jane", last_name:"Austen", bio: "Jane Austen was an English novelist whose works of romantic fiction, set among the landed gentry, earned her a place as one of the most widely read writers in English literature. Her realism, biting irony and social commentary as well as her acclaimed plots have gained her historical importance among scholars and critics." },
])

books = Book.create([
    { title: "The Hobbit", isbn: "9780547928227",  price: 10.99, description: "The Hobbit is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children's literature.", year: 1937, author_id:Author.first.id, book_category_id:BookCategory.first.id },
    { title: "The Lord of the Rings", isbn: "9780547928227",  price: 10.99, description: "The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.", year: 1954, author_id:Author.second.id , book_category_id:BookCategory.third.id},
    { title: "The Silmarillion", isbn: "9780547928227",  price: 10.99, description: "The Silmarillion is a collection of tales set in the fictional world of Arda, created by J. R. R. Tolkien. The Silmarillion was published in 1977, seven years after Tolkien's death, and is a compilation of earlier and uncollected works, with some material written specifically for the book. It is the first published part of the legendarium, and is the source of much of the material in The Lord of the Rings and The Hobbit.", year: 1977 , author_id:Author.second.id, book_category_id:BookCategory.fourth.id},
    { title: "1984", isbn: "9780547928227",  price: 10.99, description: "1984 is a dystopian novel by English author George Orwell published in 1949. The novel is set in Airstrip One, a world of perpetual war, omnipresent government surveillance, and public manipulation. The superstate and its residents are dictated to by a political system euphemistically named English Socialism (Ingsoc) under the control of a privileged Inner Party elite that persecutes individualism and independent thinking as thoughtcrimes, known as 'thoughtcrime'.", year: 1949, author_id:Author.third.id, book_category_id:BookCategory.fifth.id },
])

10.times do
    Book.create(
        title: Faker::Book.title,
        isbn: Faker::Code.isbn,
        price: Faker::Commerce.price,
        description: Faker::Lorem.paragraph,
        year: Faker::Number.between(from: 1900, to: 2021),
        author_id: Author.all.sample.id,
        book_category_id: BookCategory.all.sample.id
    )
end 


# categories = Category.create([
#     { name: "Fantasy" },
#     { name: "Science Fiction" },
#     { name: "Romance" },
#     { name: "Mystery" },
#     { name: "Horror" },
# ])

# faker gem generate authors and books
# 10.times do
#     Author.create(
#         first_name: Faker::Name.first_name,
#         last_name: Faker::Name.last_name,
#         bio: Faker::Lorem.paragraph
#     )
# end



