import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


let cartItems = [];


function addItem() {
    const itemInput = document.getElementById('item-input');
    const item = itemInput.value.trim();

    if (item !== '') {
        cartItems.push(item);
        itemInput.value = '';
        displayCartItems();
    }
}


function removeItem(index) {
    cartItems.splice(index, 1);
    displayCartItems();
}

function displayCartItems() {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';

    if (cartItems.length > 0) {
        for (let i = 0; i < cartItems.length; i++) {
            const item = cartItems[i];
            const listItem = document.createElement('li');
            listItem.innerHTML = `${item} <button onclick="removeItem(${i})">Remove</button>`;
            itemList.appendChild(listItem);
        }
    } else {
        itemList.innerHTML = 'The cart is empty.';
    }
}
