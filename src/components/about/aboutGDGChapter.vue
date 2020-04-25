<template>
    <v-container class="pa-0 my-0">
        <v-layout wrap align-start justify-start row fill-height class="my-0" >
            <v-flex xs12 sm5 md4 lg4 class="pa-2">
                <v-img
                    :src="require('@/assets/img/mainpages/logo2.png')"
                    :lazy-src="require('@/assets/img/mainpages/logo2.png')"
                    class=""
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
            <v-flex xs12 sm7 md8 lg8 class="pa-2 my-0">


            
            </v-flex> 
           
        </v-layout>

    </v-container>
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
export default {
    data() {
        return {
            chapterDetails: ChapterDetails
        }
    },
}
</script>
