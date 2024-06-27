// Importa la funzione createApp da Vue
const { createApp } = Vue;

// Crea un'app Vue
createApp({
    data() {
        return {
            // Inizializza una variabile per gli indirizzi email
            mailList: "",
        }
    },
    methods: {

    },
    mounted() {
        // Effettua una richiesta GET all'API per ottenere 10 indirizzi email casuali
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((risposta) => {
                // Estrai gli indirizzi email dalla risposta
                const emails = risposta.data.response;
                console.log(emails);
                // Assegna gli indirizzi email alla variabile mailList
                this.mailList = emails;
            })
            .catch(function (error) {
                // Gestisci eventuali errori
                console.log(error.message);
            });
    }
}).mount('#app'); // Monta l'app Vue nell'elemento con id "app"