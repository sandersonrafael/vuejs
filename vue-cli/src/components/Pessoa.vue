<template>
  <h2>Essa é uma descrição de uma pessoa: {{ nome }}</h2>
  <Info />
</template>

<script lang="ts">
import Info from './Info.vue';

export default {
  name: 'Pessoa',
  data() {
    return {
      nome: 'Ciclano',
    };
  },
  components: {
    Info,
  },
};
</script>
