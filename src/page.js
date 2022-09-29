import {loadHome} from './home.js';
import {loadMenu} from './menu.js';
import {loadContact} from './contact.js';

function setActiveBtn(e) {
    clearTab();
    const btns = document.querySelectorAll('button');
    btns.forEach((btn) => {
        if(btn.classList.contains('active')) {
            btn.classList.remove('active'); 
        }
    });
    e.target.classList.add('active'); 
}

function clearTab() {
    const main = document.querySelector('.main'); 
    const tab = main.firstChild; 
    tab.remove(); 
}

function createNav() {
    const navBar = document.createElement('nav'); 
    const homeTab = document.createElement('button'); 
    const menuTab = document.createElement('button'); 
    const contactTab = document.createElement('button'); 
    homeTab.textContent = "Home";
    menuTab.textContent = "Menu";
    contactTab.textContent = "Contact";
    homeTab.classList.add('active');
    homeTab.addEventListener('click', (e) => {
        if(homeTab.classList.contains('active')) {
            return; 
        }
        setActiveBtn(e); 
        loadHome();
    });
    menuTab.addEventListener('click', (e) => {
        if(menuTab.classList.contains('active')) {
            return; 
        }
        setActiveBtn(e); 
        loadMenu();
    })

    contactTab.addEventListener('click', (e) => {
        if(contactTab.classList.contains('active')) {
            return; 
        }
        setActiveBtn(e); 
        loadContact();
    })
    
    navBar.appendChild(homeTab);
    navBar.appendChild(menuTab);
    navBar.appendChild(contactTab);
    return navBar; 
}


function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header'); 
    header.textContent = "Chiswick Burgers"
    header.append(createNav());
    return header; 
}

function createMain() {
    const main = document.createElement('div');
    main.classList.add('main'); 
    return main; 

}

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer'); 
    return footer; 

}


function loadPage() {
    const content = document.getElementById('content'); 
    content.append(createHeader());
    content.append(createMain());
    loadHome();
    content.append(createFooter());
}

export {loadPage}; 