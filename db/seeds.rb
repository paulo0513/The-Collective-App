# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Nft.destroy_all
Comment.destroy_all
User.destroy_all

@paul = User.create!(username: 'paul', email: 'paul@email.com', password: '1234')
@grace = User.create!(username: 'grace', email: 'grace@email.com', password: '1234')
@eugene = User.create!(username: 'eugene', email: 'eugene@email.com', password: '1234')
@albert = User.create!(username: 'albert', email: 'albert@email.com', password: '1234')
@hannah = User.create!(username: 'hannah', email: 'hannah@email.com', password: '1234')

puts "#{User.count} users created"

Nft.create!(image_link: 'https://media.giphy.com/media/RILsqUte1MME7TzQJ9/giphy.gif', title: 'White Guy Blinking', created_date: 'June 13, 2017', mint_num: 2 , total_minted: 4 , lowest_ask: 10000 , top_sale: 15000 , about_seller: 'this is me.', description: 'this is a white guy', num_for_sale: 1 , not_for_sale: 3 , user_id: @paul)

puts "#{Nft.count} NFTs created"