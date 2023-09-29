// Instalação e uso
// Vue.createApp(objetoComDados).mount("id_do_elemento")

const MyApp = {
  data(){
    return {
      name: "Fulano",
      age: 35,
      input_name: "",
    }
  },
  /* data binding */
  // Capacidade de mudar em tempo real um dado (por exemplo: através de inputs)
  methods: {
    submitForm(e) {
      e.preventDefault();
      this.name = this.input_name;
    }
  }
};


Vue.createApp(MyApp).mount("#app");


