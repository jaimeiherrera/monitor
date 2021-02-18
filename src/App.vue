<template>
  <v-app>
    <v-main>
      <Sidebar/>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar';

export default {
  name: 'App',

  components: {
    Sidebar,
  },

  data: () => ({
    //
  }),
};
</script>

<style>

</style>