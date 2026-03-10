const addForm = forms('add-movie');
addForm.addEventListener('submit', function(e)
{
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const moviename = document.createElement('span');
    const deletebtn = document.createElement('span');

    moviename.textContent = value;
    deletebtn.textContent = 'delete';

    moviename.classList.add('name');
    deletebtn.classList.add('delete');

    li.appendChild(moviename);
    li.appendChild(deletebtn);

    list.appendChild(li);
})
    