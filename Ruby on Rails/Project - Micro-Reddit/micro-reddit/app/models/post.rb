class Post < ApplicationRecord
  validates :title, presence: true, length: {minimum: 5}
  validates :body, presence: true, length: {minimum: 5}
  validates :user_id, presence: true, length: {minimum: 1}

  belongs_to :user
end
