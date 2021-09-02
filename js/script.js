/** 
 * ! Descrizione:
* Attraverso una chiamata ajax all’API di boolean:
* https://flynn.boolean.careers/exercises/api/array/music
* avremo a disposizione una decina di dischi musicali.
* Utilizzando vue, stampiamo a schermo una card per ogni album.
* in allegato la cartellina col template fatto insieme e uno screen
* del risultato richiesto
* !BONUS:
* Ordinare i dischi per anno di uscita.
* Creare una select con tutti i generi dei dischi. In base a cosa
* scegliamo nella select, vedremo i corrispondenti cd. 
*/
console.log("HERE",Vue);

Vue.config.devtools=true;



var app = new Vue({
    el: '#app',
    data: {
     albums:[],
    },
    methods:{
      getDiscs(){
        axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((res)=>{
        this.albums=res.data.response;
        })
      }
    },
    created(){
     this.getDiscs();
    },
  })