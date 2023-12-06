function handleCheck(ele) {
  const id = ele.dataset.id;
  fetch(`/api/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON
    },
    body: JSON.stringify({ todo: { completed: ele.checked } }),
  })
    .then((res) => {
      if (!res.ok) {
        return res.json().then((errData) => {
          throw new Error(errData);
        });
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      alert(error);
    });
}

function handleSubmit() {
  const todoTitle = document.querySelector("#todo-title").value;
  const todoDescription = document.querySelector("#todo-description").value;

  if (!todoTitle || !todoDescription) return alert("Please enter a todo");
  fetch("/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      todo: {
        title: todoTitle,
        description: todoDescription,
      },
    }),
  })
    .then((res) => {
      if (!res.ok) {
        return res.json().then((errData) => {
          throw new Error(errData);
        });
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      window.location.reload();
    });
}

function handleRemove(event) {
  const id = event.target.id;
  fetch(`/api/todos/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        return res.json().then((errData) => {
          throw new Error(errData);
        });
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      window.location.reload();
    });
}

function handleUpdate(event) {
  const todoId = event.target.id.split("-")[1];
  event.target.style.display ="none";
  const submitButton = document.querySelector(`#submit-${todoId}`)
  const cancelButton = document.querySelector(`#cancel-${todoId}`)

  submitButton.style.display = "inline";
  cancelButton.style.display = "inline";

  // hide title and description and display inputs
  const todoLabel = event.target.parentNode.parentNode;
  for(child of todoLabel.children) {
    if(child.tagName.toLowerCase() === "h3" || child.tagName.toLowerCase() === "p") {
      child.style.display = "none";
    }
    if(child.tagName.toLowerCase() === "input") {
      child.style.display = "block";
    }
  }
}

function handleSubmitUpdate(event) {
  const todoId = event.target.id.split("-")[1];
  const titleUpdateInput = document.querySelector(`#title-${todoId}`);
  const descriptiopnUpdateInput = document.querySelector(`#description-${todoId}`);
  fetch(`/api/todos/${todoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON
    },
    body: JSON.stringify({ todo: { title: titleUpdateInput.value, description: descriptiopnUpdateInput.value } }),
  })
    .then((res) => {
      if (!res.ok) {
        return res.json().then((errData) => {
          console.log(errData);
          throw new Error(errData);
        });
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      window.location.reload();
    })
    .catch((error) => {
      alert(error);
    });
}

function handleCancelUpdate(event) {
  const todoId = event.target.id.split("-")[1];
  console.log(todoId);
  const checkLabel = event.target.parentNode.parentNode;
  let currTitle;
  let currDescription;
  for(let child of checkLabel.children) {
    if(child.tagName.toLowerCase() === "h3") {
      currTitle = child.innerText;
    }
    if(child.tagName.toLowerCase() === "p") {
      currDescription = child.innerText;
    }
  }
  for(let child of checkLabel.children) {
    if(child.tagName.toLowerCase() === "input") {
      if(child.name.startsWith("title")) {
        child.value = currTitle;
      }
      if(child.name.startsWith("description")) {
        child.value = currDescription;
      }
      child.style.display = "none";
    } else if(child.tagName.toLowerCase() === "h3" || child.tagName.toLowerCase() === "p") {
      child.style.display = "block";
    }
  }
  
  const submitButton = document.querySelector(`#submit-${todoId}`);
  const updateButton = document.querySelector(`#update-${todoId}`);
  submitButton.style.display = "none";
  updateButton.style.display = "inline-block";
  event.target.style.display = "none";
}

document
  .querySelector("#todo-title")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  });
