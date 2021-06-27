var app = new Vue({
    el: '#app',
    data: {
        proteins: [{
            id: 1,
            type: "chicken",
            proteinsPer100g: 20,
            calories: 200
        },
        {
            id: 2,
            type: "beef",
            proteinsPer100g: 100,
            calories: 2000
        }
        ],
        selections: [{
            id: 1,
            type: "uwu"
        }
        ],
        message: "uwu"
    },
    template:
        `<div>
        <h1>{{message}}</h1>
        <input type= "text" v-model="message">
        </div>`
});