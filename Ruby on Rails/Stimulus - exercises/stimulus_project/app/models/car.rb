class Car < ApplicationRecord
    has_many :variants, dependent: :destroy
    accepts_nested_attributes_for :variants
end
