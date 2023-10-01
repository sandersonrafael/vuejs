<template>
  <div id="nav">
    <routerLink to="/" id="logo-url">
      <img :src="logo" :alt="alt" id="logo" />
    </routerLink>
    <routerLink to="/">Home</routerLink>
    <routerLink to="/pedidos">Pedidos</routerLink>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Navbar',
  props: ['logo', 'alt'],
};
</script>

<style scoped>
  #nav {
    background-color: #222;
    border-bottom: 4px solid #111;
    display: flex;
    padding: 15px 50px;
    justify-content: flex-end;
    align-items: center;
  }

  #nav #logo-url {
    margin: auto;
    margin-left: 0;
  }

  #logo {
    width: 40px;
    height: 40px;
  }

  #nav a {
    color: #fcba03;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
  }

  #nav a:hover {
    color: #fff;
  }
</style>
