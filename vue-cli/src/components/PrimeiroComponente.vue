<template>
  <h1>Olá vue!</h1>
  <p>Meu nome é: {{ nome }}</p>
</template>

<script lang="ts">
export default {
  name: 'PrimeiroComponente',
  data() { // esses dados só podem ser utilizados dentro desse componente, não fora
    return {
      nome: 'Jaumzim',
      profissao: 'Programador',
    };
  },
};
</script>
