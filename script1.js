const myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
  
  // Get temperature input value
  const temp = document.getElementById("temp").value;
  
  // Get the selected radio button
  const celsius = document.getElementById("celsius").checked;
  const fahrenheit = document.getElementById("fahrenheit").checked;
  
  // Check if Celsius is selected
  if (celsius) {
    let fah = (temp * 1.8) + 32;
    alert("Temperature is = " + fah + " Fahrenheit");
  }
  
  // Check if Fahrenheit is selected
  if (fahrenheit) {
    let cel = (temp - 32) * 5/9; // Corrected conversion formula
    alert("Temperature is = " + cel + " Celsius");
  }
});