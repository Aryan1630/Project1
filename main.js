
function sleepFor(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ 
        /* Do nothing */ 
    }
}
function sleepThenAct(){
    sleepFor(2000);
    fetchData();
}
sleepThenAct();

console.log("Written to fetch users data from Github");
let userNames = [];
let userImages = [];
const container = document.getElementById('mainUsers');

async function fetchData(){
    const response =  await fetch("https://api.github.com/users");
    const data = await response.json();
    for(i=0;i<data.length;i++){
        document.getElementById('mainUsers').insertAdjacentHTML("afterbegin",
        `<div class="card"><img src="${data[i].avatar_url}"> <h5 class="login">${data[i].login}</h5><button class='add' type='submit'>Add Users</button></div>`);
        const loginData = document.querySelector('h5').innerHTML;
        const avatarUrl = document.querySelector('img').getAttribute('src');
        //console.log(loginData + " " + avatarUrl);
        document.querySelector('button.add').addEventListener('click',()=>{
            userNames.push(loginData);
            userImages.push(avatarUrl);
            localStorage.setItem('names', userNames);
            localStorage.setItem('images', userImages);
        })
        


    }
}
fetchData();


    document.getElementById("cartButton").onclick = function () {
        location.href = "cartPage.html";
    };
