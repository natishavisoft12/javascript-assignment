// JavaScript file: app.js

const output = document.getElementById("output");

// JSON file paths
const jsonFiles = [
  "data1.json", // Ensure these JSON files exist
  "data2.json",
  "data3.json",
];

// Utility function to update output
function displayOutput(data) {
  output.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

// 1. Button 1: Fetch using .then()
document.getElementById("btn1").addEventListener("click", () => {
  fetch("data1.json") // Replace with the actual path to your JSON file
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      displayOutput(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      output.textContent = "Error fetching data!";
    });
});

// 2. Button 2: Fetch using async/await
document.getElementById("btn2").addEventListener("click", async () => {
  try {
    const response = await fetch("data2.json"); // Replace with the actual path to your JSON file
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    displayOutput(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    output.textContent = "Error fetching data!";
  }
});

// 3. Button 3: Fetch using Promise.all()
document.getElementById("btn3").addEventListener("click", () => {
  Promise.all(
    jsonFiles.map((file) =>
      fetch(file).then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${file}`);
        }
        return response.json();
      })
    )
  )
    .then((dataArray) => {
      const combinedData = dataArray.reduce(
        (acc, curr, index) => ({
          ...acc,
          [`File ${index + 1}`]: curr,
        }),
        {}
      );
      displayOutput(combinedData);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      output.textContent = "Error fetching data!";
    });
});
