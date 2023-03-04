



// card data call
const getData = () => {
  url = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data.data.tools));
};
getData();
// Sort data by date in ascending order
const sortByDate = (data) => {
  return data.sort((a, b) => new Date(a.published_in) - new Date(b.published_in));
};

const seeAll=()=>{
  const getData = () => {
    url = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayData(data.data.tools));
  };
  getData();
  const displayData= (infos)=>{
    const cardArea=document.getElementById('card-area')
toggleSpinner(true);
 

infos.slice(6,12).forEach(info => {
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
             
           
            <button onclick="modalData('{info.data.id}')" type="button" class=" detail-btn btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Details</button>


           
             
             </div>
             
            </div>
          </div>
        
   `
   cardArea.appendChild(cardDiv)
   seeMore=document.getElementById('see-more')
   seeMore.classList.add('d-none')
   
});
toggleSpinner(false);

}
}





//display 6 data function
const displayData= (infos)=>{
    const cardArea=document.getElementById('card-area')
toggleSpinner(true);
    

infos.slice(0,6).forEach(info => {
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
             
           
            

            <button onclick="modalData('${info.id}')" type="button" class=" detail-btn btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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

const modalData = (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tools/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const modalText = document.getElementById('modal-text');
      const modalImage = document.getElementById('modal-image');
      modalText.innerHTML = `
        <h4>${data.data.tool_name}</h4>
        <p>${data.data.description}</p>
        <ul>
          ${data.data.features.map((feature) => `<li>${feature.feature_name}</li>`).join('')}
        </ul>
      `;
      modalImage.innerHTML = `<img src="${data.data.image}" alt="${data.data.name}" />`;
    });

};

