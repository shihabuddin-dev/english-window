// Get All Levels 
const getBtnData = async () => {
    try {
        const response = await fetch('https://openapi.programming-hero.com/api/levels/all')
        const data = await response.json()
        displayDataByBtn(data.data);
    }
    catch (error) {
        console.log(error);
    }
}
getBtnData()

const displayDataByBtn = (data) => {
    data.forEach(btn => {
        const dynamicBtn = document.getElementById('dynamic-btn-container')
        const newDiv = document.createElement('div')
        newDiv.innerHTML = ` 
        <button id="btn-${btn.level_no}" onclick="(getLevelData('${btn.level_no}'))"
    class="category-btn btn bg-transparent border-2 border-primary-color px-4 text-primary-color text-sm font-semibold hover:bg-primary-color hover:border-primary-color hover:text-white rounded-md"><i
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
            button.addEventListener("click", () => {
                document.getElementById('all-dynamic-container').classList.remove('hidden')
                document.getElementById('default-div').classList.add('hidden')
                // Remove active class from all buttons
                document.querySelectorAll(".category-btn").forEach(btn => {
                    btn.classList.remove("active");
                });
                this.classList.add("active");
            });
        });
    }
    catch (error) {
        console.log(error);
    }
}
// getLevelData(`2`)
document.getElementById('all-dynamic-container').classList.add('hidden')


const displayDataByLevel = (levels) => {
    const dynamicContainer = document.getElementById('all-dynamic-container')
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
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
         <div class="p-8 md:p-14 space-y-8 md:space-y-12 bg-white rounded-md">
                <div class="text-center space-y-3 md:space-y-5">
                    <h3 class="text-2xl md:text-[32px] font-bold">${level.word}</h3>
                    <h4 class="text-lg md:text-xl font-medium">Meaning/ Pronunciation</h4>
                    <h3 class="hind-siliguri-font text-xl md:text-3xl font-semibold">${level.meaning}/ ${level.pronunciation}
                    </h3>
                </div>
                <div class="flex items-center justify-between">
                    <p class="bg-fifth-color p-1 md:p-2 rounded-md"><i
                            class="text-xl md:text-3xl fa-solid fa-circle-info"></i>
                    </p>
                    <p class="bg-fifth-color p-1 md:p-2 rounded-md"><i
                            class="text-xl md:text-3xl fa-solid fa-volume-high"></i>
                    </p>
                </div>
            </div>
        `
        dynamicContainer.appendChild(newDiv)
    })


}