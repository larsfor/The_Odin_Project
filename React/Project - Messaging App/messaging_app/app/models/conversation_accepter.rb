class ConversationAccepter < ApplicationRecord
  belongs_to :conversation_accepter, class_name: 'User'
  belongs_to :accepted_conversation, class_name: 'Conversation'
end
