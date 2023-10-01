<template>
  <Navbar :logo="logo_src" :alt="app_name" />

  <RouterView />

  <Footer />
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      logo_src: '/img/logo.png',
      app_name: 'Faça seu Hambúrguer',
    };
  },
};
</script>

<style>
* {
  font-family: Helvetica;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-container {
  margin: 50px;
  min-height: 250px;
}

h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
}
</style>
