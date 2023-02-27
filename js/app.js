const loadPhone = async(searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data);
}

const displayPhones = phones =>{

    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
        phones.data.forEach(phone =>{
        const phoneDiv = document.createElement('div')
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML = `
            <div class="card p-4">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="my-4">Brand: ${phone.brand}</h3>
                    <h5 class="card-title">Phone Name: ${phone.phone_name}</h5>
                </div>
            </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    })
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-text')
    const searchText = searchField.value
    loadPhone(searchText)
    
})

loadPhone();
