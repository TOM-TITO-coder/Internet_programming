<template>

  <div class="container_search">
    <div class="container_category">
      <p>All category</p>
      <svg 
          style="margin-left: 10px; margin-top: 5px;" 
          width="15" height="15" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24"
        >
        <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" fill="#7E7E7E"></path>
      </svg>
      <P style="margin-left: 20px;">|</P>
      
    </div>
    <div class="search_element">
      <input type="text" v-model="searchText" @input="updateSearch" placeholder="Search..." />
      <svg 
        width="20" height="20"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24">
        <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="#7E7E7E"></path>
      </svg>
    </div>
  </div>
  
</template>

<script>
export default {
    name: 'SearchBox',

}
</script>

<style scoped>

.container_search{
  display: flex;
  flex-direction: row;
  width: 700px;
  height: 50px;
  border: 2px solid #BCE3C9;
  border-radius: 5px;
}

.container_category{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}

.search_element{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

input{
  border: none;
  outline: none;
  padding: 5px 10px;
  font-size: 14px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  color: #3d3d3d;
  width: 460px;
}
p{
  font-size: 14px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  color: #3d3d3d;
  margin: 0;
  margin-right: 10px;
}

</style>