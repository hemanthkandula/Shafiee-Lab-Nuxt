<template>
  <div>
    <div class="gallery__item">
      <div
        class="card card--publication  card--publication-list "
        data-card-type="list"
      >
        <a :href="Link" :title="Title" class="card__link"
          ><span class="hidden-text">{{ Title }}</span></a
        >
        <div class="card__image" data-gen-art-background="">
          <img alt="back" height="100%" src="back" width="100%" />
        </div>

        <div class="card__link--icon">
          <a
            class="icon icon--google-scholar card__link-search-scholar"
            :href="makehref(Title)"
            target="_blank"
          >
            <!--<img alt="GS" src="/icons/icon-google-scholar.svg"/>-->
            <img alt="info" src="/icons/gs.jpg" width="26px" height="26px" />
          </a>

          <div class="card__link-tooltip">Google Scholar</div>
        </div>

        <!--<div class="card__link&#45;&#45;icon">-->
        <!--<a class="icon icon&#45;&#45;copy card__link-copy-bibtex ng-scope" href="/" ng-controller="CopyController as CopyCtrl" ng-click="CopyCtrl.onClick($event, &#39;%40inproceedings%7B45826%2C%0Atitle%09%3D%20%7BNeural%20Architecture%20Search%20with%20Reinforcement%20Learning%7D%2C%0Aauthor%09%3D%20%7BBarret%20Zoph%20and%20Quoc%20V.%20Le%7D%2C%0Ayear%09%3D%20%7B2017%7D%2C%0AURL%09%3D%20%7Bhttps%3A//arxiv.org/abs/1611.01578%7D%0A%7D%0A%0A&#39;, true)" ng-class="{&#39;is-succeed&#39;: CopyCtrl.isSucceeded}">-->

        <!--<img src="./files/static/images/icons/icon-copy.svg" />-->

        <!--</a>-->
        <!--<div class="card__link-tooltip">Copy BibTex</div>-->
        <!--</div>-->

        <div
          class="card__link--icon card__link--icon-abstract   ng-scope"
          :class="{ 'is-active': showMobileMenu }"
          @click="showMobileMenu = !showMobileMenu"
        >
          <a class="icon icon--info card__link-info">
            <img alt="info" src="/icons/icon-info.svg" />
          </a>
          <div class="card__link-tooltip">Preview Abstract</div>
          <div class="card__link-abstract t--card-description">
            <a class="icon icon--close card__link-abstract-close"></a>
            <p>{{ Description }}</p>
            <a :href="link">View details</a>
          </div>
        </div>

        <div class="content card__content ">
          <div class="content__title">
            <a :href="Link" class="card__title1" title="Pub Name">{{
              Title
            }}</a>
          </div>
          <div class="content__body">
            <p class="content__authors">
              {{ Authors }}

              <!--<span><a href="/research/people/" title="Author 1">Mohamed Shehata Draz</a></span>-->
              <!--<span>, </span>-->
              <!--<span><a href="/research/people/" title="Author 1">Kamyar Mehrabi Kochehbyoki </a></span>-->
              <!--<span>, </span>-->
              <!--<span><a href="/research/people/" title="Author 1">Anish Vasan</a></span>-->
              <!--<span>, </span>-->
              <!--<span><a href="/research/people/" title="Author 1">Dheerendranath Battalapalli</a></span>-->
              <!--<span>, </span>-->
              <!--<span><a href="/research/people/" title="Author 1">Aparna Sreeram</a></span>-->
              <!--<span>, </span>-->
              <!--<span><a href="/research/people/" title="Author 1">Manoj Kumar Kanakasabapathy</a></span>-->
              <!--<span>, </span>-->
              <!--<span><a href="/research/people/" title="Author 1">Shantanu Kallakuri</a></span>-->
              <!--<span>, </span>-->
              <!--<span><a href="/research/people/" title="Author 1">Athe Tsibris</a></span>-->
              <!--<span>, </span>-->
              <!--<span><a href="/research/people/" title="Author 1">Daniel R Kuritzkes</a></span>-->
              <!--<span>, </span>-->
              <!--<span><a href="/research/people/" title="Author 1">Hadi Shafiee</a></span>-->
              <!--<span>, </span>-->
            </p>
            <p class="content__venue">
              <span class="booktitle">
                <strong>{{ Journal }}</strong></span
              >
              <span class="year"> {{ Pubdate }},</span>

              <span class="year">
                Vol.{{ Volume
                }}<span v-if="Issue !== ''"> ({{ Issue }}),</span> pp{{
                  Pages
                }}</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import InfoIcon from '/icons/icon-info.svg'
// import GoogleScholarIcon from '/icons/icon-google-scholar.svg'

export default {
  name: 'SinglePublication',
  props: {
    authors: {
      type: String,
      required: true
    },

    link: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },
    journal: {
      type: String,
      required: true
    },
    volume: {
      type: String,
      required: true
    },
    issue: {
      type: String,
      required: true
    },
    pages: {
      type: String,
      required: true
    },

    pubdate: {
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
      // googlescholaricon: GoogleScholarIcon,
      // infoicon: InfoIcon,

      showMobileMenu: false
    }
  },
  methods: {
    makehref: function(title) {
      const gs = 'https://scholar.google.co.in/scholar?q='

      // title = title.replace(/\s+/g, '+')

      return gs + title
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto');
.card__title1 {
  font-family: 'Roboto', sans-serif;
  /*color: #000;*/
}

.content__authors {
  font-family: 'Roboto', sans-serif;
}
.year {
  font-family: 'Roboto', sans-serif;
}

.booktitle {
  font-family: 'Exo', sans-serif;
}

a,
.t--link {
  color: #000;
  font-weight: 500;
  position: relative;
  text-decoration: none;
  -webkit-text-decoration-color: rgba(66, 133, 244, 0);
  text-decoration-color: rgba(66, 133, 244, 0);
  transition: color 0.25s linear, -webkit-text-decoration-color 0.25s linear;
  transition: text-decoration-color 0.25s linear, color 0.25s linear;
  transition: text-decoration-color 0.25s linear, color 0.25s linear,
    -webkit-text-decoration-color 0.25s linear;
}

.search.is-list-view .card .card__link-search-scholar:hover,
.search.is-list-view .card .card__link-copy-bibtex:hover,
.search.is-list-view .card .card__link-info:hover,
.card.card--publication-list .card__link-search-scholar:hover,
.search.is-list-view .card.card--publication .card__link-search-scholar:hover,
.card.card--publication-list .card__link-copy-bibtex:hover,
.search.is-list-view .card.card--publication .card__link-copy-bibtex:hover,
.card.card--publication-list .card__link-info:hover,
.search.is-list-view .card.card--publication .card__link-info:hover {
  opacity: 0.7;
}

.icon--close {
  background-image: url(/icons/cross_out.svg);
}
</style>
