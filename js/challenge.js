document.addEventListener("DOMContentLoaded", function () {
  let counter = document.getElementById("counter");
  let plusButton = document.getElementById("plus");
  let minusButton = document.getElementById("minus");
  let heartButton = document.getElementById("heart");
  let pauseButton = document.getElementById("pause");
  let likesList = document.querySelector(".likes");
  let commentForm = document.getElementById("comment-form");
  let commentInput = document.getElementById("comment-input");
  let commentList = document.getElementById("list");

  let isPaused = false;
  let timer;

  // Function to increment the counter
  plusButton.addEventListener("click", function () {
    counter.innerText = parseInt(counter.innerText) + 1;
  });

  // Function to decrement the counter
  minusButton.addEventListener("click", function () {
    counter.innerText = parseInt(counter.innerText) - 1;
  });

  // Function to "like" the current counter value
  heartButton.addEventListener("click", function () {
    let currentCount = counter.innerText;
    let existingLike = document.getElementById(`like-${currentCount}`);

    if (existingLike) {
      existingLike.dataset.likes++;
      existingLike.innerText = `${currentCount} has ${existingLike.dataset.likes} likes`;
    } else {
      let newLike = document.createElement("li");
      newLike.id = `like-${currentCount}`;
      newLike.dataset.likes = 1;
      newLike.innerText = `${currentCount} has 1 like`;
      likesList.appendChild(newLike);
    }
  });

  // Function to pause/resume the timer
  pauseButton.addEventListener("click", function () {
    if (!isPaused) {
      clearInterval(timer);
      isPaused = true;
      pauseButton.innerText = "resume";
      plusButton.disabled = true;
      minusButton.disabled = true;
      heartButton.disabled = true;
    } else {
      timer = setInterval(incrementCounter, 1000);
      isPaused = false;
      pauseButton.innerText = "pause";
      plusButton.disabled = false;
      minusButton.disabled = false;
      heartButton.disabled = false;
    }
  });

  // Function to handle form submission for comments
  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let commentText = commentInput.value;
    if (commentText.trim() !== "") {
      let commentElement = document.createElement("p");
      commentElement.innerText = commentText;
      commentList.appendChild(commentElement);
      commentInput.value = "";
    }
  });

  // Function to increment the counter every second
  function incrementCounter() {
    counter.innerText = parseInt(counter.innerText) + 1;
  }

  // Timer functionality starts immediately
  timer = setInterval(incrementCounter, 1000);
});
