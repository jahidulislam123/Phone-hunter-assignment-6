const allPhones =()=>{
    const searchPhone =document.getElementById('search-box').value;
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>showPhone(data.data));
}

const showPhone=(phones)=>{
    // console.log(phones);
    for(const phone of phones){
        console.log(phone);
        const parent = document.getElementById('phone-container');
    const div = document.createElement('div');
    div.innerHTML = ` <div class="card border p-5">
<div class="pro-pic">
    <img class="w-25" src="${phone.image}" alt="">
    <h2>Name: ${phone.phone_name}</h2>
    <h5>${phone.slug}</h5>
    <p>description</p>
    
</div>
</div>`;
    parent.appendChild(div);
    
    
    }



}