<template>
    <div class="containeris">
        <form method="post" @submit.prevent="submit">
            <h1>Ivertikite!</h1>
            <div class="star-widget">
                <input type="radio" id="fifth" name="rating" value="5" v-model="fields.rating">
                <div v-if="errors && errors.rating">{{ errors.rating[0] }}</div>
                <label class="fas fa-star" for="fifth"></label>
                <input type="radio" id="fourth" name="rating" value="4" v-model="fields.rating">
                <div v-if="errors && errors.rating">{{ errors.rating[0] }}</div>
                <label class="fas fa-star" for="fourth"></label>
                <input type="radio" id="third" name="rating" value="3" v-model="fields.rating">
                <div v-if="errors && errors.rating">{{ errors.rating[0] }}</div>
                <label class="fas fa-star" for="third"></label>
                <input type="radio" id="second" name="rating" value="2" v-model="fields.rating">
                <div v-if="errors && errors.rating">{{ errors.rating[0] }}</div>
                <label class="fas fa-star" for="second"></label>
                <input type="radio" id="first" name="rating" value="1" v-model="fields.rating">
                <div v-if="errors && errors.rating">{{ errors.rating[0] }}</div>
                <label class="fas fa-star" for="first"></label>
                <form action="#">
                    <header></header>
                </form>
            </div>
            <button class="mygtukas" type="submit">Pateikti 😁</button>
        </form>
    </div>
</template>

<script>
export default{
    data(){
        return{
            rating: '',
            fields: {},
            errors: {},
            success: false,
            loaded:true
        }
    },
    methods: {
        submit() {
            if (this.loaded) {
                this.loaded = false;
                this.success = false;
                this.errors = {};
                axios.post('/api/submit', this.fields).then(response => {
                    this.fields = {};
                    this.loaded = true;
                    this.success = true;
                }).catch(error => {
                    const UnprocessableEntity = 422;
                    if (error.response.status === UnprocessableEntity) {
                        this.errors = error.response.data || {};
                    }
                });
            }
        },
    },
}
</script>
