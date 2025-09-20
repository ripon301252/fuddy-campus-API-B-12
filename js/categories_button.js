const loadCategories = () => {
    fetch('https://taxi-kitchen-api.vercel.app/api/v1/categories')
        .then(res => res.json())
        .then(api => displayCategories(api.categories))
        // .then(api => displayFoods(api.categories))
        .catch(err => console.log(err))
}

const displayCategories = (categories) =>{
    // console.log(categories)
    const categoriesButton = document.getElementById('categories-button')

    for(const category of categories){
        // console.log(category)
        const categoryBtn = document.createElement('div');
        categoryBtn.innerHTML = `
            <button id = "btn-${category.id}" onclick = "loadFoods(${category.id})" class = " flex items-center hover:bg-[#e9e7e7] w-36 bg-white gap-1 mb-3 py-1 px-2 cursor-pointer rounded-full category-btn">
                <div><img class = "w-10 h-6 mx-auto  pl-2" src="${category.categoryImg}" alt=""></div>
                <h3 class = "text-xs text-center ">${category.categoryName}</h3>
            </button>
        
        `;
        categoriesButton.appendChild(categoryBtn)
    }
}


loadCategories()
