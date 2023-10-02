<template>
  <h2>Essa é uma descrição de uma pessoa: {{ nome }}</h2>
  <Info :emailProp="email" :changeTrabalhando=changeTrabalhando :esta_trabalhando=esta_trabalhando />
</template>

<script lang="ts">
import Info from './Info.vue';

export default {
  name: 'Pessoa',
  data() {
    return {
      nome: 'Ciclano',
      email: 'email-de-fulano@email.com',
      esta_trabalhando: false,
    };
  },
  components: {
    Info,
  },
  methods: {
    changeTrabalhando() {
      this.esta_trabalhando = !this.esta_trabalhando;
    },
  },
};
</script>
