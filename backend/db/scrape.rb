require 'nokogiri'
require 'open-uri'
require 'pry'



  html = open('https://www.ohmyrockness.com/bands/all')
  doc = Nokogiri::HTML(html)

  bands = doc.css('.entry').collect do |band|
          band.text
          end




  # table_rows = doc.search('.wikitable').search('tr').drop(1).map {|row| row.text.gsub(/\n\n/, "\n").split("\n")}.slice(0, 176).map {|row| row.drop(1) if row[0] == ''}
  # table_rows = table_rows.map! {|row| row[0].to_i == 0 ? row.unshift("") : row}
  # i = 0
  # while i < table_rows.length
  #   if table_rows[i][0] == ''
  #     table_rows[i][0] = table_rows[i-1][0]
  #   end
  #   i += 1
  # end
  # table_rows.each do |game|
  #   Game.create(name: game[1], genre: game[2], release_year: game[0].to_i, publisher: game[3], platform: game[4])
  # end
