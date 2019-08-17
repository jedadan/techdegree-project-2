/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

// Global variables
const studentList = document.querySelectorAll(".student-item");
const studentsPerPage = 10;
const page = document.querySelector(".page");

// Determines how many items appear on page
const showPage = (list, page) => {
  const startIndex = page * studentsPerPage - studentsPerPage;
  const endIndex = page * studentsPerPage - 1;
  for (let i = 0; i < list.length; i += 1) {
    if (i >= startIndex && i <= endIndex) {
      list[i].style.display = "block";
    } else {
      list[i].style.display = "none";
    }
  }
};

// Creates buttons for additional pages
const appendPageLinks = list => {
  const pagination = document.createElement("div");
  pagination.className = "pagination";
  page.appendChild(pagination);
  const ul = document.createElement("ul");
  pagination.appendChild(ul);

  for (let i = 0; i < list.length / studentsPerPage; i += 1) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = i + 1;
    a.classList.remove("active");
    if (i === 0) {
      a.className = "active";
    }
    li.appendChild(a);
    ul.appendChild(li);
  }

  // Functionality to navigate to additional pages and show which page is active
  const as = document.querySelectorAll("a");

  for (let i = 0; i < as.length; i += 1) {
    as[i].addEventListener("click", e => {
      showPage(list, e.target.textContent);
      for (let i = 0; i < as.length; i += 1) {
        as[i].classList.remove("active");
      }
      e.target.className = "active";
    });
  }
};

// Call functions to display 10 students per page and create buttons for additional pages
showPage(studentList, 1);
appendPageLinks(studentList);
