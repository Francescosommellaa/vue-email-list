// Importa la funzione createApp da Vue
const { createApp } = Vue;

// Crea un'app Vue
createApp({
    data() {
        return {
            mailList: []
        };
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const emails = response.data.response;
                    console.log(emails);
                    this.mailList.push(emails);
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    }
}).mount('#app'); // Monta l'app Vue nell'elemento con id "app"