<template>
  <article class="root vw-100">
    <header class="header p-3 d-flex flex-row align-items-center">
      <img class="header__symbol img-fluid" alt="MOOODAYS Cow" src="../assets/cow.png">
      <div class="ms-3">
        <h1>MOOODAYS</h1>
      </div>
    </header>
  
    <article class="mt-5 mb-5">
      <h1> Products </h1>
      
      <section class="mt-5">
        <h2> Colorful Runner </h2>
        <a href="/ColorfulRunner/">
          <img class="product__keyvisual" src="../assets/ColorfulRunner/feature.png">
        </a>
      </section>
    </article>
  
    <footer class="footer">
      <p> MOOODAYS </p>
    </footer>
  </article>
</template>
 
<script>
export default {
  name: 'Top'
}
</script>

<style lang="scss" scoped>
.root {
  text-align: center;
}

.header {
  background-color: #9de39d;
  color: #ffffff;
  
  &__symbol {
    width: 100px;
  }
}

.product {
  &__keyvisual {
    width: 50%;
  }
}

.footer {
  background-color: #9de39d;
  color: #ffffff;
}
</style>
