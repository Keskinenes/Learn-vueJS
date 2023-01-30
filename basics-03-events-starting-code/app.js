const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods:{
    setName(event){
      this.name = event.target.value;
    },
    addCount(){
      return this.counter++;
    },
    reduceCount(){
      return this.counter--;
    },
    add(num){
      return this.counter = this.counter + num;
    },
    reduce(num){
      return this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
