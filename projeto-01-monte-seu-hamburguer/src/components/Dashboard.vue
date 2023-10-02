<template>
  <div id="burger-table">
    <div>
      <div id="burger-table-heading">
        <div class="order-id">#:</div>
        <div>Cliente:</div>
        <div>Pão:</div>
        <div>Carne:</div>
        <div>Opcionais:</div>
        <div>Ações:</div>
      </div>

      <div id="burger-table-rows">

        <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
          <div class="order-number">{{ burger.id }}</div>
          <div>{{ burger.nome }}</div>
          <div>{{ burger.pao }}</div>
          <div>{{ burger.carne }}</div>
          <div>
            <ul>
              <li v-for="(opcional, index) in burger.opcionais" :key="index">{{ opcional }}</li>
            </ul>
          </div>
          <div>
            <select name="status" class="status">
              <option value="">Selecione</option>
            </select>
            <button class="delete-btn">Cancelar</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BurgerData from '../types/BurgerData';

export default {
  name: 'Dashboard',
  data() {
    return {
      burgers: ([] as BurgerData[]),
      burger_id: (null as number | null),
      status: ([] as string[]),
    };
  },
  methods: {
    async getPedidos() {
      const burgersData: string | null = localStorage.getItem('burgers');
      const list: BurgerData[] = (burgersData ? JSON.parse(burgersData).list : []);
      this.burgers = [...list];

    },
  },
  mounted() {
    this.getPedidos();
  },
};
</script>

<style scoped>
  #burger-table {
    max-width: 1200px;
    margin: 0 auto;
  }

  #burger-table-heading,
  #burger-table-rows,
  .burger-table-row {
    display: flex;
    flex-wrap: wrap;
  }

  #burger-table-heading {
    font-weight: bold;
    padding: 12px;
    border-bottom: 3px solid #333;
  }

  #burger-table-heading div,
  .burger-table-row div {
    width: 19%;
  }

  .burger-table-row {
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #ccc;
  }

  #burger-table-heading .order-id,
  .burger-table-row .order-number {
    width: 5%;
  }

  select {
    padding: 12px 6px;
    margin-right: 12px;
  }

  .delete-btn {
    background-color: #222;
    color: #fcba03;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    transition: .5s;
    cursor: pointer;
  }

  .delete-btn:hover {
    background-color: transparent;
    color: #222;
  }
</style>