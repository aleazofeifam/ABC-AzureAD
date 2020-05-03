<template>
    <v-container class="pa-0">
        <v-layout wrap align-center justify-center row fill-height >
           <v-flex xs12 md3 lg3 class="pa-2">
               <p class="google-font" style="font-size:180%">What we do</p>
               <p class="google-font" style="font-size:110%">We create content related to AAD that is easy to follow, sharing best practices and troubleshooting guides.</p>

                <br>
                <span v-for="(item,i) in whatWeDoData" :key="i">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }" >
                            <a :href="item.link" target="_blank" flat class="ma-0">
                                <img :src="getImgUrl(item.image)" width="30vh" alt="" srcset="" dark v-on="on">
                            </a> 
                            &nbsp;&nbsp;&nbsp;
                        </template>
                        <span>{{item.TechName}}</span>
                    </v-tooltip>
                </span>
                
                <br><br>
                
               <router-link to="/Topics" class="google-font" style="text-decoration:none;color:Navy;font-size:180%">Go to  topics</router-link>

            </v-flex> 
            <v-flex xs12 md9 lg9 class="">
                <v-layout row wrap>

                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <i large style="font-size:300%" class="fas fa-user-times"></i>
                        <p> </p>
                        <p class="google-font" style="font-size:130%">Access Management</p>
                        <p class="google-font" style="font-size:110%">Learn how to use it to interact with your resources directly from your command line</p>
                    </v-flex>

                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                   
                        <i large style="font-size:300%" class="fas fa-users-cog"></i>
                        <p> </p>
                        <p class="google-font" style="font-size:130%">Identity Management</p>
                        <p class="google-font" style="font-size:110%">Microsoft have multiple APIs we will learn how to perform multiple operations that can't be done from the Portal </p>
                    </v-flex>

                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <i style="font-size:300%" class="fas fa-user-shield"></i>
                        <p> </p>
                        <p class="google-font" style="font-size:130%">Identity Governance</p>
                        <p class="google-font" style="font-size:110%">Take the most out of the Portal, learn some tips and tricks</p>
                    </v-flex>

                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <i style="font-size:300%" class="fas fa-terminal"></i>
                         <p> </p>
                        <p class="google-font" style="font-size:130%">Maximize tools</p>
                        <p class="google-font" style="font-size:110%">Learn how to use the Azure CLI, APIs, and learn tricks from the portal</p>
                    </v-flex>

                </v-layout>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
import whatWeDoData from '@/assets/data/whatWeDoComponentData.json'
import ChapterDetails from '@/assets/data/chapterDetails.json'
export default {
    data() {
        return {
            chapterDetails: ChapterDetails,
            whatWeDoData: whatWeDoData
        }
    },
    methods:{
        getImgUrl(url) {
            if(url.length>0){
                return require('@/assets/img/what-we-do/'+url)
            }else{
                return require('@/assets/img/what-we-do/notFound.png')
            }
        },
    }
}
</script>
