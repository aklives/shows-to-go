require 'nokogiri'
require 'open-uri'
require 'pry'



html = open('https://www.ohmyrockness.com/bands/all')
doc = Nokogiri::HTML(html)

bands = doc.css('.entry').collect do |band|
        band.text
        end




# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Day.destroy_all
Venue.destroy_all
Concert.destroy_all
User.destroy_all
Ticket.destroy_all


Day.create(name: 'Sunday')
Day.create(name: 'Monday')
Day.create(name: 'Tuesday')
Day.create(name: 'Wednesday')
Day.create(name: 'Thursday')
Day.create(name: 'Friday')
Day.create(name: 'Saturday')

Venue.create(name: 'Kingsland', address: '269 Norman Ave, Brooklyn, NY 11222', lat: 40.727975, lng: -73.9423548)
Venue.create(name: 'The Gutter', address: '200 N 14th St, Brooklyn, NY 11211', lat: 40.7225949, lng: -73.9576188)
Venue.create(name: 'The Trash Bar', address: '256 Grand St, Brooklyn, NY 11211', lat: 40.7132913, lng: -73.9590489)
Venue.create(name: 'The Bowery Ballroom', address: '6 Delancey St, New York, NY 10002', lat: 40.7204125, lng: -73.9955448)
Venue.create(name: 'East River Park', address: '430 FDR Dr, New York, NY 10002', lat: 40.7110866, lng: -73.9782043)

25.times do
  Concert.create(band: bands.sample, day_id: rand(7) + 1, venue_id: rand(5) + 1)
end
