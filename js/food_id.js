const loadFoods = (id) => {
    const spinner = document.getElementById('spinner');
    spinner.classList.remove('invisible');

    const foodsContainer = document.getElementById('foods-container')
    foodsContainer.innerHTML = ''
    
    removeActive()
    const btn = document.getElementById(`btn-${id}`)
    // console.log(btn)
    btn.classList.add('active')


    const url = `https://taxi-kitchen-api.vercel.app/api/v1/categories/${id}`
    setTimeout(function () {
        fetch(url)
            .then(res => res.json())
            .then(api => displayFoods(api.foods))
            .catch(err => console.log(err))
    }, 200)

}


const removeActive = () => {
    const categoryButtons = document.querySelectorAll(".category-btn");
    //   console.log(categoryButtons);
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
};


const displayFoods = (foods) => {
    // console.log(foods)

    document.getElementById('spinner').classList.add('invisible');

    const foodsContainer = document.getElementById('foods-container')
    foodsContainer.innerHTML = ''
    foods.forEach(food => {
        const foodCard = document.createElement('div');
        foodCard.innerHTML = `
            <div class="flex md:flex-row flex-col gap-5 bg-white border-1 border-gray-300 rounded-2xl shadow-lg p-5 mt-5">
                <div>
                    <img class = "md:w-48 rounded-xl" src="${food.foodImg}" alt="">
                </div>
                <div>
                    <h1 class = "mb-2">${food.title}</h1>
                    <span onclick = "loadFoodDetailsModal(${food.id})" class="text-[#79320d] tex-sm bg-[#E7A700] py-1 px-4 rounded-full cursor-pointer">${food.category}</span>
                    <div class="flex justify-between items-center">
                        <hr class="w-80 mr-6 border-1 border-gray-300 my-5">
                        <div>
                            <span class="mr-1 text-[#79320d]">$</span> 
                            <span class="text-[#79320d]">${food.price}</span> 
                            <span class="ml-1 text-[#79320d]">BDT</span> 
                        </div>
                                   
                    </div>
                        <button id = "" class="btn btn-warning card-title"><i class="fa-solid fa-square-plus"></i>Add This Item</button>
                </div>
            </div>
        `;
        foodsContainer.appendChild(foodCard)
    })

}


// loadFoods('foods-container')
