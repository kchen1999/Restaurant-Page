import chef from './chef.png';

function loadHome() {
    const home = document.createElement('div'); 
    const img = document.createElement('img');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    p1.textContent = "Homemade burgers with Asian twist"
    p2.textContent = "Rated best in Sydney"
    img.src = chef; 
    const main= document.querySelector('.main'); 
    home.classList.add('home'); 
    home.append(p1);
    home.append(p2);
    home.append(img);
    main.append(home); 
}

export {loadHome}; 