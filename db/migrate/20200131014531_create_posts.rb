class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :post_id
      t.string :domain
      t.string :by
      t.integer :score
      t.string :title
      t.string :time_ago
      t.string :cover_image_url
      t.text :content
      t.integer :descendants
      t.integer :priority
    end
  end
end
