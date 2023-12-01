<template>
  <div style="
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
  ">
    <Logo/>
    <SearchBox />
    <MenuItem />
  </div>
  <hr style="border: 1px solid #E5E5E5; margin-top: 30px;">
  <div style="
      display: flex;
      justify-content: center;
      align-items: center;
  ">
    <MenuItem2/>
  </div>
  <hr style="border: 1px solid #E5E5E5; margin-top: 30px;">
  <div>
    <PageHeader />
  </div>
</template>

<script>
import SearchBox from '../components/SearchBox.vue';
import MenuItem from '../components/MenuItem.vue';
import MenuItem2 from '../components/MenuItem2.vue';
import Logo from '../components/Logo.vue';
import PageHeader from '../components/PageHeader.vue';

export default {
    name: 'CategoryView',

    components: {
      SearchBox,
      MenuItem,
      MenuItem2,
      Logo,
      PageHeader,
    }

}
</script>

<style scope>

</style>