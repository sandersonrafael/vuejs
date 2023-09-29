<template>
  <h1>{{ teste }}</h1>
  <PrimeiroComponente />
</template>

<script lang="ts">
import PrimeiroComponente from './components/PrimeiroComponente.vue';
export default {
  name: 'App',
  components: {
    PrimeiroComponente,
  },
  data() {
    return {
      teste: 'testado',
    };
  },
};
</script>
