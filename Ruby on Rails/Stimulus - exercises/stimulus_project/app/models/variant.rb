class Variant < ApplicationRecord
  belongs_to :car, optional: true
end
