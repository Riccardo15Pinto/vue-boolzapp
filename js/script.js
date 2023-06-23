//check console log
console.log('ok js');
console.log('ok vue', Vue);

//create app
const app = Vue.createApp({
  
  data(){

    return{
      
      //check status
      status : 'received',

      //message id
      messageId:'',

      //check filter
      findcontact: '',

      //new user messagge
      userMessage : '',

      //current ID
      currentID: 1,

      //data user
      user: {
        name: 'Nome Utente',
        avatar: '_io'
      },

      //data contacts
      contacts: [
        {
          id: 1,
          name: 'Michele',
          avatar: '_1',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              id: 3,
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          id: 2,
          name: 'Fabio',
          avatar: '_2',
          visible: true,
          messages: [
            {
              id: 1,
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              id: 2,
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              id: 3,
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          id: 3,
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          messages: [
            {
              id: 1,
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              id: 2,
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              id: 3,
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          id: 4,
          name: 'Alessandro B.',
          avatar: '_4',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
        {
          id: 5,
          name: 'Alessandro L.',
          avatar: '_5',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ],
        },
        {
          id: 6,
          name: 'Claudia',
          avatar: '_6',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received'
            },
            {
              id: 3,
              date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          id: 7,
          name: 'Federico',
          avatar: '_7',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          id: 8,
          name: 'Davide',
          avatar: '_8',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              id: 3,
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received'
            }
          ],
        }
      ] 

    }

  },
  
  computed: {

    // track currentChat 
    currentChat(){
      return this.contacts.filter( message => message.id === this.currentID);
    },

    // filter contact 
    filterContacts(){
      const term = this.findcontact.toLowerCase();
      return this.contacts.filter( contact => contact.name.toLowerCase().includes(term));
    },
    
    //last received message
    currentLastreceivedMessage(){
      return this.currentChat[0].messages.filter(
        (message) => message.status === 'received'
      ).slice(-1);
      
    },
  },
  
  methods:{
    
    //delete Message
    deleteMessagge(index){
      this.currentChat[0].messages.splice(index, 1);
    },

    //track corrent id
    getcurrentId(targetId){
      this.currentID = targetId;
    },

    //track corrent id messagge
    getcurrentIdMessage(targetId){
      this.messageId = targetId;
    },

    // get current time and day
    getTime(){
      const  today = new Date();
      const  date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
      const  time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      return dateTime = date+' '+time;
    },

    //create new contact(cpu) message and push in current chat
    createNewReceived(){
      this.currentChat[0].messages.push({id: new Date().getTime(), date: this.getTime(), message: 'ok', status: 'received'})
    },

    //push in current chat new user messagge and clear input and after 3sec claim add New Received
    addNewChat(){
      if(this.userMessage.length > 0){
        this.currentChat[0].messages.push({id: new Date().getTime(), date: this.getTime() , message: this.userMessage, status: 'sent'})
      }
      this.userMessage = '';
      setTimeout(this.createNewReceived, 3000);
    }

  }
  

});

//print in DOM
app.mount('#root')