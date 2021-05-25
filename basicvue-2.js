// App 1
var app = new Vue({
    el: '#app',
    data: {
        firstName: 'Jib',
        lastName: 'APM',
        age: 20
    
    }
})


// App 2
var app2 = new Vue({
    el: '#app-2',
    data:{
        okey: false
    }
})
// app2.okey = true


// App 3
var app3 = new Vue({
    el: '#app-3',
    data: {
        python:[
            {framework: 'Django'},
            {framework: 'Flask'},
            {framework: 'Pyramid'}
        ]
    }
})


// App 4
var app4 = new Vue({
    el: '#app-4',
    data: {
        message: "Hello, NU student"
    },
    methods: {
       changeMessage: function(){
           this.message = this.message.split('').reverse().join('')
       } 
    }
})


// App 5
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello'
    }
})


