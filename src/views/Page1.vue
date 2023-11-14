<!-- print hello world -->
<template>
    <div class="container_page1">
    
        <div class="wrap_page1">
            <div>
                <Menu text_menu="Featured Categories"/>
            </div>
            
            <div class="cart_page1">
                <div v-for="item in categories" :key="item.Img" class="card_conatainer">
                    <Cart
                        :bgColor="item.bgColor"
                        :Img="item.Img"
                        :Title="item.Title"
                        :Item="item.Item"
                    />
                </div>
            </div>
  
            <div class="promotion_container">
                <div v-for="item in promotions" :key="item.Img">
                    <AddVertise
                        :bgColor="item.bgColor"
                        :heanding="item.heanding"
                        :textBtn="item.textBtn"
                        :colorBtn="item.colorBtn"
                        :Img="item.Img"
                    />
                </div>
            </div>

            <div class="popular_product_menu">
                <Menu text_menu="Popular Products"/>
            </div>
            
        </div>
      
    </div>
  </template>
  
  <script>
  
  import MyButton from '../components/MyButton.vue';
  import Cart from '../components/Cart.vue';
  import AddVertise from '../components/AddVertise.vue';
  import Menu from '../components/Menu.vue';
  import { mapState } from 'pinia';
  import { useProductStore} from '../stores/product_store.js';
  
  export default {
      name: 'App',
      components: {
        MyButton,
        Cart,
        AddVertise,
        Menu,
      },
      computed: {
        ...mapState(useProductStore, ["categories"]),
        ...mapState(useProductStore, ["promotions"]),
      },
    };
  
  </script>
  
<style scoped>

.container_page1 {
    width: 100%;
    height: auto;
    margin: 0px;
}

.wrap_page1 {
   
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.cart_page1{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-between;
    gap: 9px;
}

.promotion_container{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
}
   
.popular_product_menu{
    margin-top: 10px;
}  
</style>
  