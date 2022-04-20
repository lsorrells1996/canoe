class AdventureComment < ApplicationRecord
  belongs_to :adventure, dependent: :destroy
end
