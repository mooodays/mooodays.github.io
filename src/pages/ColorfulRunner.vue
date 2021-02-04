<template>
  <article class="root vw-100">

    <header class="header w-100 ps-3 pe-3 d-flex flex-row align-items-center">
      <img class="header__logo p-1" alt="MOOODAYS Logo" src="../assets/cow.png">
      <p class="pt-4 me-auto">MOOODAYS</p>
      <nav class="header__nav p-1">
        <a href="https://twitter.com/ColorfulRunApp">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
      </nav>
    </header>
 
    <div class="flex-grow-1 w-100">
      <article class="mt-5">
        <img src="../assets/ColorfulRunner/feature.png" />
      </article>

      <article class="mt-5">
        <h1>DOWNLOAD</h1>
        <div class="d-flex flex-row justify-content-center ms-4 me-4">
          <a class="p-1" href='https://play.google.com/store/apps/details?id=com.gmail.mooodays.ColorfulRunner&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
            <img class="img-fluid download__logo" alt='Get it on Google Play' src='https://play.google.com/intl/ja/badges/static/images/badges/en_badge_web_generic.png'/>
          </a>
        </div>
      </article>

      <article class="mt-5">
        <h1>PV</h1>
        <div class="pv__embedvideo ms-5 me-5">
          <iframe 
            src="https://www.youtube.com/embed/v45rx7e1Q9k" 
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen >
          </iframe>
        </div>
      </article>

      <article class="mt-5">
        <h1>Privacy Policy</h1>
        <div class="text-start ps-5 pe-5">
          <privacy-policy />
        </div>
      </article>
    </div>
  
    <footer class="footer mt-5 p-5">
      <img class="header__logo p-1" alt="MOOODAYS Logo" src="../assets/cow.png">
      <p>MOOODAYS</p>

      <article class="footer__credit mt-5">
        <p>Google Play and the Google Play logo are trademarks of Google LLC.</p>
      </article>
    </footer>

  </article>
</template>

<script>
export default {
  name: 'ColorfulRunner',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
.root {
  background-color: #21daff;
  color: #ffffff;

  text-align: center;
}

.header {
  background-color: #00bbff;
  font-size: 2.0em;

  &__logo {
    height: 70px;
  }

  &__nav {
    display: inline-block;

    font-size: 1.5em;
    color: #ffffff !important;
  }
}

.download {
  &__logo {
    height: 100px;
  }
}

.pv {
  &__embedvideo {
    background-color: #000000;
  
    position: relative;
    padding-bottom: 56.25%;
  
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
} 

.footer {
  background-color: #9de39d;
  color: #000000;

  &__credit {
    color: gray;
  }
}
</style>
