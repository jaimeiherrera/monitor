<template>
  <v-navigation-drawer app permanent expand-on-hover>
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="title"> Sandra Adams </v-list-item-title>
          <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
      <div v-for="opt in OptionMenu" :key="opt.Opt">
        <Option :IconName="opt.Icon" :OptionName="opt.Opt" />
      </div>
    </v-list>

    <v-divider></v-divider>
  </v-navigation-drawer>
</template>

<script>
import Option from "../components/Option.vue";

export default {
  name: "Sidebar",
  components: {
    Option,
  },
  data: () => {
    return {
      OptionMenu: [
        { Icon: "mdi-folder", Opt: "My Files" },
        { Icon: "mdi-account-multiple", Opt: "Shared with me" },
        { Icon: "mdi-star", Opt: "Starred" },
      ],
    };
  },
};
</script>

<style scoped>
</style>