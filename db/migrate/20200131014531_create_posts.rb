class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :post_id
      t.text :content
      t.string :cover_image_url
      t.string :domain
      t.timestamps
    end
  end
end
