<template>
  <h1>{{ teste }}</h1>
  <PrimeiroComponente />
  <p>O dado do app é: {{ teste }}</p>
  <LifeCycleHooks />
  <Pessoa />
</template>

<script lang="ts">
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import LifeCycleHooks from './components/LifeCycleHooks.vue';
import Pessoa from './components/Pessoa.vue';
export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycleHooks,
    Pessoa,
  },
  data() {
    return {
      teste: 'dado testado',
    };
  },
};
</script>
