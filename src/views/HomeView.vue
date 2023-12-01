<!-- print hello world -->
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
    <hr style="border: 1px solid #E5E5E5; margin-bottom: 20px;">

    <ShowCaseProduct />
    
    <div class="wrap_page1">

        <Menu text_menu="Featured Categories" />
        
        <div class="cart_page1">
            <div v-for="item in categories" :key="item.Img" class="card_conatainer" @click="navigateTo('/categories/:categoryId')">
                <Cart 
                    :id="item.id"
                    :bgColor="item.bgColor"
                    :Img="item.Img"
                    :Title="item.Title"
                    :Item="item.Item"
                />
            </div>
        </div>

        <div class="promotion_page1">
            <div v-for="item in promotions" :key="item.Img" @click="navigateTo('/products/:productId')">
                <AddVertise
                    :bgColor="item.bgColor"
                    :heanding="item.heanding"
                    :textBtn="item.textBtn"
                    :colorBtn="item.colorBtn"
                    :Img="item.Img"
                />
            </div>
        </div>

        <Menu text_menu="Popular Products"/>
        
        <div class="product_page1">
            <div v-for="item in products" :key="item.Img" @click="navigateTo('/products/:productId')">
                <Product
                    :tage_title="item.tag"
                    :tage_color="item.tag_color"
                    :Image_product="item.image"
                    :category_product="item.category"
                    :name_product="item.name"
                    :rate_product="item.rate"
                    :sell_price_product="item.sellPrice"
                    :des_product="item.description"
                    :discount_price="item.discountPrice"
                />
            </div>
        </div>
    </div>
  </template>
  
  <script>
  
  import MyButton from '../components/MyButton.vue';
  import Cart from '../components/Cart.vue';
  import AddVertise from '../components/AddVertise.vue';
  import Menu from '../components/Menu.vue';
  import Product from '../components/ProductAdd.vue';

  import SearchBox from '../components/SearchBox.vue';
  import MenuItem from '../components/MenuItem.vue';
  import MenuItem2 from '../components/MenuItem2.vue';
  import Logo from '../components/Logo.vue';
  import ShowCaseProduct from '../components/ShowCaseProduct.vue';

  import { mapState } from 'pinia';
  import { useProductStore} from '../stores/product_store.js';
  
export default {
      name: 'HomeView',
      components: {
        MyButton,
        Cart,
        AddVertise,
        Menu,
        Product,
        SearchBox,
        MenuItem,
        MenuItem2,
        Logo,
        ShowCaseProduct,
      },
      computed: {
        ...mapState(useProductStore, ["categories"]),
        ...mapState(useProductStore, ["promotions"]),
        ...mapState(useProductStore, ["products"]),
      },

      methods: {
        navigateTo(to) {
            this.$router.push(to);
        },
     }
};
  
  </script>
  
<style scoped>

/* .container_page1 {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
} */

.wrap_page1 {
   
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.cart_page1{
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.promotion_page1{
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
} 

.product_page1 {
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
}

</style>
  