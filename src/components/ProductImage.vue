<template>
    <div class="product_image_container">
        <img :src=image alt="">
    </div>
  
</template>

<script>
export default {
    name: 'ProductImage',
    props: {
        image: {
            type: String,
            default: new URL('../assets/images/orange.png', import.meta.url), 
        },
    }
}
</script>

<style scoped>
.product_image_container{
    width: 117px;
    height: 117px;
    border-radius: 15px;
    border: 1px solid #F2F3F4;
}

.product_image_container:hover{
    border: 1px solid #3BB77E;
     
}

image{
    width: 100px;
    height: 100px;
}
</style>