import { createApp } from 'vue'
import { axios } from 'axios'

createApp({
    data() {

    },
    methods: {

    },
    mounted() {

        axios.get('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            .then(response => {
                console.log(response.data.results)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

}).mount('#app')