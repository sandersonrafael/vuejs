<template>
  <button @click="$emit('mudarImagem')">Mudar Imagem</button>
</template>

<script lang="ts">
export default {
  name: 'MudarImagem',
  emits: ['mudarImagem'],
};

</script>
