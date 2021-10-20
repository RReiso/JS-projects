const form = document.querySelector(".form-data");
const avatarName = document.querySelector(".avatar-name");
const newAvatar = document.querySelector(".new-avatar");

// results
const errors = document.querySelector(".errors");
const loading = document.querySelector(".loading");
const results = document.querySelector(".result-container");

form.addEventListener("submit", (e) => handleSubmit(e));

function handleSubmit(e) {
  e.preventDefault();
  generateAvatar(avatarName.value);
}

function generateAvatar(avatarName) {
  loading.style.display = "block";
  errors.textContent = "";
  //make call
  displayAvatar(avatarName);
}

async function displayAvatar(avatarName) {
  try {
    await fetch(`https://robohash.org/${avatarName}.png`).then((response) => {
      loading.style.display = "none";
      results.style.display = "block";
      newAvatar.src = response.url;
    });
  } catch (error) {
    console.log(error);
    loading.style.display = "none";
    results.style.display = "none";
    errors.textContent = "Sorry, could not load the avatar.";
  }
}
