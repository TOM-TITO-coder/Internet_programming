<template>
    <div class="product_detail">
        <div class="product-detail_image">
            <img :src=image alt=""
                style=
                " 
                  width: 500px; height: 300px;
                  position: absolute; 
                  top: 50%; left: 50%; 
                  transform: translate(-50%, -50%);
                "
            >
            <svg style="position: absolute; left: 90%; top: 5%;" 
              width="30" height="30"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24">
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="#B6B6B6"></path>
            </svg>
        </div>
        <div class="product-detail_content">
            <div class="product-detail_content_tag">
                <span 
                  style="
                        font-family: 'Quicksand', sans-serif;
                        font-size: 14px;
                        font-weight: 700;
                        line-height: 20px;
                        color: #3BB77E;
                    "
                >{{ tag_stock }}</span>
            </div>
            <div class="product-detail__content__title">
                <h1 style="
                    font-family: 'Quicksand', sans-serif;
                    font-size: 40px;
                    font-weight: 700;
                    line-height: 48px;
                    color: #253D4E;
                ">
                  {{ title }}
                </h1>
            </div>
            <div class="rate_product">
            
                <svg 
                    v-for="(starCorlor) in getStarColors()" :key="starCorlor" 
                    width="12" height="12" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="12,2 15,10 23,10 17,14 19,22 12,17 5,22 7,14 1,10 9,10" :fill="starCorlor"/>
                </svg>
    
                ({{ rate_product.toFixed(1)  }})
            </div>
            <div class="product-detail__content__price">
                <h2 
                   style="
                        font-family: 'Quicksand', sans-serif;
                        font-size: 72px;
                        font-weight: 700;
                        line-height: 78px;
                        color: #3BB77E;
                   "
                >{{ price }}</h2>
                <span style="
                    font-family: 'Quicksand', sans-serif;
                    font-size: 32px;
                    font-weight: 700;
                    line-height: 40px;
                    color: #B6B6B6;
                    text-decoration-line: line-through;
                    margin-left: 20px;
                    margin-top: 20px;
                ">{{ discount }}</span>
            </div>
            <div class="product-detail__content__description">
                <p>{{ description }}</p>
            </div>
            <div class="product-detail__content__button">
                <button 
                    class="num_product" 
                    v-if="quantity === 0" 
                    @click="showInput = true; quantity = 1"
                    >
                    Add +
                </button>
                <button 
                    class="num_product" 
                    type="number" min="0" max="100"
                    v-if="showInput && quantity > 0 " 
                    :value="quantity" 
                    @input="updateQuantity($event.target.value)"
                > 
                    <div style="margin-left: 20px;">{{ quantity }}</div>
                    
                    <div class="arrow_num_product">
                        <!-- arrow up -->
                        <svg 
                        style="margin-left: 20px;" 
                        width="17" height="17" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24"
                        @click="increaseQuantity">
                            <path d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z" fill="#3BB77E"></path>
                        </svg>
                        
                        <!-- arrow down -->
                        <svg 
                        style="margin-left: 20px;" 
                        width="17" height="17" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24"
                        @click="decreaseQuantity">
                            <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" fill="#3BB77E"></path>
                        </svg>
                    </div>

                </button>
                <button class="btn_add_cart" style="
                    color: white;
                    background-color: #3BB77E;
                    width: 175px;
                    height: 50px;
                    border: none;
                    border-radius: 4px;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                ">
                    <svg 
                        width="20" height="20"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.00436 6.41662L0.761719 3.17398L2.17593 1.75977L5.41857 5.00241H20.6603C21.2126 5.00241 21.6603 5.45012 21.6603 6.00241C21.6603 6.09973 21.6461 6.19653 21.6182 6.28975L19.2182 14.2898C19.0913 14.7127 18.7019 15.0024 18.2603 15.0024H6.00436V17.0024H17.0044V19.0024H5.00436C4.45207 19.0024 4.00436 18.5547 4.00436 18.0024V6.41662ZM6.00436 7.00241V13.0024H17.5163L19.3163 7.00241H6.00436ZM5.50436 23.0024C4.67593 23.0024 4.00436 22.3308 4.00436 21.5024C4.00436 20.674 4.67593 20.0024 5.50436 20.0024C6.33279 20.0024 7.00436 20.674 7.00436 21.5024C7.00436 22.3308 6.33279 23.0024 5.50436 23.0024ZM17.5044 23.0024C16.6759 23.0024 16.0044 22.3308 16.0044 21.5024C16.0044 20.674 16.6759 20.0024 17.5044 20.0024C18.3328 20.0024 19.0044 20.674 19.0044 21.5024C19.0044 22.3308 18.3328 23.0024 17.5044 23.0024Z" fill="#fff"></path>
                    </svg>
                    <span style="
                        margin-left: 10px; 
                        font-family: 'Quicksand', sans-serif;
                        font-size: 20px;
                        font-weight: bold;
                        line-height: 20px;
                    "
                    >Add to Cart</span>
                </button>
                <div 
                    style="
                       display: flex;
                       align-items: center;
                       justify-content: center;
                       border: 1px solid #F2F3F4;
                       border-radius: 5px;
                       width: 50px;
                       height: 50px;
                   ">
                    <svg 
                        width="20" height="20"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24">
                        <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z" 
                        fill="#B6B6B6"></path>
                    </svg>
                </div>
                <div 
                    style="
                       display: flex;
                       align-items: center;
                       justify-content: center;
                       border: 1px solid #F2F3F4;
                       border-radius: 5px;
                       width: 50px;
                       height: 50px;
                   ">
                    <svg 
                       width="20" height="20"
                       xmlns="http://www.w3.org/2000/svg" 
                       viewBox="0 0 24 24">
                       <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z" 
                       fill="#B6B6B6"></path>
                    </svg>
                </div>
            </div>
            <div>
                <p>Vendor: <span style="color: #B6B6B6; font-family: 'Quicksand'; font-size: 18px;">NestMart</span></p>
                <p>SKU: <span style="color: #B6B6B6; font-family: 'Quicksand'; font-size: 18px;">FWM15VKT</span> </p>
            </div>
        </div>
    </div>
  
</template>

<script>

export default {
    name: 'ProductDetail',
    props: {
        title: {
            type: String,
            default: 'Seeds of Change Organic Quinoa, Brown'
        },
        tag_stock: {
            type: String,
            default: 'In Stock'
        },
        price: {
            type: String,
            default: '$ 38'
        },
        discount: {
            type: String,
            default: '$48'
        },
        description: {
            type: String,
            default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor. Sed vitae eros vitae nisl ultricies aliquet. Sed vitae eros vitae nisl ultricies aliquet.'
        },
        image: {
            type: String,
            default: new URL('../assets/images/mongo.png', import.meta.url)
        },
        rate_product: {
            type: Number,
            default: 4
        },

    },
    data() {
        return {
            showInput: false,
            quantity: 0,
        }
    },
    methods: {
        getStarColors() {
            let colors = [];
            for (let i = 0; i < 5; i++) {
                if (i < this.rate_product) {
                    colors.push('#FDC040'); // gold color for active stars
                } else {
                    colors.push('#CDCDCD'); // gray color for inactive stars
                }
            }
            return colors;
        },
        updateQuantity(value) {
            if (value === 0) {
                this.showInput = false;
            } else {
                this.showInput = true;
                this.quantity = value;
            }
        },
        increaseQuantity() {
            this.quantity++;
            this.showInput = true;
        },

        decreaseQuantity() {
            if (this.quantity > 0) {
                this.quantity--;
            }
            if (this.quantity === 0) {
                this.showInput = false;
            }
        },
    },

}
</script>

<style scoped>

.product_detail{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}
.product-detail_image{
    display: flex;
    width: 865px;
    height: 696px;
    border: 1px solid #e5e5e5;
    border-radius: 15px;
    position: relative;
}

.product-detail_content{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 865px;
    height: 696px;
    margin-left: 20px;
}

.product-detail_content_tag{
    background-color: #DEF9EC;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.rate_product{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 5px;
}

.product-detail__content__price{
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    margin-top: 30px;
}

.product-detail__content__button{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    margin-top: 50px;
}

.num_product{
    width: 117px;
    height: 50px;
    border: 0px solid #3BB77E;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Quicksand;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 35px;
    text-align: center;
    color: #3BB77E;
    
    cursor: pointer;
    background-color: #DEF9EC;
}

.num_product:hover{
    border: 1px solid #3BB77E;
}

.arrow_num_product{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}
</style>