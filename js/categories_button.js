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
            <button id = "btn-${category.id}" onclick = "loadFoods(${category.id})" class = " flex items-center hover:bg-[#e9e7e7] w-full bg-white gap-1 mb-3 py-2 px-3 cursor-pointer rounded-full category-btn">
                <div class = ""><img class = "md:w-16 h-6 mx-auto  pl-1" src="${category.categoryImg}" alt=""></div>
                <h3 class = "md:text-xs text-center ">${category.categoryName}</h3>
            </button>
        
        `;
        categoriesButton.appendChild(categoryBtn)
    }
}


loadCategories()