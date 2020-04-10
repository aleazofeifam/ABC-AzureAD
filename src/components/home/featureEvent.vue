<template>
    <v-container class="pa-0 my-0">
        <v-layout wrap align-center justify-center row fill-height class="mt-2 elevation-2 white" style="border:1px solid #e0e0e0;border-radius:5px">
            <v-flex xs12 sm4 md3 lg3 class="pa-4" >
                <v-img
                    :src="getImgUrl(Users123.EventImage)"
                    :lazy-src="getImgUrl(Users123.EventImage)"
                    width="100%">
                    <v-layout
                        slot="placeholder"
                        fill-height
                        align-center
                        justify-center
                        ma-0
                    >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                </v-img>
            </v-flex>
            
           <v-flex xs12 sm8 md9 lg9 class="pa-2 py-4 px-3" >
                <p class="google-font mb-0" style="font-size:150%;color:rgb(2, 119, 189)">{{Users123.FeatureEventName}}</p>
                <span class="google-font mt-1 mb-0 grey--text"  style="font-size:105%">
                    <v-icon small>insert_invitation</v-icon>
                    Date Created 
                    {{Users123.EventDate.Date +'/'+ Users123.EventDate.Month +'/'+ Users123.EventDate.Year}} 
                    &nbsp;
      
                </span>    
               <p class="google-font mt-2 mb-1" style="font-size:115%;color:#757575">
                   {{Users123.EventDescription}}
               </p>
                
                <v-btn color="#1a73e8" v-if="Users123.RegistrationLink.length>0" :href="Users123.RegistrationLink" target="_blank" class="ma-0 elevation-0 my-2" dark style="text-transform: capitalize;border-radius:5px;"> 
                    Registration Link
                </v-btn>
                &nbsp;

                <v-tooltip top slot="activator" v-if="Users123.EventWebsite.length>0">
                    <v-btn flat icon color="#616161" class="ma-0 elevation-0" slot="activator" 
                    :href="Users123.EventWebsite"
                    target="_blank"
                    style="text-transform: capitalize;border-radius:5px;"> 
                        <v-icon>language</v-icon>
                    </v-btn>
                    <span>See {{Users123.FeatureEventName}} Website</span>
                </v-tooltip>

                <v-tooltip top slot="activator" 
                v-if="Users123.MeetupLink.length>0">
                    <v-btn flat icon color="#616161"
                    :href="Users123.MeetupLink"
                    target="_blank"
                    class="ma-0 elevation-0" slot="activator" style="text-transform: capitalize;border-radius:5px;"> 
                        <v-icon>fab fa-meetup</v-icon>
                    </v-btn>
                    <span>See {{Users123.FeatureEventName}} Meetup</span>
                </v-tooltip>

                <v-tooltip top slot="activator" v-if="Users123.FBEventPageURL.length>0">
                    <v-btn flat icon color="#616161"
                    :href="Users123.FBEventPageURL"
                    target="_blank"
                    class="ma-0 elevation-0" slot="activator" style="text-transform: capitalize;border-radius:5px;"> 
                        <v-icon >fab fa-facebook-f</v-icon>
                    </v-btn>
                    <span>See {{Users123.FeatureEventName}} Facebook Page</span>
                </v-tooltip>
            
            </v-flex> 
        </v-layout>

    
        <v-layout wrap align-center justify-center row fill-height class="mt-2 elevation-2 white" style="border:1px solid #e0e0e0;border-radius:5px">
            <v-flex xs12 sm4 md3 lg3 class="pa-4" >
                <v-img
                    :src="getImgUrl(eventDetails.EventImage)"
                    :lazy-src="getImgUrl(eventDetails.EventImage)"
                    width="100%">
                    <v-layout
                        slot="placeholder"
                        fill-height
                        align-center
                        justify-center
                        ma-0
                    >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                </v-img>
            </v-flex>
            
           <v-flex xs12 sm8 md9 lg9 class="pa-2 py-4 px-3" >
                <p class="google-font mb-0" style="font-size:150%;color:rgb(2, 119, 189)">{{eventDetails.FeatureEventName}}</p>
                <span class="google-font mt-1 mb-0 grey--text"  style="font-size:105%">
                    <v-icon small>insert_invitation</v-icon>
                    Date Created 
                    {{eventDetails.EventDate.Date +'/'+ eventDetails.EventDate.Month +'/'+ eventDetails.EventDate.Year}} 
                    &nbsp;
      
                </span>    
               <p class="google-font mt-2 mb-1" style="font-size:115%;color:#757575">
                   {{eventDetails.EventDescription}}
               </p>
                
                <v-btn color="#1a73e8" v-if="eventDetails.RegistrationLink.length>0" :href="eventDetails.RegistrationLink" target="_blank" class="ma-0 elevation-0 my-2" dark style="text-transform: capitalize;border-radius:5px;"> 
                    Registration Link
                </v-btn>
                &nbsp;

                <v-tooltip top slot="activator" v-if="eventDetails.EventWebsite.length>0">
                    <v-btn flat icon color="#616161" class="ma-0 elevation-0" slot="activator" 
                    :href="eventDetails.EventWebsite"
                    target="_blank"
                    style="text-transform: capitalize;border-radius:5px;"> 
                        <v-icon>language</v-icon>
                    </v-btn>
                    <span>See {{eventDetails.FeatureEventName}} Website</span>
                </v-tooltip>

                <v-tooltip top slot="activator" 
                v-if="eventDetails.MeetupLink.length>0">
                    <v-btn flat icon color="#616161"
                    :href="eventDetails.MeetupLink"
                    target="_blank"
                    class="ma-0 elevation-0" slot="activator" style="text-transform: capitalize;border-radius:5px;"> 
                        <v-icon>fab fa-meetup</v-icon>
                    </v-btn>
                    <span>See {{eventDetails.FeatureEventName}} Meetup</span>
                </v-tooltip>

                <v-tooltip top slot="activator" v-if="eventDetails.FBEventPageURL.length>0">
                    <v-btn flat icon color="#616161"
                    :href="eventDetails.FBEventPageURL"
                    target="_blank"
                    class="ma-0 elevation-0" slot="activator" style="text-transform: capitalize;border-radius:5px;"> 
                        <v-icon >fab fa-facebook-f</v-icon>
                    </v-btn>
                    <span>See {{eventDetails.FeatureEventName}} Facebook Page</span>
                </v-tooltip>
            
            </v-flex> 
        </v-layout>
        

    </v-container>


       

</template>

<script>
import Users123 from '@/assets/data/featureEvent.json'
import eventDetails from '@/assets/data/featureEvent.json'

export default {
    components:{
    },
    data() {
        return {
            Users123:Users123,
            eventDetails:eventDetails,
        }
    },
    created(){
        
    },
    methods:{
        getImgUrl(pic) {
            if(pic.length>0){
                return require('@/assets/img/featureEvent/'+pic)
            }else{
                return require('@/assets/img/featureEvent/imagenotfound.png')
            }
        },
    },
    filters:{
        summery: (val,num)=>{
            return val.substring(0,num)+".."
        },
        dateFilter: (value)=>{
            const date = new Date(value)
            return date.toLocaleString(['en-US'], {month: 'short', day: '2-digit', year: 'numeric'})
        }
    }
}
</script>
