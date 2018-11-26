<template>
  <section v-if="hasChatContents" class="chat-section">
    <div v-for="chatContent in chatContents" class="chat-content bg-light">
      <div class="chat-header">
        <span class="name">{{chatContent.name}}</span>
        <span class="created-at">{{chatContent.createdAt}}</span>
      </div>
      <div class="chat-body">
        {{chatContent.text}}
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    computed:{
      hasChatContents(){
        return this.$store && this.chatContents && this.chatContents.length
      },
      chatContents(){
        return this.$store.state.chatContents
      }
    }
  }
</script>

<style scoped>
  .chat-section{
    height: 75vh;
    overflow: scroll;
  }
  .chat-content{
    border-bottom:solid 1px #dedede;
    padding:20px;
    overflow: scroll;
  }
  .name{
    font-size:24px;
    font-weight:bold;
    margin:0;
  }
  .created-at{
    margin-left:auto;
    font-size:14px;
    line-height:3;
  }
  .chat-header{
    display: flex;
  }
  .chat-body{
    font-size:14px;
  }
</style>