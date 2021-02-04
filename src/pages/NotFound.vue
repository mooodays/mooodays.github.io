<template>
  <article class="root d-flex flex-column pt-5">
    <h1 class="ms-0 me-0"> 404 Not Found! </h1>

    <div class="container pt-5">
      <img class="cow" alt="MOOODAYS Logo" src="../assets/cow.png">
    </div>
    <div>
      <a href="/">MOOODAYS</a>
    </div>
  </article>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style scoped>
.root {
  text-align: center;
}
.cow {
  height: 50px;
}
</style>
