const getData=() => {
    url=`https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res=>res.json())
    .then(data =>displayData(data.data.tools))
}

getData()






//display 6 data function
const displayData= (infos)=>{
    const cardArea=document.getElementById('card-area')
    
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
             <button id="details-btn" class="detail-btn">Details</button>
           
             
             </div>
             
             



            </div>
          </div>
        
   `
   cardArea.appendChild(cardDiv)
});




}
