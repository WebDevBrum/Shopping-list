const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold our state
const items = [];

function handleSubmit(e) {
  e.preventDefault();
  console.log('submitted!!');
  const name = e.currentTarget.item.value;
 const item = {
   name: name,
   id: Date.now(),
   complete: false
 };
 // Push the items into our state
 items.push(item);
 console.log(`There are now ${items.length} in your state`);
}

shoppingForm.addEventListener('submit', handleSubmit);