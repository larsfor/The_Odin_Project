class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :posts, dependent: :destroy
  
  has_many :friends, class_name: "User", foreign_key: "people_id"
  belongs_to :people, class_name: "User", optional: true

  has_many :friend_requests
  has_many :likes
end
