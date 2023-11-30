<template>
  <h1>Hello Category</h1>
  <SearchBox />
  <MenuItem />
  <MenuItem2/>
  <Logo/>
  <ShowCase />
</template>

<script>
import SearchBox from '../components/SearchBox.vue';
import MenuItem from '../components/MenuItem.vue';
import MenuItem2 from '../components/MenuItem2.vue';
import Logo from '../components/Logo.vue';
import ShowCase from '../components/ShowCase.vue'

export default {
    name: 'CategoryView',

    components: {
      SearchBox,
      MenuItem,
      MenuItem2,
      Logo,
      ShowCase,
    }

}
</script>

<style scope>

</style>