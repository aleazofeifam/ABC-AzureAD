<template>
  <v-card color="white" height="60px" class="white hidden-sm-and-up" flat>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      app
      color="white"
      class="elevation-2"
      
    >
      <v-btn
        color="#518FF5"
        flat
        value="Home"
        router
        to="/home"
      >
        <span>Home</span>
        <v-icon>dashboard</v-icon>
      </v-btn>

      <v-btn
        color="#518FF5"
        flat
        value="Topics"
        router
        to="/Topics"
      >
        <span>Topics</span>
        <v-icon>toc</v-icon>
      </v-btn>

      <v-btn
        color="#518FF5"
        flat
        value="Troubleshoot"
        router
        to="/Troubleshoot"
      >
        <span>Troubleshoot</span>
        <v-icon>rounded_corner</v-icon>
      </v-btn>

      <v-btn
        color="#518FF5"
        flat
        value="About"
        router
        to="/About"
      >
        <span>About</span>
        <v-icon>bookmark</v-icon>
      </v-btn>

      

      <!-- <v-btn
        color="#518FF5"
        flat
        value="contact"
        router
        to="/contact"
      >
        <span>Contant</span>
        <v-icon>person</v-icon>
      </v-btn> -->

    </v-bottom-nav>
  </v-card>
</template>


<script>
  export default {
    data () {
      return {
        bottomNav: 'recent',
        items: [
            { title: 'Home', icon: 'dashboard', route:"/home" },
            { title: 'Topics', icon: 'toc', route:"/Topics" },
            { title: 'Troubleshoot', icon: 'rounded_corner', route:"/Troubleshoot" },
            { title: 'About', icon: 'bookmark', route:"/About" }
        ],
      }
    }
  }
</script>