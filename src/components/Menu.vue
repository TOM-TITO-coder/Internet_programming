<template>
  <div class="container_menu">
    
    <div class="right_component">
        <p>{{ text_menu }}</p>
    </div>
    <div class="left_component">
        <p><strong>All</strong></p>
        <p>Milks&Dairies</p>
        <p>Coffes & Teas</p>
        <p>Pet Foods</p>
        <p>Meats</p>
        <p>Vegetables</p>
        <p>Fruits</p>
    </div>
    
  </div>
</template>

<script>
export default {
    name: 'Menu',
    props: {
        text_menu: {
            type: String,
        },
    }

}
</script>

<style scoped>

.container_menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.right_component p {
    font-family: Quicksand;
    font-size: 25px;
    font-weight: bold;
}

.left_component {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    gap: 30px;
}

.left_component p {
    font-family: Quicksand;
    font-size: 15px;
    font-weight: normal;
}

.left_component p:hover {
    color: rgba(208, 113, 113, 0.829);
}

</style>