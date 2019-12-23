<template>
    <router-view></router-view>
</template>

<script>

export default {
  name: 'appRoot',
  data () {
    return {}
  },
  created () {
      console.log('Current router adalah:' + this.$router.currentRoute.path);
  },
  components: {
  }
}
</script>

<style>

</style>
