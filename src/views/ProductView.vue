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
  <hr style="border: 1px solid #E5E5E5; line-height: 1px; margin-top: 30px;">
  <div style="
      display: flex;
      justify-content: center;
      align-items: center;
  ">
    <MenuItem2/>
  </div>
  <hr style="border: 1px solid #E5E5E5;  margin-bottom: 20px;">

  <span style="
      display: flex;
      align-items: center;
      gap: 3px;
      margin-top: 20px;
      margin-left: 5px;
      margin-bottom: 20px;
  ">
      <span>Home</span>
      <svg 
          width="15" height="15"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24">
          <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z" fill="#B6B6B6"></path>
      </svg>
      <span>Category</span>
      <svg 
          width="15" height="15"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24">
          <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z" fill="#B6B6B6"></path>
      </svg>
      <span style="color: #3BB77E;">{{ title }}</span>
  </span>

  <ProductDetail />
  <div class="event_click_arrow">
    <svg 
      @click="handleArrowClick(1)" 
      style="background-color: #3BB77E; padding: 10px 30px; border-radius: 30px;" 
      width="20" height="20"
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24">
      <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" fill="#fff"></path>
    </svg>

    <div style="display: flex; width: 545px; justify-content: space-between; margin-top: 20px;">
      <div v-for="index in currentImageIndices" :key="index">
        <ProductImageVue :image="categories[index].Img" />
      </div>
    </div>

    <svg 
      @click="handleArrowClick(-1)"  
      style="background-color: #F2F3F4; padding: 10px 30px; border-radius: 30px;"
      width="20" height="20"
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24">
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#7E7E7E"></path>
    </svg>
  </div>
  
  <div class="des_info">
    <div class="btn_info">
      <button>Description</button>
      <button>Additonal Info</button>
      <button>Reviews(3)</button>
    </div>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut voluptate iste neque recusandae aspernatur accusamus quo! Quod, dicta! Laudantium maiores corporis laborum porro. Molestias harum accusantium totam voluptatibus. Provident, tempora!
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut itaque consequatur ipsum vel voluptates adipisci hic deleniti, quos amet! Obcaecati quibusdam placeat necessitatibus voluptatibus eveniet ipsam, non provident omnis dignissimos.
       <br><br>
       Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because. 
    </p>
  </div>

</template>

<script>
  import SearchBox from '../components/SearchBox.vue';
  import MenuItem from '../components/MenuItem.vue';
  import MenuItem2 from '../components/MenuItem2.vue';
  import Logo from '../components/Logo.vue';
  import ShowCaseProduct from '../components/ShowCaseProduct.vue';
  import ProductDetail from '../components/ProductDetail.vue';
  import ProductImageVue from '../components/ProductImage.vue'
  import { mapState } from 'pinia';
  import { useProductStore } from '../stores/product_store';

export default {
  name: 'ProductView',
  props: {
    title: {
      type: String,
      default: 'Seeds of Change Organic'
    }
  },
  components: {
    SearchBox,
    MenuItem,
    MenuItem2,
    Logo,
    ShowCaseProduct,
    ProductDetail,
    ProductImageVue,
  },
  data() {
    return {
      currentImageIndices: [0, 1, 2, 3], // Initial index
    };
  },

  computed: {
    ...mapState(useProductStore, ["categories"])
  },

  methods: {
    handleArrowClick(direction) {
      const totalImages = this.categories.length;

      // Shift the first index in currentImageIndices based on the direction
      let firstIndex = this.currentImageIndices[0];
      firstIndex = (firstIndex + direction + totalImages) % totalImages;

      // Remove the first index from currentImageIndices
      this.currentImageIndices.shift();

      // Add the new index to the end of currentImageIndices
      this.currentImageIndices.push(firstIndex);
    },
  },


}
</script>

<style scoped>
span{
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: #7E7E7E;
}

.des_info{
  display: flex;
  flex-direction: column;
  border: 1px solid #F2F3F4;
  border-radius: 15px;
  width: 100%;
  height: 324px;
  margin-top: 50px;
}

.btn_info{
  margin-left: 50px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 30px;
}
.btn_info button{
  padding: 10px 20px;
  border-radius: 30px;
  color: #B6B6B6;
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 15px;
  border: 1px solid #F2F3F4;
  background-color: white;
  
}

.btn_info button:hover{
  color: #3BB77E;
  border: 1px solid #3BB77E;
  box-shadow: 5px 5px 15px 0px #1818180D;
  background-color: white;
;
}

p{
  margin-left: 50px;
  margin-top: 20px;
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: #7E7E7E;

}

.event_click_arrow{
 display: flex;
 align-items: center;
}

</style>