<template>

</template>

<script>
import datap from '@/assets/data/partners.json'
import chapterDetails from '@/assets/data/chapterDetails.json'
export default {
    data() {
        return {
            partnerData: datap,
            chapterDetails: chapterDetails
        }
    },
    methods:{
        getImgUrl(pic) {
            return require('@/assets/img/partners/'+pic)
        },
    }
}
</script>