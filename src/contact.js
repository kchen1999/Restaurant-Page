import map from './Map.png'; 

function loadContact() {
    const main = document.querySelector('.main');
    const contact = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p'); 
    const img = document.createElement('img'); 
    p1.textContent = 'P: 0412345678';
    p2.textContent = 'A: 500 Blackwall Point Rd, Chiwick, NSW, Australia';
    img.src = map; 
    img.alt = 'map';
    contact.classList.add('contact'); 
    contact.append(p1);
    contact.append(p2);
    contact.append(img); 
    main.append(contact);
}

export {loadContact}; 