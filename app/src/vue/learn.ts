import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js'

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    bg: 'backgroundColor: pink',
    visible: false,
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' },
    ],
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
  },
})

setInterval(() => {
  app.$data.visible = !app.visible
}, 2000)
