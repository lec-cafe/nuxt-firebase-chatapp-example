<template>
  <section class="container">
    <div class="content bg-light">
      <div class="form-group login">
        <input type="text" class="form-control user-name" placeholder="your name..." v-model="name">
        <button type="button" class="btn btn-info" @click="submit">ログイン</button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data(){
      return {
        name:''
      }
    },
    methods: {
      submit () {
        this.$store.commit('SET_ME', this.name)
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  .content{
    height:100vh;
  }
  .login {
    display: flex;
    padding: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .user-name {
    margin-right: 10px;
  }
</style>