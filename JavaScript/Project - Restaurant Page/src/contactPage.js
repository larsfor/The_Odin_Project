const contactPage = () => {
    // 'Hi! This is the contact page.'
    const contact = document.createElement('div');

    const contactText = document.createElement("p");
    contactText.innerHTML = `
    CONTACT
    
    65 Rue Bruneseau
    75013 Paris
    
    Phone: +33 (0)1 78 90 79 90
    Email: contact@toohotel.com
    
    Our front desk is open 24/7
    
    Pets are not allowed at the exception of service animals
    `;
    
    contactText.classList.add("pageText");

    contact.appendChild(contactText);

    return contact;
}

export default contactPage;