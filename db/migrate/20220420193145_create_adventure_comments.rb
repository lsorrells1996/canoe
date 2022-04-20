class CreateAdventureComments < ActiveRecord::Migration[7.0]
  def change
    create_table :adventure_comments do |t|
      t.string :notes
      t.references :adventure, null: false, foreign_key: true

      t.timestamps
    end
  end
end
