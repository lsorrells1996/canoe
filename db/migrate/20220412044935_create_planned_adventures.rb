class CreatePlannedAdventures < ActiveRecord::Migration[7.0]
  def change
    create_table :planned_adventures do |t|
      t.string :title
      t.text :location_list
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
