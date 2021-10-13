<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="goTo" class="btn btn-primary">Primary</button>
  </div>
</template>


<script>

export default {
  methods: {
    goTo() {
      this.$router.push('no-entry')
    }    
  },
}
</script>

