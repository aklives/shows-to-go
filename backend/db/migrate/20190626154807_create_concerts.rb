class CreateConcerts < ActiveRecord::Migration[5.2]
  def change
    create_table :concerts do |t|
      t.string :band
      t.integer :day_id
      t.integer :venue_id

      t.timestamps
    end
  end
end
