const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold our state
const items = [];

function handleSubmit(e) {
  e.preventDefault();
  console.log('submitted!!');
  const name = e.currentTarget.item.value;
  // if its empty then dont submit it
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
 list.dispatchEvent(new CustomEvent('itemsUpdated'));
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

function mirrorToLocalStorage() {
  console.info('saving items to localstorage');
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  console.info('Restoring from localStorage');
  // pull the items from local storage
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    //itmes = lsItems;
    // lsItems.forEach(item => items.push(item));
    // items.push(lsiTEMS[0]);
    items.push(...lsItems); // as push takes unlimited arguments
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

// ready for event delegation 
function deleteItem(id) {
  console.log('DELETING ITEM');
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);

list.addEventListener('itemsUpdated', mirrorToLocalStorage);

restoreFromLocalStorage();
