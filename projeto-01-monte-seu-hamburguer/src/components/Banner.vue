<template>
  <di id="main-banner">
    <h1>Faça seu Hambúrguer</h1>
  </di>
</template>

<script lang="ts">
export default {
  name: 'Banner',
};
</script>

<style scoped>

  #main-banner {
    background-image: url('/img/burger.jpg');
    background-position: 0 -250px;
    background-size: cover;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  #main-banner h1 {
    color: #fff;
    text-align: center;
    font-size: 60px;
    background-color: #22222266;
    padding: 20px 40px;
  }

</style>
