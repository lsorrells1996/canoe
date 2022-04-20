class AdventureCommentSerializer < ActiveModel::Serializer
  attributes :id, :notes
  has_one :adventure
end
