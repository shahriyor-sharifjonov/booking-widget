<template>
    <div class="book-order__cars">
        <p class="book-order__cars-title">Payment method</p>
        <div class="book-payment">
            <button class="book-payment__button active">
                <img src="/cash.png" alt="" draggable="false" />
                <span>Cash</span>
            </button>
            <button class="book-payment__button">
                <img src="/card.svg" alt="" draggable="false" />
                <span>Card</span>
            </button>
            <button class="book-payment__button">
                <img src="/bankcontact.png" alt="" draggable="false" />
                <span>Bancontact</span>
            </button>
        </div>
        <div class="book-payment__coupon"> 
            <input type="text" placeholder="Coupon code">
            <button type="button">Apply</button>
        </div>
    </div>
</template>