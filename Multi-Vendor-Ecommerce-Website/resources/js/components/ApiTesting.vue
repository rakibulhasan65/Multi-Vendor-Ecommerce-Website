<template lang="">
    <div>
        <h1 class="text-center bg-dark text-white fw-bold p-3 mt-3">
            Api Testing For Vue Js
        </h1>
        <hr />
        <div class="row">
            <div class="error" v-if="errored">
                <span>Data Not Found.</span>
            </div>
            <div class="col-md-8 offset-2">
                <div class="searchBox">
                    <input type="search" class="form-control m-3" v-model="search" placeholder="Search">
                </div>
            </div>
            <div class="col-md-3 col-sm-6 d-flex justify-content-center" v-for="post in searchFilter" :key="post.id">
                <div class="content-dark">
                    <h2>{{ post.title }}</h2>
                    <p>{{ post.body }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            posts: [],
            errored: false,
            contentStyle: "",
            search:""
        };
    },
    created() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                this.posts = response.data;
            })
            .catch((error) => {
                // console.log(error)
                this.errored = true;
            });
    },
    computed: {
        searchFilter() {
            return this.posts.filter(post => {
                return post.title.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },

};
</script>
<style>
.content-dark{
    background-color: black;
    text-align: center;
    color: #ffff;
    border-radius: 8px;
    padding: 10px;
    margin: 10px;
    cursor:pointer
    
}


</style>
