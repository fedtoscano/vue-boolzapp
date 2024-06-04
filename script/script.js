
const { createApp } = Vue
const { DateTime } = luxon

// console.log(DateTime.now().toLocaleString(DateTime.TIME_SIMPLE))

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
            "Sei la ragione per cui Dio ha creato il dito medio.",
            "Non ti preoccupare, non è colpa tua se pensi così... è colpa di chi ti ha educato.",
            "Non sei stupido; hai solo sfortuna quando pensi.",
            "Se avessi una faccia come la tua, farei causa ai miei genitori.",
            "Non sono sicuro di come, ma sei riuscito a sembrare stupido anche su Internet.",
            "Non sei mai stato il fulmine di guerra dell/'intelligenza, vero?",
            "La tua famiglia albero deve essere un cactus perché tutti su di esso sono dei veri spini.",
            "Sei una persona così negativa, che quando entri in una stanza, il Wi-Fi smette di funzionare.",
            "Non hai mai brillato per intelligenza, vero?",
            "Hai una faccia che solo una madre potrebbe amare... forse.",
            "Se fossi un frutto, saresti una banana: giallo e facile da sbucciare.",
            "Non sei inutile, puoi sempre servire da cattivo esempio.",
            "Sei più inutile di una porta girevole in una nave spaziale.",
            "Sei la prova vivente che l/'evoluzione può andare all/'indietro.",
            "Se l/'idiozia fosse un crimine, saresti già nel braccio della morte.",
            "Non sei mai stato il più sveglio del gregge, vero?",
            "Sei più inutile di un asciugamano di carta in una piscina.",
            "Non ti preoccupare, un giorno qualcuno apprezzerà la tua stupidità... forse.",
            "Sei così noioso che fai addormentare le pecore.",
            "Se l/'intelligenza fosse denaro, saresti in bancarotta.",
            "Hai una personalità così magnetica, che i nastri VHS si cancellano quando sei vicino.",
            "Sei la ragione per cui le persone mettono istruzioni sulle bottiglie di shampoo.",
            "Hai una faccia che potrebbe fermare un orologio.",
        ],

        activeContact: 0,
        userMessage: "",
        userFilter:"",
        visibleDivIndex: null,
        
        userIsWriting: false,
        isUserOnline: false, 
        isOptionsPanelActive: false,
        isNewConversationPanelActive: false,

        // now: DateTime.now(),

        //NUOVO CONTATTO
        newContactName:'',
        newContactImgUrl: '',

    }
    },
    computed:{
        showDate(dateStr){
            return DateTime.fromFormat(dateStr, "dD MM yyyy HH mm ss").toLocaleString(TIME_SIMPLE)
            //10/01/2020 15:30:55
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
                date: DateTime.now().toLocaleString(DateTime.TIME_SIMPLE),
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
                date: DateTime.now().toLocaleString(DateTime.TIME_SIMPLE),
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
            if(index<=this.contacts[this.activeContact].messages.length-1){
                console.log(index)
                // console.log(this.contacts[this.activeContact].messages[this.activeContact.messages.length-1])
                this.contacts[this.activeContact].messages.splice(index, 1);
                console.log("index if", index)
                console.log(this.contacts[this.activeContact].messages)
            } else{
                this.contacts[this.activeContact].messages.splice(index-1, 1)
                console.log("index else", index)
                console.log(this.contacts[this.activeContact].messages)
            }

            this.visibleDivIndex=null
        },

        deleteMessage: function(){            
            this.contacts[this.activeContact].messages.splice(0, this.contacts[this.activeContact].messages.length)
            this.isOptionsPanelActive = false;
        },

        deleteConversation: function(){
            this.contacts.splice(this.activeContact, 1)
            this.isOptionsPanelActive = false;
        },

        startNewConversation: function(){
            // inizia una nuova conversazione
            const newContact= {
                name:this.newContactName,
                avatar: this.newContactImgUrl.split('.jpg')[0], 
                visible: true, 
                messages: []
            }

            this.contacts.unshift(newContact)
            this.newContactName=''
            this.newContactImgUrl=''
            this.isNewConversationPanelActive= false
        },

        //? UTILITIES
        randomNumber: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}).mount('#app')

