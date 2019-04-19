<template>
  <div>
    <section :class="SectionClass" class="callout  ">
      <div
        :class="[
          HasDarkBackground ? HasDarkBackgrounds : '',
          HasLightBackground_mobile ? HasLightBackgrounds_mobile : '',
          DivClass
        ]"
        class="block   has-mobile-bg"
      >
        <div
          class="block__background--mobile ng-isolate-scope is-loaded"
          :style="{ backgroundImage: 'url(' + BackgroundImage + ')' }"
        ></div>

        <div
          class="block__background ng-isolate-scope is-loaded"
          :style="{ backgroundImage: 'url(' + BackgroundImage + ')' }"
        ></div>

        <div class="block__content-wrapper">
          <div class="content block__content    ">
            <div class="content__text">
              <!--<span class="content__brow"> {{Title}}</span>-->
              <div class="content__header">
                <h3 class="content__title ">
                  {{ Title }}
                </h3>
              </div>
              <div class="content__body">
                <p>{{ Description }}</p>
              </div>
            </div>
            <div v-if="ButtonExist" class="content__ctas">
              <nuxt-link class="button" exact :to="Button_link">
                {{ Button }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// import img from '@/assets/images/Spermcard.jpg'

export default {
  name: 'PageBlock',
  props: {
    backgroundImage: {
      type: String,
      default: ''

      // default: 'Lucas'
    },
    buttonExist: {
      default: true,
      type: Boolean
    },

    sectionClass: {
      type: String,
      required: true
      // default: 'Lucas'
    },
    divClass: {
      type: String,
      required: true
    },

    hasDarkBackground: {
      type: Boolean,
      required: true
    },
    hasLightBackgroundMobile: {
      type: Boolean,
      required: true
    },

    title: {
      type: String,
      required: true
    },
    button: {
      type: String,
      required: true
    },

    buttonLink: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      HasDarkBackgrounds: 'has-dark-background',
      HasLightBackgrounds_mobile: 'has-light-mobile-bg '

      // Imag: img
    }
  }
}
</script>
