class Comment < ApplicationRecord
  validates :commenter, presence: true
  validates :body, presence: true, length: {minimum: 5}

  belongs_to :user
  belongs_to :post
end
