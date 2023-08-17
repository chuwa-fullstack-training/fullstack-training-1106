// Callback hell example
function getUser(callback) {
  setTimeout(() => {
    const data = { name: 'John', age: 30 };
    callback(data);
  }, 1000);
}

function checkOrder(data, callback) {
  setTimeout(() => {
    data.orderId = 12345;
    callback(data);
  }, 1000);
}

function getDiscount(data, callback) {
  setTimeout(() => {
    data.discount = 0.1;
    callback(data);
  }, 1000);
}

function sendConfirmation(data, callback) {
  setTimeout(() => {
    data.isConfirmed = true;
    callback(data);
  }, 1000);
}

function displayData(data) {
  console.log(data);
}

getUser(data => {
  checkOrder(data, data => {
    getDiscount(data, data => {
      sendConfirmation(data, data => {
        displayData(data);
      });
    });
  });
});
