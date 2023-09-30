<!-- O v-if faz com que o elemento seja renderizado se uma condição for atingida (true) -->
<template>
  <p v-if="esta_trabalhando">Estou trabalhando no momento</p>
  <p v-else>Não estou trabalhando no momento</p> <!-- Necessita o v-if antes -->
  <button v-on:click="changeWorking">mudar</button>
  <p>Utilizo as seguintes tecnologias:</p>
  <ul>
    <li>JavaScript</li>
    <li>PHP</li>
    <li>Java</li>
  </ul>
  <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
  <p>Para acessar meu portfólio, basta clicar <a target="_blank" v-bind:href="portfolio">aqui</a></p>

  <p>imagem de usuario:</p>
  <PictureVue />

</template>

<script lang="ts">
import PictureVue from './PictureVue.vue';
export default {
  name: 'Info',
  data() {
    return {
      esta_trabalhando: false,
      mostrar_email: true,
      email: 'ciclano@email.com',
      portfolio: 'https://www.bing.com',
    };
  },
  components: {
    PictureVue,
  },
  methods: {
    changeWorking() {
      this.esta_trabalhando = !this.esta_trabalhando;
      this.mostrar_email = !this.mostrar_email;
    },
  },
};
</script>
