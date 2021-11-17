const addedUsers = document.getElementById('addedUsers');

function getAddedUsersList(){
    var users = localStorage.getItem('users');
    
    let arrUsersSplit = users.split(',');
    console.log(arrUsersSplit);
}

getAddedUsersList();