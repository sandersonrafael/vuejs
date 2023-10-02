<template>
  <div>
    <Message :msg="msg" v-show="msg" />
    <div>
      <form id="burger-form" @submit="saveBurger">
        <div class="input-container">
          <label for="nome">Nome do cliente:</label>
          <input type="text" name="name" id="nome" v-model="nome" placeholder="Digite o seu nome">
        </div>

        <div class="input-container">
          <label for="pao">Escolha o pão:</label>
          <select name="pao" id="pao" v-model="pao">
            <option value="">Selecione o seu pão</option>
            <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
          </select>
        </div>

        <div class="input-container">
          <label for="carne">Escolha a carne do seu Burger:</label>
          <select name="carne" id="carne" v-model="carne">
            <option value="">Selecione o tipo de carne</option>
            <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
              {{ carne.tipo }}
            </option>
          </select>
        </div>

        <div id="opcionais-container" class="input-container">
          <label id="opcionais-title" for="opcionais">Escolha os opcionais:</label>
          <div class="checkbox-container" v-for="opcional in opcionaisData" :key="opcional.id">
            <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
            <span>{{ opcional.tipo }}</span>
          </div>

        </div>

        <div class="input-container">
          <input type="submit" class="submit-btn" value="Criar meu Burguer">
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Ingredientes from '../types/Ingredientes';
import BurgerFormData from '../types/BurgerFormDataType';
import BurgerData from '../types/BurgerData';
import Message from './Message.vue';

export default {
  name: 'BurgerForm',
  components: {
    Message,
  },
  data(): BurgerFormData {
    return {
      paes: [],
      carnes: [],
      opcionaisData: [],
      nome: '',
      pao: '',
      carne: '',
      opcionais: [],
      msg: '',
    };
  },
  methods: {
    async getIngredientes() {

      const req = await fetch('/ingredientes.json');
      const data: Ingredientes = await req.json();

      this.paes = [...data.paes];
      this.carnes = [...data.carnes];
      this.opcionaisData = [...data.opcionais];
    },
    saveBurger(e: Event): BurgerData {
      e.preventDefault();

      const savedStorage: null | string = localStorage.getItem('burgers');
      const burgers = savedStorage !== null ? JSON.parse(savedStorage) : { list: [], totalOrders: 0 };

      const data: BurgerData = {
        id: burgers.totalOrders + 1,
        nome: this.nome,
        carne: this.carne,
        pao: this.pao,
        opcionais: Array.from(this.opcionais),
        status: 'Solicitado',
      };

      burgers.list.push(data);
      burgers.totalOrders = data.id;

      localStorage.setItem('burgers', JSON.stringify(burgers));

      this.msg = `Pedido Nº ${data.id} realizado com sucesso`;

      setTimeout(() => this.msg = '', 2000);

      this.nome = '';
      this.pao = '';
      this.carne = '';
      this.opcionais = [];

      return data;
    },
    getBurgers(): BurgerData[] {
      const burgers = localStorage.getItem('burgers');
      const burgersList: BurgerData[] = burgers ? JSON.parse(burgers).list : [];
      return burgersList;
    },
    deleteBurger(sentId: number): BurgerData {
      const burgers = localStorage.getItem('burgers') as string;
      const burgersObj: { list: BurgerData[], totalOrders: number } = JSON.parse(burgers);
      const { list, totalOrders } = burgersObj;
      const newBurgersList = list.filter((item) => item.id !== sentId);

      localStorage.setItem('burgers', JSON.stringify({ list: newBurgersList, totalOrders }));

      return list.find((item) => item.id === sentId) as BurgerData;
    },
  },
  mounted() {
    this.getIngredientes();
  },
};
</script>

<style scoped>
  #burger-form {
    max-width: 400px;
    margin: 0 auto;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #fcba03;
  }

  input, select {
    padding: 5px 10px;
    widows: 300px;
  }

  #opcionais-container {
    flex-direction: row;
    flex-wrap: wrap;
  }

  #opcionais-title {
    width: 100%;
  }

  .checkbox-container {
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
  }

  .checkbox-container span,
  .checkbox-container input {
    width: auto;
  }

  .checkbox-container span {
    margin-left: 6px;
    font-weight: bold;
  }

  .submit-btn {
    background-color: #222;
    color: #fcba03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
  }

  .submit-btn:hover {
    background-color: transparent;
    color: #222;
  }

</style>
