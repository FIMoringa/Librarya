class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :isbn
      t.string :author
      t.decimal :price
      t.text :description
      t.integer :year

      t.timestamps
    end
  end
end
