new Vue({
    el: '#app',
    data: {
        newItem: '',
        cartItems: []
    },
    methods: {
        addItem() {
            const item = this.newItem.trim();

            if (item !== '') {
                this.cartItems.push(item);
                this.newItem = '';
            }
        },
        removeItem(index) {
            this.cartItems.splice(index, 1);
        }
    }
});
