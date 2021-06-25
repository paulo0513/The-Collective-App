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

@blink_gif = Nft.create!(image_link: 'https://media.giphy.com/media/RILsqUte1MME7TzQJ9/giphy.gif', title: 'White Guy Blinking', created_date: 'June 13, 2011',collection_type: 'gif', mint_num: 2 , total_minted: 4 , lowest_ask: 10000 , top_sale: 15000 , about_seller: 'this is me.', description: 'this is a white guy', num_for_sale: 1 , not_for_sale: 3 , user: @paul)
@popcorn_gif = Nft.create!(image_link: 'https://media.giphy.com/media/guufsF0Az3Lpu/giphy.gif', title: 'Michael Jackson Popcorn', created_date: 'December 20, 2012',collection_type: 'gif', mint_num: 1 , total_minted: 2 , lowest_ask: 100000 , top_sale: 80000 , about_seller: 'i am so passionate about art', description: 'Michael Jackson is eating popcorn while watching you unravel. how iconic.', num_for_sale: 1 , not_for_sale: 0 , user: @grace)
@simpsons_gif = Nft.create!(image_link: 'https://media.giphy.com/media/jUwpNzg9IcyrK/giphy.gif', title: 'Homer Simpson Disappears', created_date: 'May 13, 2014',collection_type: 'gif', mint_num: 5 , total_minted: 10 , lowest_ask: 10000 , top_sale: 15000 , about_seller: 'This is not Matt Groening.', description: 'You know that feeling when you just need to disappear from your social environment? Maybe you said something that no one heard or your heard something you wish you didnt.', num_for_sale: 1 , not_for_sale: 8 , user: @hannah)
@office_gif = Nft.create!(image_link: 'https://media.giphy.com/media/12XMGIWtrHBl5e/giphy.gif', title: 'NO. GOD NO.', created_date: 'June 13, 2017',collection_type: 'gif', mint_num: 2 , total_minted: 4 , lowest_ask: 10000 , top_sale: 15000 , about_seller: 'this is me.', description: 'Out of paper, out of stock, theres friendly faces around the block, break loose from the chains that are causing your pain. Call Michael or Stanley, Jim, Dwight or Creed. Call Andy and Kelly for your business paper needs. Dunder Mifflin. The people persons paper people.', num_for_sale: 1 , not_for_sale: 3 , user: @eugene)
@supa_gif = Nft.create!(image_link: 'https://media.giphy.com/media/kYsBThMhhalLG/giphy.gif', title: 'Supa Hot Fire Roast', created_date: 'March 8, 2010',collection_type: 'gif', mint_num: 1 , total_minted: 100 , lowest_ask: 10000 , top_sale: 15000 , about_seller: 'this is me.', description: 'i broke up with my ex-girl, heres her number... SIKE thats not her number. cuz im super hot boiiii', num_for_sale: 1 , not_for_sale: 50 , user: @albert)

puts "#{Nft.count} NFTs created"

Comment.create!(content: 'are... you serious right now?', user: @albert, nft: @blink_gif)
Comment.create!(content: 'I love watching chaos unfold in front of me.', user: @paul, nft: @popcorn_gif)
Comment.create!(content: 'me wishing i was never apart of this conversation...', user: @eugene, nft: @simpsons_gif)
Comment.create!(content: 'all i can think about is the dunder mifflin song.', user: @grace, nft: @office_gif)
Comment.create!(content: 'Why is this the most iconic rap battle ever? I feel like supa hot fire when I roast my friends', user: @hannah, nft: @supa_gif)

puts "#{Comment.count} Comments created"