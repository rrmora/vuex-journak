<template>
      <button class="btn btn-primary text-center">
          <i class="fa fa-plus align-self-center" :class="icon"/>
      </button>
</template>
<script>
  export default {
    props: {
      icon: {
        type: String,
        default: 'fa-plus'
      }
    }
  }

</script>

<style lang="scss" scoped>
  button {
    border-radius: 100%;
    bottom: 15px;
    height: 50px;
    position: fixed;
    right: 15px;
    width: 50px;    
  }
</style>