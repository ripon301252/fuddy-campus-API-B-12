const loadFoodDetailsModal= (id) => {
        const url = `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
        // console.log(url)
            fetch(url)
                .then(res => res.json())
                .then(api => displayFoodDetailsModal(api.details))
                .catch(err => console.log(err))
}

const displayFoodDetailsModal = (details) => {
    // console.log(details.video)

    let videoTag = '';
    if (details.video.includes("youtube.com")) {
        
        // YouTube হলে iframe
        const videoId = details.video.split("v=")[1];
        videoTag = `
            <iframe 
                src="https://www.youtube.com/embed/${videoId}" 
                class="w-full h-64 rounded-xl mb-5"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;
    } 
    else {
        // mp4 হলে video
        videoTag = `<video controls autoplay muted class="w-full rounded-xl mb-5" src="${details.video}"></video>`;
      
    }

    const foodDetailsContainer = document.getElementById('food-details-container')
    foodDetailsContainer.innerHTML = `
        <div class=" bg-white border-1 border-gray-300 rounded-2xl shadow-lg p-5 mt-5">
                     ${videoTag}
                    <hr class="w-full mr-6 border-1 border-gray-300 my-5">
                    <div class=" flex md:flex-row flex-col-reverse justify-between items-center gap-5">
                        <div>
                            <img class="md:w-48 rounded-xl" src="${details.foodImg}" alt="">
                        </div>
                        <div>
                            <h1 class="mb-2">${details.title}</h1>
                            <span 
                                class="text-[#79320d] tex-sm bg-[#E7A700] py-1 px-4 rounded-full cursor-pointer">${details.category}</span>
                            <div class="flex justify-between items-center">
                                <hr class="w-16 mr-6 border-1 border-gray-300 my-5">
                                <div>
                                    <span class="mr-1 text-[#79320d]">$</span>
                                    <span class="text-[#79320d]">${details.price}</span>
                                    <span class="ml-1 text-[#79320d]">BDT</span>
                                </div>

                            </div>
                           <h3 class = "text-lg font-extrabold ">Area : ${details.area}</h3>
                           <a href="${details.video}"target="_blank"  class="btn btn-warning mt-3">Watch Video</a>
                        </div>
                    </div>

                </div>
    
    `;
    



    document.getElementById('burger_modal').showModal()

}

// loadFoodDetailsModal()