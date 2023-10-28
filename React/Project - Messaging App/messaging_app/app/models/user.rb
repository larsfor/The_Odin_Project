class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :conversation_accepters, foreign_key: :conversation_accepter_id
  has_many :accepted_conversations, through: :conversation_accepters

  has_many :started_conversations, foreign_key: :starter_id, class_name: 'Conversation'
end
