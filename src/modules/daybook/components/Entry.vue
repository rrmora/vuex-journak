<template>
  <div @click="$router.push({name: 'entry', params: {id: 10}})" class="entry-container mb-3 pointer p-2">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs5">julio</span>
            <span class="mx-1 fw-light">2021, martes</span>
        </div>
        <div class="entry-description">
            In nulla do magna in laborum aute occaecat excepteur et et esse. Minim officia eiusmod ea ea consectetur fugiat exercitation laboris mollit. Reprehenderit culpa ut anim consectetur excepteur do aute magna voluptate. Dolor velit duis ad aliquip est. Occaecat duis pariatur laboris aliqua culpa nulla ad eu ullamco nisi sunt incididunt.
        </div>
  </div>
</template>

<script>
export default {

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