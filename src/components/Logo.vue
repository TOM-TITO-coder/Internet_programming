<template>
    <div class="container_logo">
        <img src="../assets/images/icon.svg" alt="logo">
        <div 
            style="
                display: flex; 
                flex-direction: column; 
                justify-content: center; 
                align-items: center;
            "
            >
            <span 
              style=
              " font-family: 'Quicksand', sans-serif;
                font-size: 40px;
                font-weight: bold;
                color: #3BB77E; 
              ">Melon</span>
            <span
                style=
                " font-family: 'Quicksand', sans-serif;
                    font-size: 13px;
                    font-weight: 600;
                    line-height: 18px;
                    color: #253D4E; 
                "
            >MART & GROCERY</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Logo',
}
</script>

<style scoped>
.container_logo{
    display: flex;
    flex-direction: row;
    align-items: center;
}

</style>