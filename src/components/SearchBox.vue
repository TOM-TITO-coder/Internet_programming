<template>

  <div>
    <input type="text" v-model="searchText" @input="updateSearch" placeholder="Search..." />
  </div>
  
</template>

<script>
export default {
    name: 'SearchBox',

}
</script>

<style scope>

</style>