// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, possimus fugiat nobis ullam ad, suscipit repellat odio iusto ex explicabo, fugit harum? Autem, officiis quam. Exercitationem quibusdam nulla corrupti molestiae magnam eius ipsum",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Praesentium explicabo inventore molestias, quo voluptas autem cumque aperiam iste magnam natus assumenda optio non illum quod minima blanditiis dolorum recusandae laudantium. Illo doloremque distinctio",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Quaerat fugit, recusandae aliquam minima ullam ut! Nulla eum corrupti architecto nam nisi laboriosam sint ducimus. Aut dolore repellat, tempora reiciendis totam error atque cupiditate voluptate quam quibusdam",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Expedita magni modi incidunt. Soluta cumque sunt deleniti in eum. Dicta eaque asperiores consequuntur voluptatibus esse nam similique facilis iste ipsum delectus. Libero optio voluptate praesentium sed minus expedita enim distinctio repudiandae vitae",
  },
];

// select nav elements
const navLinks = document.querySelector(".links");
const navToggleBtn = document.querySelector(".nav-toggle");

// nav menu toggle
navToggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show-links");
});

// select review info
const img = document.querySelector("#person-img");
const author = document.querySelector(".author");
const job = document.querySelector(".job-title");
const info = document.querySelector(".info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentReviewIndex = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
  showPersonReview(currentReviewIndex);
});

// show info based on index
const showPersonReview = (reviewIndex) => {
  const review = reviews[reviewIndex];
  img.src = review.img;
  author.innerText = review.name;
  job.innerText = review.job;
  info.innerText = review.text;
};

// show previous review
prevBtn.addEventListener("click", () => {
  currentReviewIndex--;
  if (currentReviewIndex < 0) {
    currentReviewIndex = reviews.length - 1;
  }
  showPersonReview(currentReviewIndex);
});
// show next review
nextBtn.addEventListener("click", () => {
  currentReviewIndex++;
  if (currentReviewIndex > reviews.length - 1) {
    currentReviewIndex = 0;
  }
  showPersonReview(currentReviewIndex);
});
// show random review
randomBtn.addEventListener("click", () => {
  randomNum = Math.floor(Math.random() * reviews.length);
  showPersonReview(randomNum);
});
