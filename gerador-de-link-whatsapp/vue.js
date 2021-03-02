new Vue({
    el: '#app',
    data: {
        prefix: '55',
        phone: '',
        text: '',
        link: '',
    },
    methods: {
        gerarLink() {
            if(this.phone != '') {
                this.link = `https://api.whatsapp.com/send?phone=${this.prefix}${this.phone}&text=${this.text}`
                this.phone = ''
                this.text = ''
            }
        }
    }
})