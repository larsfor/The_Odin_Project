class Post < ApplicationRecord
  belongs_to :user

  has_many :likes
  has_many :comments, as: :commentable, dependent: :destroy
end
