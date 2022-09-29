import baconBurger from './bacon-burger.jpeg';
import cheeseBurger from './cheeseburger.jpeg'; 
import doublePorkBurger from './double-pork-burger.jpeg'; 
import frenchFries from './french-fries.jpeg';
import leafyBurger from './leafy-burger.jpeg';
import quadruplePorkBurger from './quadruple-pork-burger.jpeg';


function addMenuItem (img, title, ingredients) {
    const menuItem = document.createElement('div'); 
    const menuImg = document.createElement('img'); 
    const menuTitle = document.createElement('p');
    const ingredientList = document.createElement('p');  
    menuImg.src = img; 
    menuImg.alt = img; 
    menuImg.classList.add('menu-item-img');
    menuTitle.textContent = title; 
    menuTitle.classList.add('menu-item-title'); 
    ingredientList.textContent = ingredients; 
    ingredientList.classList.add('ingredients'); 
    menuItem.classList.add('menu-item'); 
    menuItem.append(menuImg);
    menuItem.append(menuTitle);
    menuItem.append(ingredientList);
    return menuItem;
}

function loadMenu() {
    const main = document.querySelector('.main');
    const menu = document.createElement('div'); 
    menu.classList.add('menu'); 
    menu.append(addMenuItem(cheeseBurger, 'Cheese burger', 
    'Bread, cheese, lettuce, tomato, onion, single beef patty'));
    menu.append(addMenuItem(frenchFries, 'French fries', 
    'French fries, chicken salt'));
    menu.append(addMenuItem(baconBurger, 'Bacon burger', 
    'Bread, cheese, lettuce, tomato, onion, bacon, grilled onion, pickle'));
    menu.append(addMenuItem(leafyBurger, 'Leafy burger', 
    'Bread, cheese, lettuce, tomato, onion, double beef patty'));
    menu.append(addMenuItem(doublePorkBurger, 'Double pork burger', 
    'Bread, cheese, bacon, tomato, double pork patty'));
    menu.append(addMenuItem(quadruplePorkBurger, 'Quadruple pork burger', 
    'Bread, cheese, bacon, tomato, quadruple pork patty'));
    main.append(menu);
}

export {loadMenu}; 