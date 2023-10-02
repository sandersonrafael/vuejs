<template>
  <div>
    <img v-bind:src="caminho" alt="" width="120" height="120">
    <p>Testando emit</p>
    <MudarImagem @mudar-imagem="metodoPai" />
  </div>
</template>

<script lang="ts">
import MudarImagem from './MudarImagem.vue';

export default {
  name: 'PictureVue',
  data() {
    return {
      caminho: '/img/usuario.jpg',
      texto_alternativo: 'Avatar de usuario',
    };
  },
  components: {
    MudarImagem,
  },
  methods: {
    metodoPai() {
      this.caminho = this.caminho === '/img/usuario.jpg' ? '/img/usuario2.png' : '/img/usuario.jpg';
    },
  },
};
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
  }

  button {
    display: block;
    margin-top: 10px;
    width: 120px;
  }
</style>
