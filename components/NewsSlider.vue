<template>
  <section class="group group--default    ">
    <div class="group__content-wrapper">
      <div class="content group__content has-no-margin   ">
        <div class="content__text">
          <span class="content__brow">Featured news</span>
          <div class="content__header"></div>
        </div>
      </div>
    </div>

    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="(news, index) in NewsDB" :key="index">
        <div
          class="card card--default   card--in-carousel "
          data-card-type="card"
        >
          <a
            class="card__link"
            :href="news.url"
            :title="news.title"
            target="_blank"
            ><span class="hidden-text">{{ news.title }} </span></a
          >
          <div
            class="card__image"
            :style="{ backgroundImage: 'url(' + news.img + ')' }"
          >
            <div class="icon-parent" style="width: 100%;    height: 50%;">
              <!--<div class="content__source"-->

              <!--v-bind:style="{ backgroundImage: 'url(' + news.icon + ')' }"-->

              <!--&gt;-->

              <!--</div>-->

              <img class="content__source" :src="news.icon" alt="" />
            </div>
          </div>
          <div class="content card--in-carousel    ">
            <div class="content__text">
              <div class="content__header">
                <div class="content__title ">
                  {{ news.title }}
                </div>
              </div>

              <div class="content__body">
                <p>{{ news.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <br />

      <div slot="button-prev" class="swiper-button-prev"></div>
      <div slot="button-next" class="swiper-button-next"></div>
    </swiper>
  </section>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import fs from '../plugins/vuefirestore'

export default {
  name: 'NewsSlider',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },

      newsdata: null,
      meta: [],
      NewsDB: []
    }
  },
  // mounted(){
  //
  //     // axios.get('https://www.bostonherald.com/2019/03/02/smartphone-ovulation-test-a-breakthrough-at-the-brigham/')
  //     //     .then(response => {
  //     //         // JSON responses are automatically parsed.
  //     //         this.newsdata = response.data
  //     //     })
  //     //     .catch(e => {
  //     //         this.errors.push(e)
  //     //     })
  //     var accesscontrolurl = 'https://cors-anywhere.herokuapp.com/';
  //
  //     this.$http.get(accesscontrolurl+'https://www.bostonherald.com/2019/03/02/smartphone-ovulation-test-a-breakthrough-at-the-brigham/')
  //         .then(response => (this.newsdata = response.data))
  //
  //
  //     var parser = new DOMParser();
  //
  //     var htmlDoc = parser.parseFromString(this.newsdata, 'text/html');
  //
  //     // this.meta = this.newsdata[data]
  //
  //
  //     var title = htmlDoc.getElementsByTagName('meta')
  //
  //     this.meta = htmlDoc.item(0).innerHTML
  //
  //
  //
  // }

  firestore() {
    return {
      NewsDB: fs.collection('News').orderBy('id')
    }
  }
}
</script>

<style scoped>
.swiper-slide {
  width: 30%;
}

.card__link[target='_blank']::after {
  background: center/cover no-repeat url(/icons/link_icon.png);
  bottom: 12px;
  content: '';
  height: 14px;
  opacity: 0;
  position: absolute;
  right: 12px;
  transition: opacity 0.4s;
  width: 14px;
}

@media only screen and (max-width: 767px) {
  .swiper-slide {
    width: 90%;
  }
}

.content__source {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
