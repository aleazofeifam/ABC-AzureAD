<template>
  <v-content class="pa-0">

    <v-container fluid class="pt-3 mb-0 grey lighten-5">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="my-0">
            <p class="google-font mb-0" style="font-size:200%;color:#0277bd">List of topics</p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="grey lighten-4">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <Architecture/>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="grey lighten-3" >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <IdentityManagement/>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="grey lighten-2" >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <AccessManagement/>
        </v-flex>
      </v-layout>
    </v-container>

        <v-container fluid class="grey lighten-1" >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <Provisioning/>
        </v-flex>
      </v-layout>
    </v-container>

        <v-container fluid class="grey lighten-2" >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <IdentityGovernance/>
        </v-flex>
      </v-layout>
    </v-container>

  </v-content>
  
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
import Architecture from '@/components/Topics/architecture'
import IdentityManagement from '@/components/Topics/idm'
import AccessManagement from '@/components/Topics/accessm'
import Provisioning from '@/components/Topics/provisioning'
import IdentityGovernance from '@/components/Topics/IdGovernance'

  export default {
    components: {
      Architecture,
      IdentityManagement,
      AccessManagement,
      Provisioning,
      IdentityGovernance
    },
    data() {
      return {
        ChapterDetails: ChapterDetails
      }
    },
  }
</script>
