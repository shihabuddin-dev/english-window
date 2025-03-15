// Get All Levels 
const getBtnData = async () => {
    try {
        const response = await fetch('https://openapi.programming-hero.com/api/levels/all')
        const data = await response.json()
        displayDataByBtn(data.data);
    } catch (error) {
        console.log('Here is an Error', error);
    }
}
getBtnData()

const displayDataByBtn = (data) => {
    data.forEach(btn => {
        const dynamicBtn = getById('dynamic-btn-container')
        const newDiv = createByTagName('div')
        newDiv.innerHTML = ` 
        <button id="btn-${btn.level_no}" onclick="(getLevelData('${btn.level_no}'))"
    class="category-btn load-time btn bg-transparent border-2 border-primary-color px-4 text-primary-color text-sm font-semibold hover:bg-primary-color hover:border-primary-color hover:text-white rounded-md"><i
        class="text-lg fa-solid fa-book-open"></i>Lesson - ${btn.level_no}</button>
        `
        dynamicBtn.appendChild(newDiv)
    });

}

// Get Words by Levels 
const getLevelData = async (level) => {
    try {
        const response = await fetch(`https://openapi.programming-hero.com/api/level/${level}`)
        const data = await response.json()
        displayDataByLevel(data.data);
        // Button click event listener
        document.querySelectorAll(".category-btn").forEach(button => {
            button.addEventListener("click", function () {
                showById('all-dynamic-container')
                hideById('default-div')
                // Remove active class from all buttons
                document.querySelectorAll(".category-btn").forEach(btn => {
                    btn.classList.remove("active");
                })
                this.classList.add("active");
            })
        })
    } catch (error) {
        console.log('Here is an Error', error);
    }
}
const displayDataByLevel = (levels) => {
    const dynamicContainer = getById('all-dynamic-container')
    dynamicContainer.innerHTML = ''
    if (levels.length < 1) {
        dynamicContainer.innerHTML = `
        <div
            class="col-span-full rounded-md bg-fourth-color md:py-8 text-center space-y-3 md:space-y-4 container mx-auto">
            <img class="mx-auto" src="./assets/alert-error.png" alt="this is alert image">
            <p class="hind-siliguri-font text-sm">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি</p>
            <h2 class="hind-siliguri-font text-2xl md:text-[34px] font-medium">নেক্সট Lesson এ যান</h2>
        </div>
        `
    }
    levels.forEach(level => {
        const newDiv = createByTagName('div')
        newDiv.innerHTML = `
         <div class="p-8 md:p-14 space-y-8 md:space-y-12 bg-white rounded-md">
                <div class="text-center space-y-3 md:space-y-5">
                    <h3 class="text-2xl md:text-[32px] font-bold">${level.word}</h3>
                    <h4 class="text-lg md:text-xl font-medium">Meaning/ Pronunciation</h4>
                    <h3 class="hind-siliguri-font text-xl md:text-3xl font-semibold">${level.meaning ? `${level.meaning}` : `অর্থ নেই`}/ ${level.pronunciation}
                    </h3>
                </div>
                <div class="flex items-center justify-between cursor-pointer">
                    <div onclick="word_details.showModal()"><p onclick=getWordsDetail('${level.id}') class="bg-fifth-color px-2 md:px-3 py-1 md:py-2 rounded-md"><i
                            class="text-xl md:text-2xl fa-solid fa-circle-info"></i>
                    </p> </div>
                    <div onclick="pronounceWord('${level.word}')" class="cursor-pointer"> <p class="bg-fifth-color px-1 md:px-2 py-1 md:py-2  rounded-md"><i
                            class="text-xl md:text-2xl fa-solid fa-volume-high"></i>
                    </p>
                    </div>
                </div>
            </div>
        `
        dynamicContainer.appendChild(newDiv)
    })
}
// Get Words Detail by modal
const getWordsDetail = async (wordId) => {
    try {
        const response = await fetch(`https://openapi.programming-hero.com/api/word/${wordId}`)
        const data = await response.json()
        displayWordDetails(data.data);
    } catch (error) {
        console.log('Here is an Error', error);
    }
}
getWordsDetail()

const displayWordDetails = (details) => {
    const detailsContainer = document.getElementById('details-container');
    let synonymsHTML = '';
    if (details.synonyms && details.synonyms.length > 0) {
        details.synonyms.slice(0, 3).forEach(synonym => {
            synonymsHTML += `<button class="category-btn btn bg-modal-btn-bg border-2 px-4 hover:text-primary-color text-sm font-semibold hover:bg-transparent hover:border-primary-color hover:text-black rounded-md">${synonym}</button>`;
        });
    }
    detailsContainer.innerHTML = `
        <div class="rounded-md p-6 border-2 space-y-4">
            <h3 onclick="pronounceWord('${details.word}, Word Example is, ${details.sentence}')" class="cursor-pointer text-2xl md:text-[32px] font-bold">${details.word} (<i class="fa-solid fa-microphone-lines"></i> ${details.pronunciation})</h3>
            <p class="text-xl md:tetx-2xl font-semibold">Meaning</p>
            <p class="hind-siliguri-font text-xl md:tetx-2xl font-medium">${details.meaning || 'অর্থ পাওয়া যায় নি'}</p>
            <p class="text-xl md:tetx-2xl font-semibold">Example</p>
            <p class="text-xl md:tetx-2xl font-normal">${details.sentence}</p>
            <p class="hind-siliguri-font text-xl md:tetx-2xl font-medium">সমার্থক শব্দ গুলো</p>
            <div class="flex gap-2 flex-wrap">${synonymsHTML}</div>
        </div>
    `;
};
