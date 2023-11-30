<template>
    <div class="container_menu_item">
        <div class="account_mi">
            <svg 
              width="20" height="20"
              xmlns="http://www.w3.org/2000/svg"  
              viewBox="0 0 24 24">
              <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="#253D4E"></path>
            </svg>
            <p>Account</p>
        </div>
        <div class="compare_mi">
            <img src="../assets/images/recycle.png" alt="">
            <p>Compare</p>
        </div>
        <div class="wishlist_mi">
            <svg 
              width="20" height="20"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24">
              <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z" fill="253D4E"></path>
            </svg>
            <p>Wishlist</p>
        </div>
        <div class="cart_mi">
            <svg 
               width="20" height="20"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.00436 6.41662L0.761719 3.17398L2.17593 1.75977L5.41857 5.00241H20.6603C21.2126 5.00241 21.6603 5.45012 21.6603 6.00241C21.6603 6.09973 21.6461 6.19653 21.6182 6.28975L19.2182 14.2898C19.0913 14.7127 18.7019 15.0024 18.2603 15.0024H6.00436V17.0024H17.0044V19.0024H5.00436C4.45207 19.0024 4.00436 18.5547 4.00436 18.0024V6.41662ZM6.00436 7.00241V13.0024H17.5163L19.3163 7.00241H6.00436ZM5.50436 23.0024C4.67593 23.0024 4.00436 22.3308 4.00436 21.5024C4.00436 20.674 4.67593 20.0024 5.50436 20.0024C6.33279 20.0024 7.00436 20.674 7.00436 21.5024C7.00436 22.3308 6.33279 23.0024 5.50436 23.0024ZM17.5044 23.0024C16.6759 23.0024 16.0044 22.3308 16.0044 21.5024C16.0044 20.674 16.6759 20.0024 17.5044 20.0024C18.3328 20.0024 19.0044 20.674 19.0044 21.5024C19.0044 22.3308 18.3328 23.0024 17.5044 23.0024Z" fill="253D4E"></path>
            </svg>
            <p>Cart</p>
        </div>
    </div>
  
</template>

<script>
export default {
    name: 'MenuItem',
    
}
</script>

<style scoped>
.container_menu_item{
    display: flex;
    flex-direction: row;
    align-items: center;
    
}
.account_mi{
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.compare_mi{
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.wishlist_mi{
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.cart_mi{
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

p{  
    font-family: 'Quicksand', sans-serif;
    margin-left: 5px;
    font-size: 16px;
    color: #7E7E7E;
}

</style>