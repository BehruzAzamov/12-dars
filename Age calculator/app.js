function isValidDate(day, month, year) {
  let date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

function calculateAge() {
  let day = parseInt(document.getElementById("day").value);
  let month = parseInt(document.getElementById("month").value);
  let year = parseInt(document.getElementById("year").value);

  if (!isValidDate(day, month, year)) {
    let inputs = document.querySelectorAll("input");
    let labels = document.querySelectorAll("label");
    inputs.forEach((input) => {
      input.style.borderColor = "red";
    });
    labels.forEach((label) => {
      label.classList.add("error");
    });
    let placeholder = document.querySelectorAll("h6");
    placeholder.forEach((each) => {
      each.classList.remove("hidden");
    });
    return;
  }

  let currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();

  let ageYear = currentYear - year;
  let ageMonth = currentMonth - month;
  let ageDay = currentDay - day;

  if (ageDay < 0) {
    ageMonth--;
    let daysInPreviousMonth = new Date(
      currentYear,
      currentMonth - 1,
      0
    ).getDate();
    ageDay += daysInPreviousMonth;
  }

  if (ageMonth < 0 || (ageMonth === 0 && currentDay < day)) {
    ageYear--;
    ageMonth += 12;
  }

  if (month === 2) {
    let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    if (isLeapYear && day > 29) {
      let inputs = document.querySelectorAll("input");
      let labels = document.querySelectorAll("label");
      inputs.forEach((input) => {
        input.style.borderColor = "red";
      });
      labels.forEach((label) => {
        label.classList.add("error");
      });
      let p = document.querySelectorAll("p");
      p.forEach((each) => {
        each.classList.remove("hidden");
      });
      return;
    } else if (!isLeapYear && day > 28) {
      let labels = document.querySelectorAll("label");
      const errorDay = document.getElementById("error-day");
      errorDay.classList.remove("hidden");
      let placeholder = document.querySelectorAll("h6");
      let p = document.querySelectorAll("p");
      p.forEach((each) => {
        each.classList.remove("hidden");
      });
      placeholder.forEach((each) => {
        each.classList.add("hidden");
      });
      labels.forEach((label) => {
        label.classList.add("error");
      });

      return;
    }
  }

  let p = document.querySelectorAll("p");
  let labels = document.querySelectorAll("label");
  p.forEach((each) => {
    each.classList.add("hidden");
  });
  let placeholder = document.querySelectorAll("h6");
  let inputs = document.querySelectorAll("input");
  placeholder.forEach((each) => {
    each.classList.add("hidden");
  });
  labels.forEach(function (label) {
    label.classList.remove("error");

    label.innerHTML = label.innerHTML.split("<br>")[0];
  });

  const old = document.getElementById("old");
  const months = document.getElementById("months");
  const days = document.getElementById("days");
  old.textContent = ageYear;
  months.textContent = ageMonth;
  days.textContent = ageDay;
  inputs.forEach((input) => {
    input.style.borderColor = "";
  });
}

function isValidDate(day, month, year) {
  let date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

