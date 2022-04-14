class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :location_id
  has_one :adventure
end
