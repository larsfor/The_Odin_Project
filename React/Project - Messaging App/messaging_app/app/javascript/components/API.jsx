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

export async function createMessage(body, id) {
    try {
        const CSRF = document.querySelector('meta[name="csrf-token"]').content
        console.log(CSRF);
        const response = await fetch('/api/v1/messages/create/', {
            method: 'POST',
            headers: {
                'X-CSRF-Token': CSRF,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({body: body, conversation_id: id})
        });

        if (response.status === 200 || response.status === 422) {
            return response.json();
        }
        // console.log(response.json());
    } catch(error) {
        console.log(error);
        throw new Error(error)
    }
}