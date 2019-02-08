class Team < ApplicationRecord
  validates :name, presense: true
end
