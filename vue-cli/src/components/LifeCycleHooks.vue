<template>
  <h1>Meu nome é: {{ nome }}</h1>
</template>

<script lang="ts">
export default {
  name: 'LifeCycleHooks',
  data() {
    return {
      nome: 'Nome desconhecido',
    };
  },
  // similar ao useEffect(() => {},[]) do React
  created() { // elemento criado
    setTimeout(() => this.nome = 'Nome conhecido 1', 1000);
  },
  mounted() { // elemento carregado na tela completamente
    setTimeout(() => this.nome = 'Nome conhecido 2', 2000);
  },
};
</script>
