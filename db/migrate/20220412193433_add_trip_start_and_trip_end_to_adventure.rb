class AddTripStartAndTripEndToAdventure < ActiveRecord::Migration[7.0]
  def change
    add_column :adventures, :trip_start, :date
    add_column :adventures, :trip_end, :date
  end
end
