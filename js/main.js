import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

const myVM = (() => {
    //instantiate a new Vue instance
    let vue_m = new Vue({
        data: {
            message: "Hello from Vue!",

            //array of objects
            collection: [
                { name: "Kayla", role: "Animator" },
                { name: "Holly", role: "English Prof" },
                { name: "Claire", role: "Architect" }
            ]
        },

        methods: {
            logClicked() {
                console.log('clicked on an element!');
            }
        }
    }).$mount("#app");
})();