<template>
  <Banner />
  <div class="main-container">
    <h1>Selecione os ingredientes</h1>
    <BurgerForm />
  </div>
</template>

<script lang="ts">
import Banner from '../components/Banner.vue';
import BurgerForm from '../components/BurgerForm.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    BurgerForm,
  },
};
</script>
