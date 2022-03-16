const userId = document.getElementById('userId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');

const database = firebase.database();
const rootRef = database.ref('users');

//addBtn button to add user's information
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //automatic userId Generator
    const autoId = rootRef.push().key
    rootRef.child(autoId).set({
        first_name: firstName.value,
        last_name: lastName.value,
        age: age.value,
    });
})

//updateBtn button to update user's information
updateBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    const newData = {
        age: age.value,
        first_name: firstName.value,
        last_name: lastName.value,
        // This displays the user's full name : 
        full_name: firstName.value + ' ' + lastName.value
    };
    const updates = {};
    updates['/users/' + userId.value] =newData;
    updates['/super-users/'+ userId.value] = newData;
    database.ref().update(updates);
    // rootRef.child(userId.value).update(newData);  : It updates the user's info normally
});


//removeBtn button to delete user's information
removeBtn.addEventListener('click', e => {
    e.preventDefault();
   rootRef.child(userId.value).remove()
   database.ref('/super-users').child(userId.value).remove();


});
