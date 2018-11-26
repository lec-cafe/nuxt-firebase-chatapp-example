<template>
  <section class="container">
    <app-nav :menu="['menu1','menu2','menu3']"/>
    <app-chat/>
  </section>
</template>

<script>
import AppNav from '~/components/AppNav.vue'
import AppChat from '~/components/AppChat.vue'

export default {
  components: {
    AppNav,
    AppChat
  }
}
</script>

<style>


</style>
