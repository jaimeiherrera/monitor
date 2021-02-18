<template>
    <div class="">
        <v-navigation-drawer permanent expand-on-hover>
            <v-list>
                <v-list-item class="px-2">
                    <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-content>
                    <v-list-item-title class="title">
                        Sandra Adams
                    </v-list-item-title>
                    <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list nav dense>
                <Option IconName="mdi-folder" OptionName="My Files"/>
                <Option IconName="mdi-account-multiple" OptionName="Shared with me"/>
                <Option IconName="mdi-star" OptionName="Starred"/>
            </v-list>

            <v-divider></v-divider>
        </v-navigation-drawer>
    </div>
</template>

<script>
import Option from '../components/Option.vue'

export default {
    name: "Sidebar",
    components: {
        Option
    }
}
</script>

<style scoped>

</style>