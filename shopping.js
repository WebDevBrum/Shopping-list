const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold our state
const items = [];

function handleSubmit(e) {
  e.preventDefault();
  console.log('submitted!!');
  const name = e.currentTarget.item.value;
 const item = {
   name,
   id: Date.now(),
   complete: false
 };
 // Push the items into our state
 items.push(item);
 console.log(`There are now ${items.length} in your state`);
 // clear the form
//  e.currentTarget.item.value = '';
 e.target.reset(); // note use of target instaed of current target
 displayItems();
}

function displayItems() {
  const html = items.map(item => { 
    return `<li>${item.name}</li>`
  })
  console.log(html);
}

shoppingForm.addEventListener('submit', handleSubmit);