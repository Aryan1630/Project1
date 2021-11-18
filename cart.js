//cart page
let div = document.getElementById('addedUsers');
var users = localStorage.getItem('names');
var images = localStorage.getItem('images');


let diffUsers = users.split(',')
let diffImages = images.split(',');
function displayUsers(){
    if(users && images){
 
    for(i=0;i<diffUsers.length && diffImages.length; i++){
        console.log(diffUsers[i] + " " + diffImages[i]);
        div.insertAdjacentHTML('afterbegin', `<div class="card"><img src="${diffImages[i]}"> <h5 class="login">${diffUsers[i]}</h5><button class="remove" type='submit'>Remove button</button></div>`);
        
    }
    
}
else{
    div.insertAdjacentHTML('afterbegin', `<button class="listingPage">Back to the list Page</button>`);
    document.querySelector('.listingPage').addEventListener('click',()=>{
        location.href = "index.html";
    })
}
}


displayUsers();
function remove(){


    
    let removeAll=document.querySelectorAll('.remove');
 
    removeAll.forEach((e,i)=>{
        e.addEventListener('click',()=>{
            console.log('clicked');
          let imgSRC= e.parentElement.firstElementChild.getAttribute('src');
            console.log(imgSRC);
            diffUsers.splice(diffImages.indexOf(imgSRC),1);
            diffImages.splice(diffImages.indexOf(imgSRC),1);
            localStorage.setItem("names",diffUsers);
            localStorage.setItem("images", diffImages);
            location.reload();
        });

    })
}
remove();
