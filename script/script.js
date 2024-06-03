
const { createApp } = Vue

createApp({
    data() {
    return {
        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './img/avatar_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './img/avatar_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './img/avatar_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './img/avatar_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './img/avatar_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './img/avatar_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        
        randomAnswers: [
            "Grazie mille!", 
            "Adesso che fai il programmatore puoi formattarmi il pc!", 
            "Allora ci vediamo!",
            "Non penso proprio", 
            "Gino Ginetti al ginepraio gigioneggia",
            "Posso già intuire che il codice non funzionerà...", 
            "Ammazza oh",
        ],
        visibleDivIndex: null,
        activeContact: 0,
        userMessage: "",
        userFilter:"",
        userIsWriting: false,
        isUserOnline: false, 

        }
    },


    methods: {

        focusContact: function(index){
            this.activeContact=index
            // console.log(this.activeContact)
        },

        filterContact: function(string, arr){
            arr.forEach(contact => {
                contact.visible = false;
            });

            const filteredArray = arr.filter(contact => contact.name.toLowerCase().trim().includes(string))
            filteredArray.forEach(contact => {
                contact.visible = true;
            });
        },

        sendNewMessage: function(){
            const newMessage={
                date:'10/01/2020 16:15:22',
                message: this.userMessage,
                status:'sent'
            }
            if(newMessage.message.trim().length>=1){
                this.contacts[this.activeContact].messages.push(newMessage)
                this.userMessage=""
                //mando un nuovo messaggio
                this.isUserOnline = true;

                //dopo un secondo l-utente scrive
                setTimeout(()=>{
                    this.userIsWriting = true;
                }, 1000);

                //dopo 2 secondi arriva la risposta
                setTimeout(this.contactReply, 2000);
            } else{
                console.warn("invalid message length")
            }
        },

        contactReply: function(){
            // l-utente risponde
            const newReply={
                date:'10/01/2020 16:15:22',
                message: this.randomAnswers[this.randomNumber(0, this.randomAnswers.length-1)],
                status:'received'
            }
            this.contacts[this.activeContact].messages.push(newReply);
            this.userIsWriting = false;
            
            setTimeout(() => {
                this.isUserOnline = false;
            }, 1000);

        },

        toggleModifyDivVisibility: function(index){
            if(this.visibleDivIndex===null){
                this.visibleDivIndex=index
            }else{
                this.visibleDivIndex=null
            }
        },

        removeMessage: function(index){
            this.contacts[this.activeContact].messages.splice(index, 1);
            this.visibleDivIndex=null
        },

        //? UTILITIES
        randomNumber: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}).mount('#app')
