# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_23_005646) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text "content"
    t.bigint "user_id", null: false
    t.bigint "nft_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["nft_id"], name: "index_comments_on_nft_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "nfts", force: :cascade do |t|
    t.string "image_link"
    t.string "title"
    t.string "created_date"
    t.string "collection_type"
    t.integer "mint_num"
    t.integer "total_minted"
    t.integer "lowest_ask"
    t.integer "top_sale"
    t.text "about_seller"
    t.text "description"
    t.integer "num_for_sale"
    t.integer "not_for_sale"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_nfts_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "comments", "nfts"
  add_foreign_key "comments", "users"
  add_foreign_key "nfts", "users"
end
