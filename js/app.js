const loadPhone = async(searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data);
    displayPhones(data.data, dataLimit);
}
const displayPhones = (phones, dataLimit) =>{
    const phoneContainer = document.getElementById('phone-container');
        phoneContainer.textContent = '';
        console.log(phones);
        
        // display phones by slicing 
        //phones = phones.slice(0, 10)
        const showAll = document.getElementById('show-all');
        if(dataLimit && phones.length > 10){
            phones = phones.slice(0, 10)
            showAll.classList.remove('d-none');
        } else{
            showAll.classList.add('d-none');
        }
        
        // Display no phone found
        const noPhoneFound = document.getElementById('no-found-message');
        if(phones.length === 0) {
            noPhoneFound.classList.remove('d-none') 
        } else{
            noPhoneFound.classList.add('d-none') 
        }
        
        // Display all phones
        phones.forEach(phone =>{
        const phoneDiv = document.createElement('div')
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML = `
            <div class="card p-4">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="my-4">Brand: ${phone.brand}</h3>
                    <h5 class="card-title">Name: ${phone.phone_name}</h5>
                </div>
            </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    })
    // stop loader
    toggleSpinner(false)
}

// After click show all button 
const processSearch = (dataLimit) =>{
    toggleSpinner(true)
    const searchField = document.getElementById('search-text')
    const searchText = searchField.value
    loadPhone(searchText, dataLimit) 
}

// handle search button click
document.getElementById('btn-search').addEventListener('click', function(){
    //start loader
    processSearch(10)
})

const toggleSpinner = isLoading => {
    const loading = document.getElementById('loader')
    if (isLoading){
        loading.classList.remove('d-none')
    } else {
        loading.classList.add('d-none')
    }
}


document.getElementById('btn-show-all').addEventListener('click', function(){
    processSearch();
})

//loadPhone();

