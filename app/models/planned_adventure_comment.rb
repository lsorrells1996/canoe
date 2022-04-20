class PlannedAdventureComment < ApplicationRecord
  belongs_to :planned_adventure, dependent: :destroy
end
