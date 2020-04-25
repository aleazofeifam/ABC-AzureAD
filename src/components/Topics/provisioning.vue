<template>
  <v-container class="pa-0 mb-3">
    <v-snackbar v-model="errorAlert" bottom left>
      {{ errorMsg }}
      <v-btn color="pink" flat @click="errorAlert = false">Close</v-btn>
    </v-snackbar>

    <v-layout wrap align-center justify-center row fill-height class="mt-0 mb-0">
      <v-flex xs12 md12 lg12 class="pa-2 mb-0">
        <p class="google-font mb-0" style="font-size:170%;color:#0277bd">Provisioning</p>
        <p
          class="google-font mt-0 mb-0"
          style="font-size:110%;color:#616161 "
        >Synchronize your objects from a source system to a target system.</p>
      </v-flex>
    </v-layout>

    <v-layout wrap row>
      <v-col cols="12">
        <v-card color="#385F73" dark>
          <v-card-title class="headline">AAD Connect</v-card-title>

          <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

          <v-card-actions>
            <v-btn text>Listen Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card color="#385F73" dark>
          <v-card-title class="headline">AAD Connect Health</v-card-title>

          <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

          <v-card-actions>
            <v-btn text>Listen Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card color="#385F73" dark>
          <v-card-title class="headline">Sync Fabric</v-card-title>

          <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

          <v-card-actions>
            <v-btn text>Listen Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card color="#385F73" dark>
          <v-card-title class="headline">B2B</v-card-title>
          <v-card-subtitle> <p></p>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
        </v-card>
      </v-col>
    </v-layout>
  </v-container>

  
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
import { MeetupAPI } from "@/config/key";
export default {
  data() {
    return {
      chapterDetails: ChapterDetails,
      eventsData: [],
      showLoader: true,
      showData: false,
      errorMsg: "",
      errorAlert: false,
      notFoundPastEventFlag: false
    };
  },
  created() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.meetup.com/" +
        MeetupAPI.urlname +
        "/events?desc=true&photo-host=public&page=8&status=past&sign=true"
    )
      .then(data => data.json())
      .then(res => {
        if (res.length > 0) {
          this.showLoader = false;
          this.showData = true;
          this.eventsData = res;
        } else {
          this.notFoundPastEventFlag = true;
          this.showLoader = false;
        }
      })
      .catch(e => {
        this.showLoader = false;
        this.errorMsg = "Issue found with " + e;
        this.errorAlert = true;
        this.notFoundPastEventFlag = true;
      });
  },
  methods: {
    getCharString(data) {
      var splitArr = data.split(" ");
      if (splitArr.length > 1) {
        return (
          splitArr[0].substring(0, 1) +
          "" +
          splitArr[1].substring(0, 1)
        ).toUpperCase();
      } else {
        return splitArr[0].substring(0, 1).toUpperCase();
      }
    }
  },
  filters: {
    summery: (val, num) => {
      return val.substring(0, num) + "..";
    },

    dateFilter: value => {
      const date = new Date(value);
      return date.toLocaleString(["en-US"], {
        month: "short",
        day: "2-digit",
        year: "numeric"
      });
    }
  }
};
</script>

<style scoped>
</style>

