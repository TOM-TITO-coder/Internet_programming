<template>
  <div class="container_showCase">
    <div class="wrap_info_case">
        <h1 class="title_case">{{ title }}</h1>
        <p class="info_case">{{ info }}</p>
        <div class="wrap_input_case">
            <svg
              style="margin-left: 30px;" 
              width="15" height="15"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24">
              <path d="M1.94631 9.31555C1.42377 9.14137 1.41965 8.86034 1.95706 8.6812L21.0433 2.31913C21.5717 2.14297 21.8748 2.43878 21.7268 2.95706L16.2736 22.0433C16.1226 22.5718 15.8179 22.5901 15.5946 22.0877L12.0002 14.0002L18.0002 6.00017L10.0002 12.0002L1.94631 9.31555Z" fill="#7E7E7E"></path></svg>
            <input type="text" placeholder="Your email address">
            <button>Subscribe</button>
        </div>
    </div>
    <div class="wrap_image_case">
        <img src="../assets/images/grocery_showcase.png" alt="">
    </div>

  </div>
</template>

<script>
export default {
    name: 'ShowCaseProduct',
    props: {
        title: {
            type: String,
            default: "Don't miss amazing grocery deals"
        },
        info: {
            type: String,
            default: 'Sign up for the daily newsletter'
        },
    }

}
</script>

<style scoped>
.container_showCase{
    display: flex;
    width: 100%;
    height: 538px;
    flex-direction: row;
    align-items: center;
    background: rgba(253, 192, 64, 0.2);
    background-image: url("../assets/images/background_image_showcase.png");
    border-radius: 30px;

}

.title_case{
    font-family: 'Quicksand', sans-serif;
    font-size: 72px;
    font-weight: 700;
    line-height: 78px;
    color: #253D4E;
}

.info_case{
    font-family: 'Quicksand', sans-serif;
    font-size: 30px;
    font-weight: 400;
    line-height: 26px;
    color: #B6B6B6;
}

.wrap_info_case{
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    justify-content: center;
    padding-left: 10%;
}

.wrap_input_case{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 442px;
    height: 50px;
    background: #FFFFFF;
    border-radius: 30px;
}

.wrap_input_case input{
    border: none;
    outline: none;
    margin-left: 20px;
}

.wrap_input_case button{
    border: none;
    outline: none;
    background: #3BB77E;
    border-radius: 30px;
    width: 150px;
    height: 50px;
    font-family: 'Quicksand', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 19px;
    color: #FFFFFF;
    margin-left: 60px;
}
</style>