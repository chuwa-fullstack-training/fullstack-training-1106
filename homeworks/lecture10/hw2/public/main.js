function handleCheck(ele) {
  const id = ele.dataset.id;
  const doneStatus = ele.checked;
  fetch(`/api/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ done: doneStatus }),
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}

function handleSubmit(tmp) {
  const todo = document.querySelector('#todo').value;
  if (!todo) return alert('Please enter a todo');
  fetch('/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ todo })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      window.location.reload();
    });
}
function handleDelete() {
  const checkedBoxes = document.querySelectorAll('.todo-checkbox:checked');
  // Map over these checkboxes to get their 'data-id' values
  const idsToDelete = Array.from(checkedBoxes).map(cb => cb.dataset.id);
  // Make a DELETE request to your server
  fetch('/api/delete-todos', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ids: idsToDelete }),
  })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        window.location.reload();
      })
      .catch(error => console.error('Error:', error));
}


document.querySelector('#todo').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    handleSubmit();
  }
});
