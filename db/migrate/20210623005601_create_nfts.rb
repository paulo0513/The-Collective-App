class CreateNfts < ActiveRecord::Migration[6.1]
  def change
    create_table :nfts do |t|
      t.string :image_link
      t.string :title
      t.string :created_date
      t.string :collection_type
      t.integer :mint_num
      t.integer :total_minted
      t.integer :lowest_ask
      t.integer :top_sale
      t.text :about_seller
      t.text :description
      t.integer :num_for_sale
      t.integer :not_for_sale
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
