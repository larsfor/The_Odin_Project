class Character < ApplicationRecord
  validates :name, presence: true
  validates :x, presence: true
  validate :y, presence: true
end
