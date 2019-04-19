<template>
  <div class="home">
    <!--<homehexagon> </homehexagon>-->

    <!--<hex-test-mobile v-if="Mobile"-->

    <!--&gt;-->

    <!--</hex-test-mobile>-->
    <!--<hextest v-else>-->

    <!--</hextest>-->

    <home-videos-mobile v-if="Mobile"> </home-videos-mobile>
    <home-videos v-else></home-videos>

    <recent-pubications sort-by="Selected" allpubsbutton="" blocktitle="">
      <!--sort-by="Selected"-->
      <!--block-title="Selected Publications"-->
      <!--all-pubs-button="See our publications"-->
    </recent-pubications>

    <news-slider> </news-slider>

    <!--<ResearchAreas/>-->

    <page-block
      :div-class="BlockRight"
      :has-dark-background="DarkBackground"
      :background-image="lab"
      button="People"
      button-link="/people"
      description=""
      title="Our Team"
      :section-class="CalloutFullWidth"
      has-light-background-mobile=""
    >
    </page-block>

    <research-projects></research-projects>

    <page-block
      button="Research Project"
      button-link="/Research"
      description="Some thing to  Projects"
      title="See our projects "
      :div-class="BlockCtaLeft"
      :has-dark-background="DarkBackground"
      :section-class="CalloutGrid"
      has-light-background-mobile=""
    ></page-block>

    <page-block
      button="Positions"
      button-link="/positions"
      description=""
      title="Join Us"
      background-image="/images/joinus1.jpg"
      :div-class="BlockRight"
      :has-dark-background="DarkBackground"
      :section-class="CalloutFullWidth"
      has-light-background-mobile=""
    ></page-block>

    <!--<contact id="contact"> </contact>-->
  </div>
</template>

<script>
// import lab2 from '../assets/images/lab2.jpg'
// import joinus from '../assets/images/joinus1.jpg'
//
// const RecentPublication = () => import('../components/RecentPubications.vue')
//
// const PageBlock = () => import('../components/PageBlock.vue')
// const Contact = () => import('../views/contact.vue')
// const ResearchProjects = () => import('../views/ResearchProjects.vue')

// import { mapMutations } from 'vuex'
import RecentPubications from '../components/RecentPubications'
import HomeVideosMobile from '../components/HomeVideosMobile'
import HomeVideos from '../components/HomeVideos'
import NewsSlider from '../components/NewsSlider'
import PageBlock from '../components/PageBlock'
// import Contact from '../components/contact'

// const HomeVideos = () => import('../components/HomeVideos.vue')
// const HomeVideosMobile = () => import('../components/HomeVideosMobile.vue')

export default {
  name: 'Index',
  components: {
    // Contact,
    PageBlock,
    NewsSlider,
    HomeVideos,
    HomeVideosMobile,
    RecentPubications

    // ResearchProjects,
    //
    // Contact,
    //
    // PageBlock,
    // NewsSlider,
    // RecentPublication
  },
  data: function() {
    return {
      CalloutFullWidth: 'callout--fullwidth',
      CalloutGrid: 'callout--grid',

      BlockHalfSize: 'block--half-size',
      BlockRight: 'block--default-right',
      BlockLeft: 'block--default-left',

      BlockCtaLeft: 'block--cta-left',
      BlockCtaRight: 'block--cta-right',
      DarkBackground: true,
      NoDarkBackground: false,
      // lab: lab2,
      // joinus: joinus,
      Mobile: false
    }
  },
  computed: {
    // index() {
    //   return this.$store.state.index
    // }
  },

  mounted() {
    this.checkMobile()

    window.addEventListener('resize', this.onResize)
  },

  beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    checkMobile: function() {
      if (screen.width <= 767) {
        this.Mobile = true

        // return true;
      } else if (screen.width + 50 < screen.height) {
        this.Mobile = true
      } else {
        this.Mobile = false
      }
    },

    isMobile: function() {
      this.checkMobile()

      return this.Mobile
    },

    onResize() {
      // console.log('window has been resized', event)

      if (screen.width <= 767) {
        this.Mobile = true

        // return true;
      } else if (screen.width + 50 < screen.height) {
        this.Mobile = true
      } else {
        this.Mobile = false
      }
    }
  }
}
</script>
