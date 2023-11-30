<template>
    <div id="app">
        <RouterView />
    </div>
</template>

<script>
import { RouterView } from 'vue-router';
export default {
    name: 'App',
    components: {
        RouterView,
    }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600&display=swap');
</style>