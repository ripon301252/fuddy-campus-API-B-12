document.getElementById('foods-container').addEventListener('click', (e) => {
    // console.log(e.target.localName)

    if(e.target.localName !== 'button') {
        return;
    }
      
    const totalPrice = document.getElementById('total-price').innerText;
    // console.log(totalPrice)

    let photo = '';
    let title =  '';
    let price = '';

    if(e.target.className.includes('card-title')){
        const cartBtn = e.target
       
        photo = cartBtn.parentNode.parentNode.children[0].children[0].src;
       
        title = cartBtn.parentNode.children[0].innerText;
        
        price = cartBtn.parentNode.children[2].children[1].children[1].innerText;
        
        const priceTotal = Number(price) + Number(totalPrice)
        document.getElementById('total-price').innerText = priceTotal;

        alert(`Food Name (${title}) has been added to the cart.`)

    }

    const cartContainer = document.getElementById('cart-container');
    // console.log(cartContainer)
    const cartHistory = document.createElement('div')
    cartHistory.innerHTML =`
        
        <div class="flex justify-between items-center bg-white border-1 border-gray-300 p-2 rounded-md mt-3 gap-2 mx-2 ">
            <div><img class="w-20 rounded-lg " src="${photo}" alt=""></div>
                <div class="text-right">
                    <h3 class="text-xs font-semibold ">${title}</h3>
                        <p class="text-[#79320d] text-sm my-1">
                            <span>$</span>
                            <span id = 'price-title' >${price}</span>
                            <span>BDT</span>
                        </p>
                    <button id = 'delete' class="btn btn-warning cursor-pointer text-sm ">Delate</button>
                </div>
           
        </div>
          
    `
    cartContainer.appendChild(cartHistory);
})


// Delete button
document.getElementById('cart-container').addEventListener('click', (e) => {

    if(e.target.id === 'delete'){
        const perCart = e.target.parentNode.parentNode.parentNode
        console.log(perCart)

        const price = Number(perCart.querySelector('#price-title').innerText);

        const totalPrices = document.getElementById('total-price');
        const currentTotal = Number(totalPrices.innerText)
        totalPrices.innerText = currentTotal - price;

        perCart.remove();
    }
})