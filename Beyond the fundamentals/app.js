let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  beforeCreate() {
    console.log('beforCreate() function called: ',this.message)
  },
  created() {
    console.log('created() function called: ',this.message)
  },
  beforeMount() {
    console.log('beforeMount() function called: ',this.$el)
  },
  mounted() {
    console.log('mounted() function called: ',this.$el)
  },
  beforeUpdate() {
    console.log('beforUpdate() function called:')
  },
  updated() {
    console.log('update() function called:')
  },
  beforeUnmount() {
    console.log('beforUnmounted() function called:')
  },
  unmounted() {
    console.log('unmounted() function called:')
  },
})
vm.mount('#app')