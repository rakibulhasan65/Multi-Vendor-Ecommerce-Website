<template>
    <div class="modalShow">
        <div class="modalBody">
            <table v-for="product in products" :key="product.product_id" class="table border">
                <tr>
                    <td>{{ product.product_id }}</td>
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.product_price }}</td>
                    <td v-if="product.product_stock == true"><span>Available</span></td>
                    <td v-else><span>Stock Out</span></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    props: ["products"],
    data() {
        return {};
    },
};
</script>
<style>
.modalShow {
    margin: 0 auto;
    width: 900px;
    height: 400px;
    padding-top: 20px;
    background-color: rgb(0, 0, 0.5);
}

.modalBody {
    width: 400px;
    height: 300px;
    margin: 0 auto;
    background-color: white;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
}
</style>
