class Conversation < ApplicationRecord
  has_many :conversation_accepters, foreign_key: :accepted_conversation_id
  has_many :accepters, through: :conversation_accepters, source: :conversation_accepter

  belongs_to :starter, class_name: 'User'
end
