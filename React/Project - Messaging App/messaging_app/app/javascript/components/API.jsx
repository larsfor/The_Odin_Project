export async function getConversations() {
    try {
        const response = await fetch("/api/v1/conversations/index", {mode: 'cors'});
        const conversations = await response.json();
        return conversations;
    } catch(error) {
        console.log(error);
    }
}

export async function getConversation(id) {
    try {
        const response = await fetch(`/api/v1/conversations/show/${id}`, {mode: 'cors'});
        const conversation = await response.json();
        return conversation;
    } catch(error) {
        console.log(error);
    }
}

export async function getMessages(id, setMessages) {
    try {
        const response = await fetch(`/api/v1/messages/conversation/${id}`, {mode: 'cors'});
        const messages = await response.json();
        setMessages(messages);
    } catch(error) {
        console.log(error);
    }
}