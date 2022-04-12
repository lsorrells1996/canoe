class PlannedAdventure < ApplicationRecord
  serialize :location_list, Array
  belongs_to :user
end
