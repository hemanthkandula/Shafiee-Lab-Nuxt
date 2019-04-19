<template>
  <div id="app">
    <div>
      <Header msg="Welcome to Shafiee Lab" />
    </div>
    <div>
      <main class="section-wrapper">
        <nuxt />
      </main>
    </div>

    <Footer />

    <!--<div id="nav">-->
    <!--<router-link to="/">Home</router-link> |-->
    <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  components: { Footer, Header }
  // data: function() {
  //   return {
  //     sortBy: 'Selected',
  //     blockTitle: 'Selected Publications',
  //     allPubsButton: 'See our publications'
  //   }
  // }
}
</script>
