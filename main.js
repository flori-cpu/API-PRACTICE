const button = document.querySelector("button");
const breedInput = document.querySelector("input");
const imageDiv = document.querySelector("#imageDiv");

button.addEventListener('click', async () => {
  // extract the user input
  let breed = breedInput.value.toLowerCase(); // Convert to lowercase to avoid case issues

  try {
    // Send the request to the API
    let response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
    console.log(response.data.message); // Logs the image URL in the console
    let dogPic = response.data.message;

    // Display the dog image inside the div
    imageDiv.innerHTML = `<img src="${dogPic}" alt="Dog image" style="max-width: 100%; height: auto;">`;
  } catch (error) {
    console.error('Error fetching the image:', error);
    imageDiv.innerHTML = `<p style="color: red;">Failed to fetch dog image. Please check the breed name and try again.</p>`;
  }
});
