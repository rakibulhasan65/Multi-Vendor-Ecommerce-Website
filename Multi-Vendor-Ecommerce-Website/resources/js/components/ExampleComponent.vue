<template>
    <div class="product">
        <h1 class="text-center m-3">Total Books: {{ totalBooksCount }}</h1>
        <h1 class="text-center m-3">
            Total Favorite Books: {{ totalFavBooks }}
        </h1>
        <ul>
            <li
                :class="{ isFav: book.isFav }"
                @click="favoriteBook(book)"
                v-for="book in books"
                :key="book.product_id"
            >
                <img :src="book.image" :alt="book.name" />
                <h2>{{ book.name }}</h2>
                <p>{{ book.author }}</p>
            </li>
        </ul>
    </div>
    <VueAdvance />
</template>
<script>
export default {
    data() {
        return {
            books: [
                {
                    product_id: 1,
                    name: "Bangla",
                    author: "Ripon",
                    image: "book1.jpg",
                    isFav: true,
                },
                {
                    product_id: 2,
                    name: "English",
                    author: "Rakib",
                    image: "book2.jpg",
                    isFav: false,
                },
                {
                    product_id: 3,
                    name: "Math",
                    author: "Nishad",
                    image: "book3.png",
                    isFav: true,
                },
            ],
        };
    },
    methods: {
        favoriteBook(book) {
            book.isFav = !book.isFav;
        },
    },
    computed: {
        totalBooksCount() {
            return this.books.length;
        },
        totalFavBooks() {
            let total = this.books.filter((book) => book.isFav);
            return total.length;
        },
    },
};
</script>
<style>
ul {
    display: flex;
}
li {
    width: 400px;
    background-color: aquamarine;
    list-style: none;
    padding: 20px;
    margin: 10px;
    border-radius: 8px;
    cursor: pointer;
}

.isFav {
    background-color: rgb(43, 39, 39);
    color: white;
}
</style>
