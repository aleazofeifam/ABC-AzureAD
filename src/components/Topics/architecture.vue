<template>
  <v-container class="pa-0">
    <v-snackbar v-model="errorAlert" bottom left>
      {{ errorMsg }}
      <v-btn color="pink" flat @click="errorAlert = false">Close</v-btn>
    </v-snackbar>

    <v-layout wrap align-center justify-center row fill-height class="mt-0 mb-0">
      <v-flex xs12 md12 lg12 class="pa-2 mb-0">
        <p class="google-font mb-0" style="font-size:170%;color:#0277bd">Architecture</p>
        <p
          class="google-font mt-0 mb-0"
          style="font-size:120%"
        >Getting started </p>
      </v-flex>
    </v-layout>

    <v-layout
      wrap
      align-start
      justify-start
      row
      fill-height
      class="hidden-sm-and-down my-3"
      :style="{'background-image':'url('+require('@/assets/img/mainpages/Topics.svg')+')'}"
      style="background-position:right"
    >



    <template>
      <v-treeview color="warning" :items="items">
        <template slot="label" slot-scope="props">
          <router-link :to="props.item.to" v-if="props.item.to">{{ props.item.name }}</router-link>
          <span v-else>{{ props.item.name }}</span>
        </template>
      </v-treeview>
    </template>


    </v-layout>

  </v-container>
</template>

<script>

export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: "Auth Protocols",
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
        name: "Tenant Administration",
        children: [
          { id: 6, name: "Learn more" },
          { id: 7, name: "Fix a problem" },
          { id: 8, name: "Manage the service" }
        ]
      },
      {
        id: 9,
        name: "Organizational Structure",
        children: [
          { id: 10, name: "Learn more" },
          { id: 11, name: "Fix a problem" },
          { id: 12, name: "Manage the service" }
        ]
      },
      {
        id: 13,
        name: "Domain Management",
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

<style>
.animate-shimmer {
  background: linear-gradient(286deg, #ffffff, #ddd);
  background-size: 400% 400%;

  -webkit-animation: AnimationName 5s ease infinite;
  -moz-animation: AnimationName 5s ease infinite;
  animation: AnimationName 5s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 52%;
  }
  50% {
    background-position: 100% 49%;
  }
  100% {
    background-position: 0% 52%;
  }
}

@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 52%;
  }
  50% {
    background-position: 100% 49%;
  }
  100% {
    background-position: 0% 52%;
  }
}

@keyframes AnimationName {
  0% {
    background-position: 0% 52%;
  }
  50% {
    background-position: 100% 49%;
  }
  100% {
    background-position: 0% 52%;
  }
}
</style>