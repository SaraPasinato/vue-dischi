/** 
 * ! Descrizione:
** Attraverso una chiamata ajax all’API di boolean:
** https://flynn.boolean.careers/exercises/api/array/music
** avremo a disposizione una decina di dischi musicali.
** Utilizzando vue, stampiamo a schermo una card per ogni album.
* 
* !BONUS:
* TODO 1)Ordinare i dischi per anno di uscita.
* TODO 2)Creare una select con tutti i generi dei dischi. In base a cosa
* TODO       scegliamo nella select, vedremo i corrispondenti cd. 
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