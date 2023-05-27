<template>
    <h1 class="text-center">Hello World! {{ title }}</h1>
    <div class="row">
        <div class="col-md-4">
            <div class="box" ref="box" @click="handleClick">

            </div>
        </div>
        <div class="col-md-4 offset-2">
            <input
                type="text"
                ref="name"
                class="form-control"
                placeholder="Enter Yur Name"
            />
        </div>
    </div>
    <modal :products="products"></modal>
</template>

<script>
import modal from "./ModalVue.vue"

export default {
    components: {
        modal
    },
    data() {
        return {
            products: [
                {product_id:1,product_name:"iphone",product_price:"$100",product_stock:false},
                {product_id:2,product_name:"laptop",product_price:"$200",product_stock:true},
                {product_id:3,product_name:"desktop",product_price:"$300",product_stock:false},
                {product_id:4,product_name:"one plus",product_price:"$90",product_stock:true},
            ]
        };
    },
    methods: {
        handleClick() {
            this.$refs.name.focus();
            this.$refs.box.classList.add("activeBox")
        }
    }
}
</script>

<style>
.box{
    width: 200px;
    height: 200px;
    background-color: rgb(99, 69, 31);
    margin-left: 50px;
    cursor: pointer;

}

.box.activeBox{
    background-color: blue;
}
</style>
