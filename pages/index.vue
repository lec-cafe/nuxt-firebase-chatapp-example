<template>
  <section class="container">
    <app-nav :menu="['menu1','menu2','menu3']"/>
    <app-textarea v-model="text"/>
    <app-chat/>
  </section>
</template>

<script>
import AppNav from '~/components/AppNav.vue'
import AppChat from '~/components/AppChat.vue'
import AppTextarea from '~/components/AppTextarea'

export default {
  components: {
    AppNav,
    AppChat,
    AppTextarea
  },
  data(){
    return {
      text: ""
    }
  },
  async mounted(){
    await this.$store.dispatch("INIT_CHAT")
  },
}
</script>

<style scoped>
  .container{
    position: absolute;
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
  }


</style>
