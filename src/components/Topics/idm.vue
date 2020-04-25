<template>
  <v-container class="pa-0 mb-3">
    <v-layout wrap align-center justify-center row fill-height class="mt-0 mb-0">
      <v-flex xs12 md12 lg12 class="pa-2 mb-0">
        <p class="google-font mb-0" style="font-size:170%;color:#0277bd">Provisioning</p>
        <p class="google-font mt-0 mb-0" style="font-size:110%;color:#616161 ">Activity to synchronize the identities from a source to a target system </p>

      </v-flex>
    </v-layout>

    <template>
      <v-treeview color="warning" :items="items">
        <template slot="label" slot-scope="props">
          <router-link :to="props.item.to" v-if="props.item.to">{{ props.item.name }}</router-link>
          <span v-else>{{ props.item.name }}</span>
        </template>
      </v-treeview>
    </template>
  </v-container>
</template>




<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: "AAD Connect",
        children: [
          {
            id: 2,
            name: "Learn more",
            to: "/Provisioning/AADConnect"
          },
          { id: 3, name: "Fix a problem", to: "About" },
          { id: 4, name: "Manage the service" }
        ]
      },
      {
        id: 5,
        name: "AAD Connect Health",
        children: [
          { id: 6, name: "Learn more" },
          { id: 7, name: "Fix a problem" },
          { id: 8, name: "Manage the service" }
        ]
      },
      {
        id: 9,
        name: "B2B",
        children: [
          { id: 10, name: "Learn more" },
          { id: 11, name: "Fix a problem" },
          { id: 12, name: "Manage the service" }
        ]
      },
      {
        id: 13,
        name: "Automated Provisioning",
        children: [
          { id: 14, name: "Learn more", link: "www.google.com" },
          { id: 15, name: "Fix a problem" },
          { id: 16, name: "Manage the service" }
        ]
      }
    ]
  })
};
</script>


<style scoped>
</style>

