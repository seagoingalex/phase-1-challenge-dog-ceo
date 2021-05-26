//console.log('%c HI', 'color: firebrick')

//Declare bindings
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

//Write Fetches
function getDogs(){
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        data.message.forEach(dogUrl => renderDogImage(dogUrl))
    })
}

function getDogBreeds(){
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        let breedObj = data.message
        for(dogArray in breedObj) {
            renderDogBreed(dogArray)
        }
    })
}

// DOM Renders
function renderDogImage(dog) {
    const dogImageContainer = document.getElementById('dog-image-container');
    let dogImg = document.createElement('img');
    dogImg.src = dog;
    dogImageContainer.appendChild(dogImg);
}

function renderDogBreed(dog) {
    let dogBreedList = document.getElementById("dog-breeds");
    let dogBreedLine = document.createElement('li');
    dogBreedLine.innerText = dog;
    dogBreedList.appendChild(dogBreedLine);
}

function renderFilterOptions() {
    let dropDown = document.getElementById("breed-dropdown")
    dropDown.innerHTML += '<option value="e">e</option>'
    dropDown.innerHTML += '<option value="f">f</option>'
    dropDown.innerHTML += '<option value="g">g</option>'
    dropDown.innerHTML += '<option value="h">h</option>'
    dropDown.innerHTML += '<option value="i">i</option>'
    dropDown.innerHTML += '<option value="j">j</option>'
    dropDown.innerHTML += '<option value="k">k</option>'
    dropDown.innerHTML += '<option value="l">l</option>'
    dropDown.innerHTML += '<option value="m">m</option>'
    dropDown.innerHTML += '<option value="n">n</option>'
    dropDown.innerHTML += '<option value="o">o</option>'
    dropDown.innerHTML += '<option value="p">p</option>'
    dropDown.innerHTML += '<option value="q">q</option>'
    dropDown.innerHTML += '<option value="r">r</option>'
    dropDown.innerHTML += '<option value="s">s</option>'
    dropDown.innerHTML += '<option value="t">t</option>'
    dropDown.innerHTML += '<option value="u">u</option>'
    dropDown.innerHTML += '<option value="v">v</option>'
    dropDown.innerHTML += '<option value="w">w</option>'
    dropDown.innerHTML += '<option value="x">x</option>'
    dropDown.innerHTML += '<option value="y">y</option>'
    dropDown.innerHTML += '<option value="z">z</option>'
}


//Event Listeners

document.addEventListener('DOMContentLoaded', () => {
    getDogs();
    getDogBreeds();
    dogPink();
    renderFilterOptions();
    selectorFilter();
//    breedFilter();
});

function dogPink() {
    let dogList = document.querySelector("#dog-breeds")
    dogList.addEventListener('click', (e) => {
        e.target.style.color = 'pink';
    })
} 

function selectorFilter() {
    const breedFilter = document.getElementById("breed-dropdown")
    breedFilter.addEventListener('change', (e) => {
        let dogBreeds = document.getElementById("dog-breeds");
        const optionLetter = e.target.value
        const filteredDogs = dogBreeds.innerHTML.filter((breed) => breed.startsWith(optionLetter))
        let dogBreedList = document.getElementById("dog-breeds");
        dogBreedList.innerHTML = createDogList(filteredDogs)
    })
}

// function selectorFilter() {
//     const breedFilter = document.getElementById("breed-dropdown")
//     breedFilter.addEventListener('change', () => {
//         console.log(this.value)
//     })
// }

// function breedFilter() {
//     const breedArray = document.querySelector("#dog-breeds")
//     console.log(breedArray);
//     for (const dog of breedArray) {
//         if (dog.startsWith('a')) {
//             console.log(dog)
//         }
//     }
// }

// document.getElementById("dog-breeds").addEventListener('click', (e) => {
//     if(e.target && e.target.nodeName == "li") {
//         //console.log(e.target);
//         e.target.color = 'pink';
//     }
// })

