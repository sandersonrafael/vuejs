<template>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Projetos</a></li>
    <li><a href="#">Contato</a></li>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'Header',
};
</script>

<style scoped>
  ul {
    list-style: none;
    display: flex;
    background-color: #555;
    border-radius: 2px;
  }

  li {
    margin-right: 10px;
  }

  a {
    color: #ddd;
    text-decoration: none;
    transition: all .5s ease;
  }

  a:hover {
    color: turquoise;
  }
</style>
