const list = document.querySelector('#book-list ul');

// Delete an Item
list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
})

// Add an item
const form = document.forms['add-book'];
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not refresh the page;
    let bookName = form.querySelector('input[type = "text"]').value;
    
    const li = document.createElement('li');
    const name = document.createElement('span');
    const delBtn = document.createElement('span');
    name.classList.add('name');
    delBtn.classList.add('delete');
    name.textContent = bookName;
    delBtn.textContent = 'delete';
    li.appendChild(name);
    li.appendChild(delBtn);
    list.appendChild(li);
    bookName = '';
})

// Hide all books
form.addEventListener('change', (e) => {
  if(e.target.checked){
    list.style.display = "none";
  }
  else{
    list.style.display = "initial";
  }
})

// Custom Search filter
const searchForm = document.forms['search-books'].querySelector('input');
searchForm.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li')    ;
    Array.from(books).forEach((book) => {
      const title = book.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(term) != -1){
          book.style.display = 'block';
      }
      else{
        book.style.display = 'none';
      }
    })
})