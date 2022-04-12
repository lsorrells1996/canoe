class AdventureSerializer < ActiveModel::Serializer
  attributes :id, :title, :location_list, :trip_start, :trip_end
  has_one :user
end
