class PlannedAdventureSerializer < ActiveModel::Serializer
  attributes :id, :title, :location_list, :trip_start, :trip_end
  has_one :user
  has_many :planned_adventure_comments

  def trip_start
    date = object.trip_start
    newdate = date.split('-')
    finaldate = newdate.map{|d| d.to_i}
    actualfinaldate = Date.new(finaldate[0], finaldate[1], finaldate[2])
    actualfinaldate.to_formatted_s(:long_ordinal)
  end

  def trip_end
    date = object.trip_end
    newdate = date.split('-')
    finaldate = newdate.map{|d| d.to_i}
    actualfinaldate = Date.new(finaldate[0], finaldate[1], finaldate[2])
    actualfinaldate.to_formatted_s(:long_ordinal)
  end
end
