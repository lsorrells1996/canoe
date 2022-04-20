class PlannedAdventureCommentSerializer < ActiveModel::Serializer
  attributes :id, :notes
  has_one :planned_adventure
end
