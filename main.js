console.log("Written to fetch users data from Github");
let listArr = [];
const container = document.getElementById('mainUsers');

async function fetchData(){
    const response =  await fetch("https://api.github.com/users");
    const data = await response.json();
    for(i=0;i<data.length;i++){
        // console.log(data[i].login);

        
        // const card = document.createElement('card');
        // card.setAttribute('class','card');
        // const h1 = document.createElement('h1');
        // h1.textContent = data[i].login;
        // const avatar = document.createElement('img');
        // avatar.src = data[i].avatar_url;
        // const button = document.createElement('button');
        // button.textContent = "Add to cart";
        // container.appendChild(card);
        // card.appendChild(h1);
        // card.appendChild(avatar);
        // card.appendChild(button);   

        // const loginData = data[i].login;

        // document.querySelector('button').addEventListener('click', ()=>{
        //     console.log(data[i].login)
        // })

        document.getElementById('mainUsers').insertAdjacentHTML("afterbegin",
        `<div class="card"><img src="${data[i].avatar_url}"> <h5 class="login">${data[i].login}</h5><button class='add' type='submit'>Add Users</button></div>`);
  
  //add users to cart
        const loginData = data[i].login;
        const avatarUrl = data[i].avatar_url;
        document.querySelector('button.add').addEventListener('click', ()=>{
           // console.log(loginData);
            var newList = listArr.push(loginData);
            var avatarUrls = listArr.push(avatarUrl);
          //  console.log(listArr);
            localStorage.setItem('users', listArr);
        })
    }
}
fetchData();

    document.getElementById("cartButton").onclick = function () {
        location.href = "cartPage.html";
    };


