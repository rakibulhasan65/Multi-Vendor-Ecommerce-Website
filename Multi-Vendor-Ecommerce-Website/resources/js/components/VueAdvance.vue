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
    <modal/>
</template>

<script>
import modal from "./ModalVue.vue"

export default {
    components: {
        modal
    },
    data() {
        return {
            title: "Welcome!"
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
