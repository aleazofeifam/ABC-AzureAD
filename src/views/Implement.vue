<template>
  <v-content class="pa-0">

    <v-container fluid class="mt-3 mb-0">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="my-0">
            <p class="google-font mb-0" style="font-size:200%;color:#616161">Let's do it!</p>
            <p class="google-font mt-0 mb-0" style="font-size:110%"> Whether you are a developer or an adminstrator it's always useful to have a guide where you can see how it's done and the end result. <br>
                This is what this Wiki is all about, helping you help yourself. </p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <users/>
        </v-flex>
      </v-layout>
    </v-container>


    <v-container fluid >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <b2b/>
        </v-flex>
      </v-layout>
    </v-container>


    <v-container fluid >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <organizingTeam/>
        </v-flex>
      </v-layout>
    </v-container>

  </v-content>
  
</template>

<script>
import TeamDetails from '@/assets/data/chapterDetails.json'
import users from '@/components/Implement/videos/users'
import b2b from '@/components/Implement/videos/b2b'
  export default {
    components: {
      users,
      b2b
    },
    data() {
      return {
        TeamDetails: TeamDetails,
      }
    },
  }
</script>
