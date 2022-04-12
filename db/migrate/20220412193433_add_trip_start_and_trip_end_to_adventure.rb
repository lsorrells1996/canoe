class AddTripStartAndTripEndToAdventure < ActiveRecord::Migration[7.0]
  def change
    add_column :adventures, :trip_start, :string
    add_column :adventures, :trip_end, :string
  end
end
