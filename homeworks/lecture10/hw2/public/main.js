function handleCheck(ele) {
    const id = ele.dataset.id;
    fetch(`/todos/${id}`, {
      method: 'PUT'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }

function handleSubmit() {
    const description = document.querySelector('#todo').value;
    if (!description) return alert('Please enter a todo');
    fetch('/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ description })
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
  