<!-- print hello world -->
<template>
  <div>
    <Cart
      bgColor = "#F2FCE4"
      Img = "https://s3-alpha-sig.figma.com/img/8370/e915/8a586f746c0b10b70cd405c8aa1f2038?Expires=1698624000&Signature=efjk3l27pdR9DDpQkIPN0F2PM-3G5AWiuVspKR-LX7cHoikxjkxhR-cFbHmuxFQWp14~RAfoZs6cWzL9WGTgdm2KBz319La9E3Tp6pc9m5l0kyqkQhgX1SoQtEN05kDUigdbEuaI1FTvP4jWpUDcMb~QYqyo30vqssiK4uJAJSUcR~d9QRSnsZgYJnJE4VlQG9ATle4~fRUTMIqEmVsnDsT0Z0VSi6TIw8V9ZqActoiWyZpop1XKR0JMg~6RlWFqUqUPBjYACZkGCeFWQC30nl7F0MJx2dI24tUOartX3qTp7Cm50zjJYYOmHCD-woYgaPnofI-IU7ZcRd2a-rRdbw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      Title= "Cake & Milk"
      Item = "14 items"
    />

   <div class="promotion_container">
      <div v-for="item in promotion" :key="item.Img" class="container">
        <AddVertise
          :bgColor="item.bgColor"
          :heanding="item.heanding"
          :textBtn="item.textBtn"
          :colorBtn="item.colorBtn"
          :Img="item.Img"
        />
      </div>
    </div>
  </div>
</template>

<script>

import MyButton from './components/MyButton.vue';
import Cart from './components/Cart.vue';
import AddVertise from './components/AddVertise.vue';

  export default {
    name: 'App',
    components: {
      MyButton,
      Cart,
      AddVertise,
    },

    data(){
      return{
        promotion: [
          {
            bgColor: "#F2FCE4",
            heanding: "Everyday Fresh & Clean with Our Products",
            textBtn: "Show Now",
            colorBtn: "#3BB77E",
            Img: "https://clipart-library.com/image_gallery2/Onion-PNG-File.png"
          },
          {
            bgColor: "#F3E8E8",
            heanding: "Make your Breakfast Healthy and Easy",
            textBtn: "Show Now",
            colorBtn: "#3BB77E",
            Img: "https://clipart-library.com/image_gallery2/Onion-PNG-File.png"
          },
          {
            bgColor: "#F3E8E8",
            heanding: "Make your Breakfast Healthy and Easy",
            textBtn: "Show Now",
            colorBtn: "#3BB77E",
            Img: "https://clipart-library.com/image_gallery2/Onion-PNG-File.png"
          }
        ],
      }
    }
  };

</script>

<style scoped>
.promotion_container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.container {
  margin-left: 48px;
}
</style>
