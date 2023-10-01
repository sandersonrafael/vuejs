<template>
  <footer id="footer">
    <p>Faça seu Hambúrguer &copy;</p>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'Footer',
};
</script>

<style scoped>
  #footer {
    height: 200px;
    background-color: #222;
    border-top: 4px solid #111;
    color: #fcba03;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
</style>
