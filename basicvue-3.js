
var app = new VTTCue({
    el: '#app',
    data () {
        return {
            info: null,
        }
    },
    mounted () {
        axios.get('http://127.0.0.0:8000/api/tasks/')
        .then(Response => {this.info = Response.data })
    }
    
})

