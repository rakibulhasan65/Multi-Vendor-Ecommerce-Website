<template>
    <h1 class="text-center">My name is {{ name }}, My {{ age }} years old.</h1>
    <div class="ageDefine d-flex justify-content-center">
        <button class="bg-info border" v-on:click="age++">Increment</button>
        <button class="bg-info border" v-on:click="age--">Decrement</button>
        <button class="bg-info border" v-on:click="nameChange()">
            Change Name
        </button>
    </div>

    <hr />
    <div class="conditionRender" v-show="show">
        <h2 class="text-center bg-primary text-white p-3 fw-bold">
            Hello Bangladesh!
        </h2>
    </div>
    <button class="bg-info border" @click="helloBangladesh">
        {{ show ? "Show" : "Hide" }}
    </button>

    <div class="mouseEvents">
        <div class="box d-inline-block p-5 m-2 bg-dark text-white" @mouseover="eventHandle">Box 1</div>
        <div class="box d-inline-block p-5 m-2 bg-dark text-white" @mouseleave="eventHandle">Box 2</div>
        <div class="box d-inline-block p-5 m-2 bg-dark text-white" @dblclick="eventHandle">Box 3</div>
        <div class="box d-inline-block p-5 m-2 bg-dark text-white" @mousemove="moveEventPosition">Box 4 Position: {{ x }} - {{ y }}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: "Rakib",
            age: 24,
            show: true,
            x: 0,
            y:0,
        };
    },
    methods: {
        nameChange(name) {
            this.name = "Rakibul Hasan";
        },
        helloBangladesh() {
            this.show = !this.show;
        },
        eventHandle() {
            console.log("Hello Events Is Working!")
        },
        moveEventPosition(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
    },
};
</script>
