const getData=() => {
    url=`https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res=>res.json())
    .then(data =>displayData(data.data.tools))
}

getData()

//loader toggle
const toggleSpinner=isLoading=>{
  const loaderSection=document.getElementById('loader')
  if(isLoading){
    loaderSection.classList.remove('d-none')
  }
  else{
    loaderSection.classList.add('d-none')
  }
}





//display 6 data function
const displayData= (infos)=>{
    const cardArea=document.getElementById('card-area')

    toggleSpinner(true);
    
//infos=infos.slice(0,6)

infos.forEach(info => {
   const cardDiv=document.createElement('div')
   cardDiv.classList.add('col')
   
   cardDiv.innerHTML=`
 
          <div class="card">
            <img src="${info.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h3>Features</h3>
              <ol>
              ${info.features.map((feature) => `<li>${feature}</li>`).join('')}
            </ol>
            <hr>
            <h4>${info.name}</h4>
            <div class="d-flex">
            <i class="fa-solid fa-calendar-days mt-2 mx-3"></i>
            <p class="mt-2">${info.published_in}</p>
             
             <button onclick="modalData(info.data.id)" type="button" class=" detail-btn btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
             Details
</button>
           
             
             </div>
             
            </div>
          </div>
        
   `
   cardArea.appendChild(cardDiv)
});
toggleSpinner(false);
}
//modal info 
const modalData=(id)=>{
  url=`https://openapi.programming-hero.com/api/ai/tool/${id}`
  fetch(url)
  .then(res=> res.json())
  .then(data=>displayModal(data))
  
}
const displayModal=info=>{
modalText=document.getElementById('modal-text')
modalText.innerHTML=`
<p>${info.data.description}</p>
`


}
modalData()