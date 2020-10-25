<template>
    <v-container class="pa-0 mb-5">

        <v-layout wrap align-start justify-start row fill-height class="mt-0 mb-0">
            <v-flex xs12 class="mb-3">
                <p class="google-font" style="font-size:130%;">B2B! Let's invite external identities</p>
                <v-divider></v-divider>
            </v-flex>

            <v-flex xs12 md3 lg3 v-for="(item,i) in TeamDetails" :key="i">
                <v-list three-line class="pa-2">
                    <template >
                
                        <v-list-tile-content>
                            <v-list-tile-title class="google-font" style="font-size:110%;" v-html="item.name"></v-list-tile-title>
                            <v-list-tile-sub-title><span class="google-font">{{item.designation}}</span></v-list-tile-sub-title>
                            <v-list-tile-sub-title>
                                

                                <v-btn class="mt-0 mx-0" icon v-if="(item.youtube).length>0" :href="item.youtube" target="_blank">
                                    <v-icon medium style="color:#FF0000">fab fa-youtube</v-icon>
                                </v-btn>

                                <v-btn class="mt-0 mx-0" icon v-if="(item.microsoft).length>0" :href="item.microsoft" target="_blank">
                                    <v-icon medium style="color:#00A4EF">fab fa-microsoft</v-icon>
                                </v-btn>

                                <v-btn class="mt-0 mx-0" icon v-if="(item.github).length>0" :href="item.github" target="_blank">
                                    <v-icon medium style="color:#333">fab fa-github</v-icon>
                                </v-btn>


                            </v-list-tile-sub-title>
                        </v-list-tile-content>
        
                    </template>
                </v-list>
            </v-flex>
         
        </v-layout>



    </v-container>
</template>

<script>
import TeamDetails from '@/assets/data/Videos/B2B.json'
export default {
    data() {
        return {
            TeamDetails: TeamDetails,
            showLoader: true,
            showData:false,
        }
    },
    mounted(){
        
    },
    methods:{
        getImgUrl(pic) {
            if(pic.length>0){
                return require('@/assets/img/team/'+pic)
            }else{
                return require('@/assets/img/team/avatar.png')
            }
        },
    },
    filters:{
        summery: (val,num)=>{
            return val.substring(0,num)+".."
        }
    }
}
</script>
