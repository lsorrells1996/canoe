class PlannedAdventureSerializer < ActiveModel::Serializer
  attributes :id, :title, :location_list, :trip_start, :trip_end
  has_one :user

  def trip_start
    date = Date.new(object.trip_start.to_i)
    date.to_formatted_s(:long)
  end

  def trip_end
    date = Date.new(object.trip_end.to_i)
    date.to_formatted_s(:long)
  end
end
