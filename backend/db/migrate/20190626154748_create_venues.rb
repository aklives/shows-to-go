class CreateVenues < ActiveRecord::Migration[5.2]
  def change
    create_table :venues do |t|
      t.string :name
      t.string :address
      t.float :lat
      t.float :lng 

      t.timestamps
    end
  end
end
