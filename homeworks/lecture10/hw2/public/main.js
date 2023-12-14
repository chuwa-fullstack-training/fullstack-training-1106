function handleDelete(ele) {
  const id = ele.dataset.id;
  fetch(`/api/todos/${id}`, {
    method: 'DELETE'
  })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(data => {
      console.log(data);
      window.location.reload();
    });
}

function handleCheck(ele) {
  const id = ele.dataset.id;
  //console.log(ele.checked);
  console.log(`In handle check: id = ${id}`);
  fetch(`/api/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ done: ele.checked })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}

function handleSubmit() {
  const todo = document.querySelector('#todo').value;
  if (!todo) return alert('Please enter a todo');
  fetch('/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: todo })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      window.location.reload();
    });
}

document.querySelector('#todo').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    handleSubmit();
  }
});
