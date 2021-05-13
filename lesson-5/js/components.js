const childElement = {
    name: 'child-element',
    template: '<p>Some child element</p>',

}

Vue.component('some-el', {
    data() {
        return {
            title: 'Hello!',

        };
    },
    components: {
        childElement,
    },
    template: `<div>
                    {{ title }}
                    <child-element>Ё</child-element>
               </div>`,
    mounted() {
        console.log(this)
    },
});