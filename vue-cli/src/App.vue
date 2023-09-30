<template>
  <Header />
  <h1>{{ teste }}</h1>
  <PrimeiroComponente />
  <p class="paragrafo-pai">O dado do app é: {{ teste }}</p>
  <LifeCycleHooks />
  <Pessoa />
</template>

<script lang="ts">
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import LifeCycleHooks from './components/LifeCycleHooks.vue';
import Pessoa from './components/Pessoa.vue';
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycleHooks,
    Pessoa,
    Header,
  },
  data() {
    return {
      teste: 'dado testado',
    };
  },
};
</script>

<style>
  body {
    background-color: #333;
    color: #fff;
  }
  a {
    color: red;
  }
  .teste {
    background-color: #000;
  }
</style>
