<template>
  <section class="group group--pub    ">
    <div class="group__wrapper">
      <div class="group__content-wrapper">
        <div class="content group__content    ">
          <div class="content__text">
            <br />
            <br />
            <span class="content__brow">Publications</span>
            <div class="content__header">
              <h2 class="content__title ">
                {{ blocktitle }}
              </h2>
            </div>
          </div>
          <div class="content__ctas">
            <nuxt-link class="button" exact to="/publications">
              {{ allpubsbutton }}
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="group__gallery-wrapper">
        <div
          class="gallery gallery--pub
                     gallery--1-columns"
        >
          <!--<div class="gallery__wrapper">-->

          <!--<div v-for="idx in setcount(SortBy)" :key="idx">-->
          <!--<single-publication-->
          <!--:authors="FilteredPublicationsDB[idx - 1].Authors"-->
          <!--:description="FilteredPublicationsDB[idx - 1].Description"-->
          <!--:issue="FilteredPublicationsDB[idx - 1].Issue"-->
          <!--:journal="FilteredPublicationsDB[idx - 1].Journal"-->
          <!--:link="FilteredPublicationsDB[idx - 1].URL"-->
          <!--:pages="FilteredPublicationsDB[idx - 1].Pages"-->
          <!--:pubdate="FilteredPublicationsDB[idx - 1].Pubdate"-->
          <!--:title="FilteredPublicationsDB[idx - 1].Title"-->
          <!--:volume="FilteredPublicationsDB[idx - 1].Volume"-->
          <!--&gt;-->
          <!--</single-publication>-->
          <!--</div>-->

          <single-publication
            v-for="(Publication, idx) in FilteredPublicationsDB"
            :key="idx"
            :authors="Publication.Authors"
            :description="Publication.Description"
            :issue="Publication.Issue"
            :journal="Publication.Journal"
            :link="Publication.URL"
            :pages="Publication.Pages"
            :pub-date="Publication.Pubdate"
            :pubdate="Publication.Pubdate"
            :title="Publication.Title"
            :volume="Publication.Volume"
            :u-r-l="Publication.URL"
          >
            <!--{{ Publication.Authors }}-->
          </single-publication>

          <!--</div>-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import fs from '../plugins/vuefirestore'
import SinglePublication from './SinglePublication'

export default {
  name: 'RecentPubications',
  components: { SinglePublication },
  props: {
    blocktitle: {
      type: String,
      required: true
      // default: 'Lucas'
    },
    allpubsbutton: {
      type: String,
      required: true
      // default: 'Lucas'
    },
    sortby: {
      type: String,
      // required: true,
      default: 'Selected'

      // default: 'Lucas'
    },
    tag: {
      type: String,
      default: ''
    }
    // authors: {
    //   type: String,
    //   default: 'Authors'
    // },
    // description: {
    //   type: String,
    //   default: 'Description'
    // },
    // journal: {
    //   type: String,
    //   default: 'Journal'
    // },
    // uRL: {
    //   type: String,
    //   default: 'URL'
    // },
    // pages: {
    //   type: String,
    //   default: 'Pages'
    // },
    // pubdate: {
    //   type: String,
    //   default: 'Pubdate'
    // },
    // title: {
    //   type: String,
    //   default: 'Title'
    // },
    // volume: {
    //   type: String,
    //   default: 'Volume'
    // }
  },
  data: function() {
    return {
      // SortBy:this.SortBy,

      CalloutFullWidth: 'callout--fullwidth',
      CalloutGrid: 'callout--grid',

      BlockHalfSize: 'block--half-size',
      BlockRight: 'block--default-right',
      BlockLeft: 'block--default-left',

      BlockCtaLeft: 'block--cta-left',
      BlockCtaRight: 'block--cta-right',
      DarkBackground: true,
      NoDarkBackground: false,

      BlockHalfImage: 'block--half-image',
      PublicationsDB: [],
      // Authors: '',
      // URL: 'URL',
      // Description: 'Description',
      // Issue: 'Issue',
      // Pages: 'Pages',
      //
      // Title: 'Title',
      // // pubDate: 'pubDate',
      // Year: 'Year',
      //
      // Volume: 'Volume',
      // Publisher: 'Publisher',
      // Journal: 'Journal',
      // Source: 'Source',
      // Pubdate: 'Pubdate',
      // Serial: 'Serial',

      filteryearslist: [],
      FilteredPublicationsDB: [],
      yes: 'yes'
    }
  },
  firestore() {
    return {
      // PublicationsDB: fs.collection('Publication').orderBy("Selected",'desc')

      PublicationsDB: fs.collection('Publication').orderBy('Serial', 'desc')
    }
  },

  watch: {
    PublicationsDB: function() {
      this.FilteredPublicationsDB = this.PublicationsDB

      this.filteryearslist = this.groupBy(this.PublicationsDB, 'Projects')

      // if (this.SortBy === 'Selected') {
      // if (true) {

      // this.FilteredPublicationsDB =this.PublicationsDB
      this.filteryearslist = this.groupBy(this.PublicationsDB, 'Selected')
      this.FilteredPublicationsDB = this.filteryearslist.yes

      // .sort(function(
      //   first,
      //   second
      // ) {
      //   return first.Serial - second.Serial
      // })
      // } else {
      //   this.FilteredPublicationsDB = this.filteryearslist[this.Tag]
      //
      //   // console.error(this.filteryearslist[this.Tag])
      // }
    }
  },

  methods: {
    groupBy: function(objectArray, property) {
      return objectArray.reduce(function(acc, obj) {
        const key = obj[property]
        if (!acc[key]) {
          acc[key] = []
        }
        acc[key].push(obj)
        return acc
      }, {})
    },

    filterproject: function(position) {
      // console.error(position)

      const pubs = []

      // let position_filtered = this.groupBy(this.NewsDB,'position');
      for (let i = 0; i < position.length; i++) {
        // console.error(position[i])

        const PubOne = this.filteryearslist[position[i]]

        for (let j = 0; j < PubOne.length; j++) {
          // console.error(pub_one[j])

          pubs.push(PubOne[j])
        }
      }

      return pubs
    },
    setcount: function(Sortby) {
      if (Sortby === 'Selected') {
        // return this.FilteredPublicationsDB.length
        return 5
      } else {
        return 5
      }
    }
  }
}
</script>

<style scoped></style>
