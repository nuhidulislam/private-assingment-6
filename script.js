

const loadAllPets =async()=>{
    const response= await fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    const data=await response.json();
    displayAllpets(data.pets);

}



loadAllPets()

const displayAllpets=(pets)=>{
    const PetCardContainer=document.getElementById('pet-card-container')
    pets.forEach(pet=>{
        const div=document.createElement('div');
        div.innerHTML=`
         <div class="w-[285px] h-[450px]  border-[3px] border-gray-500 mt-3 rounded-2xl p-4">
        <img class="h-[200px] w-full rounded-2xl " src="${pet.image}" alt="">
        <h1 class="pt-3 text-[20px] font-bold">${pet.pet_name}</h1>
        <div class="card-option ">

          <div class="flex gap-3 items-center mt-1">
            <img src="images/ci1.png" alt="">
        <h1 class="text-[16px] text-gray-500">Breed: ${pet.breed?`${pet.breed}`:`Not Available`}</h1>
          </div>


          <div class="flex gap-3 items-center mt-1">
            <img src="images/ci2.png" alt="">
        <h1 class="text-[16px] text-gray-500">Birth: ${pet.date_of_birth?`${pet.date_of_birth}`:`Not Available`}</h1>
          </div>


          <div class="flex gap-3 items-center mt-1">
            <img src="images/ci3.png" alt="">
        <h1 class="text-[16px] text-gray-500">Gender: ${pet.gender?`${pet.gender}`:`Not Available`}</h1>
          </div>


          <div class="flex gap-3 items-center mt-1">
            <img src="images/ci4.png" alt="">
        <h1 class="text-[16px] text-gray-500">Price : ${pet.price?`${pet.price}`:`Not Available`}$</h1>
          </div>

          <hr class="border-1 border-gray-600 my-3">

          <div class="flex justify-between gap-2">
            <div class="border-2 border-gray-500 py-1 px-3 rounded-2xl flex justify-center items-center ">
              <button onclick="sendPetImg('${pet.image}')"><img src="images/ci5.png" alt=""></button>
            </div>


            <div class="border-2 border-gray-500 py-1 px-3 rounded-2xl flex justify-center items-center ">
              <button id="${pet.petId}" onclick="showPopup()"  class="font-bold text-[#0E7A81] text-[20px]">Adopt</button>
              
            </div>



            <div class="border-2 border-gray-500 py-1 px-3 rounded-2xl flex justify-center items-center ">
              <button  onclick="my_modal_1.showModal()" class="font-bold text-[#0E7A81] text-[20px]">Details</button>
            </div>


          </div>

        </div>

      </div> 
        `
        PetCardContainer.appendChild(div);
    });

}

const showModal=()=>{
    const detailsContainer= document.getElementById('details-container')
    const div=document.createElement('div')
    div.innerHTML=`
      <div class=" p-5 w-[450px] h-[720px] border-2 border-red-800">
      <img class="w-full" src="images/card1.png" alt="">

      <h1 class="pt-3 text-[20px] font-bold">Name</h1>
      <div class="card-option ">

        <div class="flex gap-3 items-center mt-1">
          <img src="images/ci1.png" alt="">
      <h1 class="text-[16px] text-gray-500">Breed: </h1>
        </div>


        <div class="flex gap-3 items-center mt-1">
          <img src="images/ci2.png" alt="">
      <h1 class="text-[16px] text-gray-500">Birth:</h1>
        </div>


        <div class="flex gap-3 items-center mt-1">
          <img src="images/ci3.png" alt="">
      <h1 class="text-[16px] text-gray-500">Gender: </h1>
        </div>

        <div class="flex gap-3 items-center mt-1">
          <img src="images/ci3.png" alt="">
      <h1 class="text-[16px] text-gray-500">Vaccinated status: Partially</h1>
        </div>


        <div class="flex gap-3 items-center mt-1">
          <img src="images/ci4.png" alt="">
      <h1 class="text-[16px] text-gray-500">Price : $</h1>
        </div>
        <hr class="border-gray-500 border-[2px] my-5">

        <div>
          <h1 class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, vitae velit! Qui praesentium numquam ipsa, accusamus mollitia assumenda ipsum eius magnam commodi neque nobis odio id quia iure. Nobis nisi blanditiis quis porro numquam sed voluptatibus, unde mollitia magni at!</h1>
        </div>

    </div>
    <div class="modal-action">
      <form method="dialog">
      
          <button class="btn flex justify-center">Cancel</button>
        
      </form>
    </div>
  </div>

    `
    detailsContainer.appendChild(div)
    
}

const sendPetImg=(petimg)=>{
    const sendPetImgContainer=document.getElementById('send-pet-img');
    const div=document.createElement('div');
    div.innerHTML=`
    <div class="w-[130px] h-[90px]   mt-5 mr-3">
        <img class="w-full h-full rounded-xl" src="${petimg}" alt="">
      </div>

    `
   
    sendPetImgContainer.appendChild(div);

}


// categoryDog


const showDog=()=>{
  
  document.getElementById('pet-card-container').innerHTML=" ";
  document.getElementById('spinner-id').style.display='block';

  setTimeout(function(){
    categoryDog()
    document.getElementById('spinner-id').style.display='none'

  },3000)
}


const categoryDog=async()=>{

    const response= await fetch(`https://openapi.programming-hero.com/api/peddy/category/dog`)
    const data= await response.json();
    // displaDog(data)
    displayDog(data.data);

    
}


const displayDog=(pets)=>{
    document.getElementById('pet-card-container').innerHTML="";
    const PetCardContainer=document.getElementById('pet-card-container')
    pets.forEach(pet=>{
        const div=document.createElement('div');
        div.innerHTML=`
         <div class="w-[285px] h-[450px]  border-[3px] border-gray-500 mt-3 rounded-2xl p-4">
        <img class="h-[200px] w-full rounded-2xl " src="${pet.image}" alt="">
        <h1 class="pt-3 text-[20px] font-bold">${pet.pet_name}</h1>
        <div class="card-option ">

          <div class="flex gap-3 items-center mt-1">
            <img src="images/ci1.png" alt="">
        <h1 class="text-[16px] text-gray-500">Breed: ${pet.breed}</h1>
          </div>


          <div class="flex gap-3 items-center mt-1">
            <img src="images/ci2.png" alt="">
        <h1 class="text-[16px] text-gray-500">Birth: ${pet.date_of_birth}</h1>
          </div>


          <div class="flex gap-3 items-center mt-1">
            <img src="images/ci3.png" alt="">
        <h1 class="text-[16px] text-gray-500">Gender: ${pet.gender}</h1>
          </div>


          <div class="flex gap-3 items-center mt-1">
            <img src="images/ci4.png" alt="">
        <h1 class="text-[16px] text-gray-500">Price : ${pet.price}$</h1>
          </div>

          <hr class="border-1 border-gray-600 my-3">

          <div class="flex justify-between gap-2">
            <div class="border-2 border-gray-500 py-1 px-3 rounded-2xl flex justify-center items-center ">
              <button onclick="sendPetImg('${pet.image}')"><img src="images/ci5.png" alt=""></button>
            </div>


            <div class="border-2 border-gray-500 py-1 px-3 rounded-2xl flex justify-center items-center ">
              <button  onclick="showPopup()" class="font-bold text-[#0E7A81] text-[20px]">Adopt</button>
            </div>



            <div class="border-2 border-gray-500 py-1 px-3 rounded-2xl flex justify-center items-center ">
              <button onclick="my_modal_1.showModal()" class="font-bold text-[#0E7A81] text-[20px]">Details</button>
            </div>


          </div>

        </div>

      </div>  
        `
        PetCardContainer.appendChild(div);
    });

}


// category Cats

const showCat=()=>{
  
  document.getElementById('pet-card-container').innerHTML=" ";
  document.getElementById('spinner-id').style.display='block';

  setTimeout(function(){
    categoryCats()
    document.getElementById('spinner-id').style.display='none'

  },3000)
}

const categoryCats=async()=>{
    const response= await fetch(`https://openapi.programming-hero.com/api/peddy/category/cat`)
    const data= await response.json();
    // displaDog(data)
    displayCats(data.data);  
  
}



const displayCats=(pets)=>{
    document.getElementById('pet-card-container').innerHTML="";
    const PetCardContainer=document.getElementById('pet-card-container')
    pets.forEach(pet=>{
        const div=document.createElement('div');
        div.innerHTML=`
         <div class="w-[285px] h-[450px]  border-[3px] border-gray-500 mt-3 rounded-2xl p-4">
        <img class="h-[200px] w-full rounded-2xl " src="${pet.image}" alt="">
        <h1 class="pt-3 text-[20px] font-bold">${pet.pet_name}</h1>
        <div class="card-option ">

          <div class="flex gap-3 items-center mt-1">
            <img src="images/ci1.png" alt="">
        <h1 class="text-[16px] text-gray-500">Breed: ${pet.breed}</h1>
          </div>


          <div class="flex gap-3 items-center mt-1">
            <img src="images/ci2.png" alt="">
        <h1 class="text-[16px] text-gray-500">Birth: ${pet.date_of_birth}</h1>
          </div>


          <div class="flex gap-3 items-center mt-1">
            <img src="images/ci3.png" alt="">
        <h1 class="text-[16px] text-gray-500">Gender: ${pet.gender}</h1>
          </div>


          <div class="flex gap-3 items-center mt-1">
            <img src="images/ci4.png" alt="">
        <h1 class="text-[16px] text-gray-500">Price : ${pet.price}$</h1>
          </div>

          <hr class="border-1 border-gray-600 my-3">

          <div class="flex justify-between gap-2">
            <div class="border-2 border-gray-500 py-1 px-3 rounded-2xl flex justify-center items-center ">
              <button onclick="sendPetImg('${pet.image}')"><img src="images/ci5.png" alt=""></button>
            </div>


            <div class="border-2 border-gray-500 py-1 px-3 rounded-2xl flex justify-center items-center ">
              <button onclick="showPopup()" class="font-bold text-[#0E7A81] text-[20px]">Adopt</button>
            </div>



            <div class="border-2 border-gray-500 py-1 px-3 rounded-2xl flex justify-center items-center ">
              <button onclick="my_modal_1.showModal()" class="font-bold text-[#0E7A81] text-[20px]">Details</button>
            </div>


          </div>

        </div>

      </div>  
        `
        PetCardContainer.appendChild(div);
    });

}


// category Rabbits
const showRabbit=()=>{
  
  document.getElementById('pet-card-container').innerHTML=" ";
  document.getElementById('spinner-id').style.display='block';

  setTimeout(function(){
    categoryRabbits()
    document.getElementById('spinner-id').style.display='none'

  },3000)
}

const categoryRabbits=async()=>{
    const response= await fetch(`https://openapi.programming-hero.com/api/peddy/category/rabbit`)
    const data= await response.json();
    // displaDog(data)
    displayRabbits(data.data);
  
}


const displayRabbits=(pets)=>{
    document.getElementById('pet-card-container').innerHTML="";
    const PetCardContainer=document.getElementById('pet-card-container')
    pets.forEach(pet=>{
        const div=document.createElement('div');
        div.innerHTML=`
         <div class="w-[285px] h-[450px]  border-[3px] border-gray-500 mt-3 rounded-2xl p-4">
        <img class="h-[200px] w-full rounded-2xl " src="${pet.image}" alt="">
        <h1 class="pt-3 text-[20px] font-bold">${pet.pet_name}</h1>
        <div class="card-option ">

          <div class="flex gap-3 items-center mt-1">
            <img src="images/ci1.png" alt="">
        <h1 class="text-[16px] text-gray-500">Breed: ${pet.breed}</h1>
          </div>


          <div class="flex gap-3 items-center mt-1">
            <img src="images/ci2.png" alt="">
        <h1 class="text-[16px] text-gray-500">Birth: ${pet.date_of_birth}</h1>
          </div>


          <div class="flex gap-3 items-center mt-1">
            <img src="images/ci3.png" alt="">
        <h1 class="text-[16px] text-gray-500">Gender: ${pet.gender}</h1>
          </div>


          <div class="flex gap-3 items-center mt-1">
            <img src="images/ci4.png" alt="">
        <h1 class="text-[16px] text-gray-500">Price : ${pet.price}$</h1>
          </div>

          <hr class="border-1 border-gray-600 my-3">

          <div class="flex justify-between gap-2">
            <div class="border-2 border-gray-500 py-1 px-3 rounded-2xl flex justify-center items-center ">
              <button onclick="sendPetImg('${pet.image}')"><img src="images/ci5.png" alt=""></button>
            </div>


            <div class="border-2 border-gray-500 py-1 px-3 rounded-2xl flex justify-center items-center ">
              <button onclick="showPopup()" class="font-bold text-[#0E7A81] text-[20px]">Adopt</button>
            </div>



            <div class="border-2 border-gray-500 py-1 px-3 rounded-2xl flex justify-center items-center ">
              <button onclick="my_modal_1.showModal()" class="font-bold text-[#0E7A81] text-[20px]">Details</button>
            </div>


          </div>

        </div>

      </div>  
        `
        PetCardContainer.appendChild(div);
    });

}


// category bird
const showBirds=()=>{
  
  document.getElementById('pet-card-container').innerHTML=" ";
  document.getElementById('spinner-id').style.display='block';

  setTimeout(function(){
    categoryBirds()
    document.getElementById('spinner-id').style.display='none'

  },3000)
}

const categoryBirds=async()=>{
    const response= await fetch(`https://openapi.programming-hero.com/api/peddy/category/bird`)
    const data= await response.json();
    displayBirds(data.data);
    
    
}


const displayBirds=(data)=>{
    if(data==''){
     
        document.getElementById('pet-card-container').innerHTML=''
        const PetCardContainer= document.getElementById('pet-card-container')
        const div=document.createElement('div')
        div.innerHTML=`
         <div class="w-[900px] h-[500px]  flex flex-col justify-center items-center bg-gray-200 rounded-3xl">
    <img src="images/search.png" alt="">
    <h1 class="text-4xl font-bold py-5">No Information Available</h1>
    <p class="text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at <br> 
      its layout. The point of using Lorem Ipsum is that it has a.</p>
   </div>

        `
        PetCardContainer.appendChild(div);
    }
    else{
        console.log("na ami emty na")
    }
}




const sortByPrice= document.getElementById('sort-by-price')
sortByPrice.addEventListener('click',()=>{
    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    .then((response)=>response.json())
    .then((data)=>{
        const pets= data.pets;
        const high= pets.sort((a,b) => b.price-a.price) 
       

        // sart
        document.getElementById('pet-card-container').innerHTML="";
        const PetCardContainer=document.getElementById('pet-card-container')
        pets.forEach(high=>{
            const div=document.createElement('div');
            div.innerHTML=`
             <div class="w-[285px] h-[450px]  border-[3px] border-gray-500 mt-3 rounded-2xl p-4">
            <img class="h-[200px] w-full rounded-2xl " src="${high.image}" alt="">
            <h1 class="pt-3 text-[20px] font-bold">${high.pet_name}</h1>
            <div class="card-option ">
    
              <div class="flex gap-3 items-center mt-1">
                <img src="images/ci1.png" alt="">
            <h1 class="text-[16px] text-gray-500">Breed: ${high.breed}</h1>
              </div>
    
    
              <div class="flex gap-3 items-center mt-1">
                <img src="images/ci2.png" alt="">
            <h1 class="text-[16px] text-gray-500">Birth: ${high.date_of_birth}</h1>
              </div>
    
    
              <div class="flex gap-3 items-center mt-1">
                <img src="images/ci3.png" alt="">
            <h1 class="text-[16px] text-gray-500">Gender: ${high.gender}</h1>
              </div>
    
    
              <div class="flex gap-3 items-center mt-1">
                <img src="images/ci4.png" alt="">
            <h1 class="text-[16px] text-gray-500">Price : ${high.price}$</h1>
              </div>
    
              <hr class="border-1 border-gray-600 my-3">
    
              <div class="flex justify-between gap-2">
                <div class="border-2 border-gray-500 py-1 px-3 rounded-2xl flex justify-center items-center ">
                  <button onclick="sendPetImg('${high.image}')"><img src="images/ci5.png" alt=""></button>
                </div>
    
    
                <div class="border-2 border-gray-500 py-1 px-3 rounded-2xl flex justify-center items-center ">
                  <button class="font-bold text-[#0E7A81] text-[20px]">Adopt</button>
                </div>
    
    
    
                <div class="border-2 border-gray-500 py-1 px-3 rounded-2xl flex justify-center items-center ">
                  <button class="font-bold text-[#0E7A81] text-[20px]">Details</button>
                </div>
    
    
              </div>
    
            </div>
    
          </div>  
            `
            PetCardContainer.appendChild(div);
        });

        // end
    })
})




   
        function showPopup() {
            const popup = document.getElementById('popup1');
            const overlay = document.getElementById('overlay1');
            const adoptButton = document.getElementById('adoptButton');

           
            popup.style.display = 'block';
            overlay.style.display = 'block';
            
            let countdownValue = 3;
            const countdownElement = popup.querySelector('h1');
            countdownElement.textContent = countdownValue;

          
            const countdownInterval = setInterval(function() {
                countdownValue--;
                countdownElement.textContent = countdownValue;

                if (countdownValue <= 0) {
                  const adoptBtn= document.getElementById('adoptButton')
                  adoptBtn.style.color="white";
                 
                    clearInterval(countdownInterval);
                    popup.style.display = 'none';
                    overlay.style.display = 'none';
                    adoptButton.textContent = 'Adopted'; 
                    adoptButton.disabled = true; 
                }
            }, 1000);
        }


   

   
// Lodding

   

    
function showLoading() {
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');

 
  popup.style.display = 'block';
  overlay.style.display = 'block';

 
  setTimeout(function() {
      popup.style.display = 'none';
      overlay.style.display = 'none';
  }, 2000); 
}






    

