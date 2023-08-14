const currentDateTime = new Date();
console.log(currentDateTime);

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1; // Month is zero-based, so we add 1
const day = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log(`Current date: ${month}/${day}/${year}`);
console.log(`Current time: ${hours}:${minutes}:${seconds}`);

// We can also use the toLocaleString() method to format the date and time
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true
};
const formattedDateTime = now.toLocaleString('en-US', options);

console.log(`Formatted date and time: ${formattedDateTime}`);

// compare dates
const date1 = new Date(2023, 0, 15);
const date2 = new Date(2023, 2, 5);

if (date1 < date2) {
  console.log('date1 is before date2');
} else if (date1 > date2) {
  console.log('date1 is after date2');
} else {
  console.log('date1 and date2 are the same');
}

// calculate the difference between two dates
const startDate = new Date(2023, 0, 1);
const endDate = new Date(2023, 2, 15);

const timeDifference = endDate - startDate;
const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

console.log(`Number of days between the two dates: ${daysDifference}`);
