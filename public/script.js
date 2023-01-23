document.addEventListener("DOMContentLoaded", () => {
  const date = new Date();
  const dateObject = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
  const formattedDate = dateObject.day + "/" + dateObject.month + "/" + dateObject.year;
  document.querySelector("#date").textContent += formattedDate;
});
