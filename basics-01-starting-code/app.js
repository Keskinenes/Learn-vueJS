const app = Vue.createApp({
    data(){
        return{
            courseGoal : 'Finish the course and learn Vue!',
            vueLink : 'https://vuejs.org/'
        };
    },
    methods:{
     outputGoal(){
        const randomNUmber = Math.random()
        if(randomNUmber < 0,5)
            return 'Master Vue!'

        else {
            return  'Learn Vue!'

        }
     }       
    }
});

app.mount('#user-goal');