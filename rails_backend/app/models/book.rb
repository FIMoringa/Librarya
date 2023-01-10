class Book < ApplicationRecord
  belongs_to :author
  belongs_to :book_category
end
