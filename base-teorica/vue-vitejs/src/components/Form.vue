<template>
  <form @submit="submitEvent($event)">
    <!-- método 1 para atualizar valor do input -->
    <input type="text" placeholder="nome" v-model="nome">

    <input type="text" placeholder="email" v-model="email">

    <!-- método 2 -->
    <input type="number" :value="telefone" @input="changeNumber" placeholder="telefone">
    <input type="submit" value="Enviar">
  </form>
</template>

<script lang="ts">
/* eslint-disable no-console */
export default {
  name: 'Form',
  data() {
    return {
      nome: '',
      email: '',
      telefone: '',
    };
  },
  methods: {
    submitEvent(e: Event) {
      e.preventDefault();
      console.log('Formulário enviado');
      console.log('Nome: ', this.nome);
      console.log('Email: ', this.email);
      console.log('Telefone: ', this.telefone);
    },
    changeNumber(e: Event) {
      // const { target } = e;
      // this.telefone = (target as HTMLInputElement).value;
      // ou
      const target = e.target as HTMLInputElement;
      this.telefone = target.value;
    },
  },
};
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    max-width: max-content;
  }
</style>
