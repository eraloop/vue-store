<template>
    <div id="checkout-view">
        <div class="checkout-content">
            <!-- <app-checkout></app-checkout> -->
            <!-- <div>
                <h1>form</h1>
                <app-form
                    Text="Checkout"
                    routing
                    :Tel="true"
                    :Email="true"
                    :TandC="true"
                >
                </app-form>
            </div> -->
        </div>
    </div>
</template>

<script>
import Checkout from "./Checkout"
import Form from "./FormFields"
export default {
    components: {
        "app-form": Form,
        "app-checkout": Checkout
    },
    data() {
        return {}
    },
    computed: {},
    methods: {}
}
</script>

<style scoped>
#checkout-view {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5em auto;
    width: 90%;
}

.checkout-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3em;
}
</style>
