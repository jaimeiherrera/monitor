<template>
  <v-app>
    <Sidebar />
    <v-app-bar app>
      <!-- -->
    </v-app-bar>
    <v-main>
      <Table />
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";

export default {
  name: "App",
  components: {
    Sidebar,
    Table,
  },
  data: () => ({
    //
  }),
};
</script>

<style>

</style>