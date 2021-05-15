Vue.component('error', {
   data() {
       return{
           text: '',
       }
   },
    methods: {
       setError(error){
           this.text = error
       }
    },

    computed: {
       isVizible() {
           return this.text !== ''
       }
    },

    template: `
        <div class="error-block" v-if="isVizible">
            <p class="error-msg">
                <button class="close-btn" @click="setError('')">&times;</button>
                {{ text }}
            </p>
        </div>
    `
});