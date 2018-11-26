<template>
  <section>
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-light p-4">
        <a href="#" v-for="list in menu">{{list}}</a>
      </div>
    </div>
    <nav class="navbar navbar-light bg-info">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </section>
</template>

<script>
  export default {
    props: {
      menu: {
        type: Array,
        default: () => {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .logo {
    text-align: left;
  }
</style>