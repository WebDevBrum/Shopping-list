const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold our state
const items = [];

function handleSubmit(e) {
  e.preventDefault();
  console.log('submitted!!');
  const name = e.currentTarget.item.value;
  // if its emepty then dont submit it
  if (!name) return; // alternative would be to add required to html

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
 // displayItems(); instead of this we are now going to fire off a custom event that will tell anyone who cares that the items have been updated.
 list.dispatchEvent(new CustomEvent('ItemsUpdated'));
}

function displayItems() {
  const html = items
    .map(item => `<li class="shopping-item">
    <input type="checkbox">
    <span class="itemName">${item.name}</span>
    <button aria-label="Remove">&times</button>
  </li>`)
    .join('');
  list.innerHTML = html;
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('ItemsUpdated', displayItems);