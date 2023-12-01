<template>
    <div class="page-header">
        <div style="
            display: flex;
            flex-direction: column;
            margin-top: 70px;
            margin-left: 50px;
        ">
            <span 
            style="
                font-family: 'Quicksand', sans-serif;
                font-size: 48px;
                font-weight: 700;
                line-height: 56px;
                color: #253d4e;
            ">{{ title }}
            </span>
            <span style="
                display: flex;
                align-items: center;
                gap: 3px;
                margin-top: 20px;
                margin-left: 5px;
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
                <span>{{ title }}</span>
            </span>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'PageHeader',
    props: {
        title: {
            type: String,
            default: 'Coke & Milk'
        }
    }

}
</script>

<style scoped>
.page-header{
    display: flex;
    flex-direction: column;
    background-color: rgba(59, 183, 126, 0.2);
    width: 100%;
    height: 235px;
    border-radius: 20px;
    background-image: url("../assets/images/background_image_pageheader1.png"), url("../assets/images/background_image_pageheader.png");
    background-position: left bottom, right bottom;
    background-repeat: no-repeat;
}
span{
    font-family: 'Quicksand', sans-serif;
    font-size: 18px;
    line-height: 16px;
    color: #7e7e7e;
}
</style>