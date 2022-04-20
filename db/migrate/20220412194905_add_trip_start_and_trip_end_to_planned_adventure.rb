class AddTripStartAndTripEndToPlannedAdventure < ActiveRecord::Migration[7.0]
  def change
    add_column :planned_adventures, :trip_start, :date
    add_column :planned_adventures, :trip_end, :date
  end
end
