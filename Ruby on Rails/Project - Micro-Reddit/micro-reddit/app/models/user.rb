class User < ApplicationRecord
    has_many :posts

    validates :username, presence: true, uniqueness: true, length: {minimum: 5}
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: {minimum: 10}
end
