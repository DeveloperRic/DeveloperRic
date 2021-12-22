import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js'
import _events from './data/events.js'
import _mentions from './data/mentions.js'

const _spotlight = {
  image: {
    src: 'assets/spotlight-img.jpg',
    alt: 'Picture of my face :)',
  },
}

const app = new Vue({
  el: '#app',
  data: {
    spotlight: _spotlight,
    events: _events,
    mentions: _mentions,
  },
  mounted() {
    this.events[0].visible = true
    for (let i = 1; i < this.events.length; ++i) {
      this.events[i].visible = false
    }
    for (let i = 1; i <= 10; ++i) this.mentions.push(this.mentions[0])
    for (const mention of this.mentions) {
      mention.body.visible = false
    }
  },
})
