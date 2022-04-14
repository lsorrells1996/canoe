class Adventure < ApplicationRecord
    serialize :location_list, Array
    belongs_to :user
    has_many :comments

    validates :title, presence: :true
    validates :trip_start, presence: :true
    validates :trip_end, presence: :true
    validates :location_list, presence: :true
end
