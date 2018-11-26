<template>
  <section class="bg-light">
    <div class="post-content">
      <div class="form-group">
        <textarea class="form-control" placeholder="chat text..." rows="3"
                  :value="value"
                  @input="$emit('input', $event.target.value)"
                  ></textarea>
        <div class="post-btn">
          <button @click="post" type="button" class="btn btn-info">投稿</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default{
    props: ['value'],
    methods:{
      async post(){
        await this.$store.dispatch('UPDATE_CHAT_CONTENTS', {text: this.value})
        this.value = ""
      }
    }
  }
</script>

<style scoped>
  .container{
    border-bottom: solid 1px #dedede;
  }
  textarea{
    border:none;
  }
  .form-group{
    margin-bottom:0;
  }
  .post-content{
    position: relative;
  }
  .post-btn{
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .form-control:focus{
    border-color: #cccccc;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
</style>