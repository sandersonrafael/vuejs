<template>
  <div>
    <button
      @click="primeiro(txt1, $event), segundo(txt2, $event), terceiro()"
    >
      Ativar múltiplos eventos
    </button>
    <p>{{ multiplos_eventos }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MultiplosEventos',
  data() {
    return {
      multiplos_eventos: '',
      txt1: 'Primeiro',
      txt2: 'Segundo',
    };
  },
  methods: {
    primeiro(txt: string, e: Event) {
      e;
      this.multiplos_eventos = `${txt} evento ativado`;
    },
    segundo(txt: string, e: Event) {
      e;
      setTimeout(() => this.multiplos_eventos = `${txt} evento ativado`, 500);
    },
    terceiro() {
      setTimeout(() => this.multiplos_eventos = '', 1000);
    },
  },
};
</script>

<style scoped>
  div {
    width: 300px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  button {
    width: 50%;
    height: 50%;
    background-color: white;
    border-radius: 20px;
    border: none;
    outline: none;
    cursor: pointer;
  }

  button:hover {
    opacity: .7;
  }
</style>
