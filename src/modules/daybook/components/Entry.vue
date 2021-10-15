<template>
  <div @click="$router.push({name: 'entry', params: {id: entry.id}})" class="entry-container mb-3 pointer p-2">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">{{dayMonthYear.day}}</span>
            <span class="mx-1 fs5">{{dayMonthYear.month}}</span>
            <span class="mx-1 fw-light">{{dayMonthYear.yearDay}}</span>
        </div>
        <div class="entry-description">
            {{truncateText}}
        </div>
  </div>
</template>

<script>
import getDayMonthYear from '../helpers/getDayMonthYear'
export default {
    props: {
        entry: {
            type: Object,
            required: true,
        }
    },
    computed: {
        truncateText() {
            return (this.entry.text.length > 150) ? this.entry.text.substring(0, 150) + '...': this.entry.text
        },
        dayMonthYear() {
            const {day, month, yearDay} = getDayMonthYear(this.entry.date)
            return {day, month, yearDay}
        }
    }
}
</script>

<style lang="scss" scoped>
    .entry-container {
     border-bottom: 1px solid #2ce350;
     transition: 0.2 all ease-in;

     &:hover {
         background-color: lighten($color: grey, $amount: 45);
         transition: 0.2 all ease-in;

     }
    }

    .entry-description {
        font-size: 12px;
        text-align: justify;
    }
</style>