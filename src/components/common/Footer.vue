<template>
  <v-footer color="white" height="auto" class="hidden-sm-and-down">
    <v-container
      fluid
      style="border-color:#e0e0e0;border-width: 1px;border-style: solid;border-bottom: 0"
    >
      <v-layout wrap justify-center row>
        <v-flex xs12 md10 lg10>
          <v-layout wrap align-start justify-start row class="my-2">
            <v-flex xs12 md3 sm4 lg3 class="py-2">
              <p class="google-font" style="font-size:130%">
                Contact:
                <span v-for="(item,i) in ChapterDetails.socialLinks" :key="i">
                  <v-tooltip top>
                    <v-btn flat icon :href="item.link" target="_blank" slot="activator">
                      <v-icon>{{item.icon}}</v-icon>
                    </v-btn>
                    <span>{{item.name}}</span>
                  </v-tooltip>
                </span>
              </p>
            </v-flex>

            <v-flex xs12 md3 sm4 lg3 class="py-2">
              <p class="google-font" style="font-size:130%">
                Resources:
                <span v-for="(item,i) in ChapterDetails.ReferenceLinks" :key="i">
                  <v-tooltip top>
                    <v-btn flat icon :href="item.link" target="_blank" slot="activator">
                      <v-icon>{{item.icon}}</v-icon>
                    </v-btn>
                    <span>{{item.name}}</span>
                  </v-tooltip>
                </span>
              </p>
            </v-flex>

            <v-flex xs12 md20 sm4 lg3 class="py-2">
              <v-flex xs20 md30 lg16>
                <v-toolbar flat color="white" class="pa-0 mx-0" style="padding:0 !important">
                  <v-toolbar-title
                    class="google-font pl-0 ml-0 mr-3"
                    style="font-size:200%"
                  >{{ChapterDetails.ChapterName}}</v-toolbar-title>
                </v-toolbar>
              </v-flex>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>

    </v-container>
  </v-footer>
</template>

<script>

var _qevents = _qevents || [];

(function() {
var elem = document.createElement('script');
elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
elem.async = true;
elem.type = "text/javascript";
var scpt = document.getElementsByTagName('script')[0];
scpt.parentNode.insertBefore(elem, scpt);
})();

_qevents.push({
qacct:"p-62f4Jmy1_a_VY"
});

import ChapterDetails from "@/assets/data/chapterDetails.json";
import FooterData from "@/assets/data/footer.json";
export default {
  data() {
    return {
      ChapterDetails: ChapterDetails,
      FooterData: FooterData
    };
  }
};
</script>

<!-- Quantcast Tag -->


<noscript>
<div style="display:none;">
<img src="//pixel.quantserve.com/pixel/p-62f4Jmy1_a_VY.gif" border="0" height="1" width="1" alt="Quantcast"/>
</div>
</noscript>
<!-- End Quantcast tag -->