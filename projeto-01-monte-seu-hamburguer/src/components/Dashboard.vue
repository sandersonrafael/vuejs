<template>
  <div id="burger-table">
    <Message :msg="msg" v-show="msg" />

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
            <select name="status" class="status" :value="burger.status" @change="updateBurgerStatus($event, burger.id)">
              <option v-for="status in statusList" :value="status.tipo" :key="status.id" >
                {{ status.tipo }}
              </option>
            </select>
            <button @click="deleteBurger(burger.id)" class="delete-btn">Cancelar</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BurgerData from '../types/BurgerData';
import Item from '../types/Item';
import Message from './Message.vue';

export default {
  name: 'Dashboard',
  components: {
    Message,
  },
  data() {
    return {
      burgers: ([] as BurgerData[]),
      burger_id: (null as number | null),
      statusList: ([] as Item[]),
      msg: '',
    };
  },
  methods: {
    async getPedidos() {
      const burgersData: string | null = localStorage.getItem('burgers');
      const list: BurgerData[] = (burgersData ? JSON.parse(burgersData).list : []);
      this.burgers = [...list];
    },
    async getStatusList() {
      const req = await fetch('/status.json');
      const statusList: Item[] = await req.json();

      this.statusList = [...statusList];
    },
    deleteBurger(sentId: number): BurgerData {
      const burgers = localStorage.getItem('burgers') as string;
      const burgersObj: { list: BurgerData[], totalOrders: number } = JSON.parse(burgers);
      const { list, totalOrders } = burgersObj;
      const newBurgersList = list.filter((item) => item.id !== sentId);

      localStorage.setItem('burgers', JSON.stringify({ list: newBurgersList, totalOrders }));

      this.showMessage(`Pedido #${sentId} cacelado!`);

      this.getPedidos();

      return list.find((item) => item.id === sentId) as BurgerData;
    },
    updateBurgerStatus(e: Event, sentId: number): BurgerData[] {
      const newStatus = (e.target as HTMLSelectElement).value;
      const burgersStorage = localStorage.getItem('burgers') as string;
      const burgers: { list: BurgerData[], totalOrders: number } = JSON.parse(burgersStorage);
      const list = [...burgers.list];

      const newlist = list.map((item) => item.id !== sentId ? item : { ...item, status: newStatus });
      burgers.list = [...newlist];

      localStorage.setItem('burgers', JSON.stringify(burgers));

      this.showMessage(`Status do pedido #${sentId} atualizado!`);

      return burgers.list;
    },
    showMessage(msg: string) {
      this.msg = msg;
      setTimeout(() => this.msg = '', 3000);
    },
  },
  mounted() {
    this.getPedidos();
    this.getStatusList();
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
