    //funtion for memory,storage and delivery cost
    function Cost(doller,inputId){
        const variousCost = document.getElementById(inputId);
        variousCostText = variousCost.innerText
        const cost  = doller;
        variousCost.innerText= cost;
    }
    //function for sum of totalprice
    function totalPrice(){
        const totalPrice = document.getElementById('total-cost');
        const bestPrice = document.getElementById('best-price');
        const bestPriceAmount = parseInt(bestPrice.innerText);
        const memoryCost =document.getElementById('memory-cost');
        const memoryCostAmount = parseInt(memoryCost.innerText);
        const storageCost =document.getElementById('storage-cost');
        const storageCostAmount = parseInt(storageCost.innerText);
        const deliveryCost = document.getElementById('delivery-cost');
        const deliveryCostAmount = parseInt(deliveryCost.innerText);
        totalPrice.innerText = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;
        const totalCost = document.getElementById('total-cost-after-coupon');
        totalCost.innerText = totalPrice.innerText;
    }

    // event handler for memory buttons
    document.getElementById("free-memory-btn").addEventListener('click', function () {
        const freeUnifiedMemory = Cost(0,'memory-cost');
        totalPrice();
    })

    document.getElementById("expensive-memory-btn").addEventListener('click', function () {
        const costlyUnifiedMemory = Cost(180,'memory-cost')
        totalPrice();
    })

    //event handler for storage buttons
    document.getElementById("free-ssd-btn").addEventListener('click', function(){
        const freeStorage = Cost(0,'storage-cost');
        totalPrice();
    })
    document.getElementById("medium-ssd-btn").addEventListener('click', function(){
        const mediumStorage = Cost(100,'storage-cost');
        totalPrice();
    })
    document.getElementById("expensive-ssd-btn").addEventListener('click', function(){
        const expensiveStorage = Cost(180,'storage-cost');
        totalPrice();
    })

    // event handler for delivery option buttons
    document.getElementById("free-delivery-btn").addEventListener('click', function(){
        const freeDelivery = Cost(0,'delivery-cost');
        totalPrice();
    })
    document.getElementById("paid-delivery-btn").addEventListener('click', function(){
        const paidDelivery = Cost(20,'delivery-cost');
        totalPrice();
    })



    //event handler for coupon code 
    document.getElementById('apply-coupon-btn').addEventListener('click',function(){
        const couponCode = document.getElementById('coupon-code');
        const couponCodeText = couponCode.value;
        if (couponCodeText ==  'stevekaku' ){
            const totalCost = document.getElementById('total-cost-after-coupon');
            const totalCostText = totalCost.innerText;
            const totalCostAmount = parseInt(totalCostText) ;
            const totalCostAfterCoupon = totalCostAmount -( totalCostAmount * (20/100) );
            totalCost.innerText = totalCostAfterCoupon;
            couponCode.value =' ';
        }
    })