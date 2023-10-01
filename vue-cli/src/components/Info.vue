<!-- O v-if faz com que o elemento seja renderizado se uma condição for atingida (true) -->
<template>
  <p>Email passado por props: {{ emailProp }}</p>
  <p v-if="esta_trabalhando">Estou trabalhando no momento</p>
  <p v-else>Não estou trabalhando no momento</p> <!-- Necessita o v-if antes -->
  <button v-on:click="(changeTrabalhando as Function)">mudar</button>
  <p>Utilizo as seguintes tecnologias para back-end:</p>
  <ul>
    <li v-for="(linguagem, index) in linguagens_backend" :key="index">{{ linguagem }}</li>
  </ul>
  <p>Utilizo as seguintes tecnologias para front-end:</p>
  <ul>
    <li v-for="{linguagem, id} in linguagens_frontend" :key="id">{{ linguagem }}</li>
  </ul>
  <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
  <p class="teste">Para acessar meu portfólio, basta clicar <a target="_blank" v-bind:href="portfolio">aqui</a></p>

  <p>imagem de usuario:</p>
  <PictureVue />

</template>

<script lang="ts">
import PictureVue from './PictureVue.vue';
export default {
  name: 'Info',
  props: {
    emailProp: String,
    esta_trabalhando: Boolean,
    changeTrabalhando: Function,
  },
  data() {
    return {
      mostrar_email: true,
      email: 'ciclano@email.com',
      portfolio: 'https://www.bing.com',
      linguagens_backend: ['Javascript', 'PHP', 'Java'],
      linguagens_frontend: [
        { id: 1, linguagem: 'HTML' },
        { id: 2, linguagem: 'CSS' },
        { id: 3, linguagem: 'Vue' },
      ],
    };
  },
  components: {
    PictureVue,
  },
};
</script>

<style>
  .paragrafo-pai {
    color: red;
  }
</style>
