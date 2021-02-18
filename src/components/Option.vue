<template>    
    <v-list-item link>
        <v-list-item-icon>
        <v-icon>{{IconName}}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{OptionName}}</v-list-item-title>
    </v-list-item>
</template>

<script>
export default {
  name: 'Option',
  props: {
    IconName: String,
    OptionName: String
  }
}
</script>

<style scoped>

</style>