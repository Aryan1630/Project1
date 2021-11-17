//cart page
const addedUsers = document.getElementById('addedUsers');
const removeButton = document.getElementsByClassName('remove');
console.log(removeButton);

function getUsersList(){
    var users = [localStorage.getItem('users')];
    // console.log(users);
    var coupledUsers = users.match(/([0-9]+ [A-z]+, [0-9]+)/g);
      console.log(coupledUsers);
    var arrayLength = users.length;

    for(i=0;i<arrayLength;i++){
     var usersList = users[i];
      var splittedUsers = usersList.split(',');
       var names = splittedUsers.filter(function(val,idx) {
          if(idx%2==0)
            return val;
        })
       var userImages = splittedUsers.filter(function(val,idx) {
          if(!(idx%2==0))
            return val;
    }) 
        for(i=0;i<names.length&&userImages;i++){
            document.getElementById('addedUsers').insertAdjacentHTML('afterbegin', `<div class="card"><img src="${userImages[i]}"> <h5 class="login">${names[i]}</h5><button class="remove" type='submit'>Remove button</button></div>`)
      
      }

      
      
}
}
getUsersList();
console.log(removeButton.length);


