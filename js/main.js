// Importa la funzione createApp da Vue
const { createApp } = Vue;

// Crea un'app Vue
createApp({
    data() {
        return {
            // crea array per le email
            mailList: []
        };
    },
    mounted() {
        // inizializzo il ciclo for e gli dico di fermarsi quando arrriva a 10 email
        for (let i = 0; i < 10; i++) {
            // richiamo axios per poter recuperare l'email randomica
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    // recupero l'email
                    const emails = response.data.response;
                    console.log(emails);
                    // inserisco l'email nell'array
                    this.mailList.push(emails);
                })
                // gestisco eventuali errori
                .catch((error) => {
                    console.log(error.message);
                });
        }
    }
}).mount('#app'); // Monta l'app Vue nell'elemento con id "app"