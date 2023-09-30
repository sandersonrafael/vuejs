<template>
  <h1>Olá vue!</h1>
  <p>Meu nome é: {{ nome }}</p>
  <MultiplosEventos />
  <h2>Componentes reutilizados são independentes</h2>
  <Reutilizacao />
  <Reutilizacao />
  <Reutilizacao />
  <Reutilizacao />
  <Reutilizacao />
  <Reutilizacao />
  <Reutilizacao />
</template>

<script lang="ts">
import MultiplosEventos from './MultiplosEventos.vue';
import Reutilizacao from './Reutilizacao.vue';

export default {
  name: 'PrimeiroComponente',
  data() { // esses dados só podem ser utilizados dentro desse componente, não fora
    return {
      nome: 'Jaumzim',
      profissao: 'Programador',
    };
  },
  components: {
    MultiplosEventos,
    Reutilizacao,
  },
};
</script>
