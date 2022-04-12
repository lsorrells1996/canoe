class PlannedAdventureSerializer < ActiveModel::Serializer
  attributes :id, :title, :location_list
  has_one :user
end
