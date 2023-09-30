<template>
  <img v-bind:src="caminho" alt="" width="120" height="120">
</template>

<script lang="ts">
export default {
  name: 'PictureVue',
  data() {
    return {
      caminho: '/img/usuario.jpg',
      texto_alternativo: 'Avatar de usuario',
    };
  },
};
</script>
