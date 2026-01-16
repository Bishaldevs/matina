function updateTimer() {
  // SET YOUR DATE HERE: Year, Month (0-11), Day, Hour, Minute
  // Note: January is 0, February is 1, etc.
  const startDate = new Date(2025, 09, 06, 3,136	
, 188184, 11,291,040	
); 
  const now = new Date();
  
  const diff = now - startDate; // Difference in milliseconds

  // Calculate time units
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Display results
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

// Update the clock every 1 second
setInterval(updateTimer, 1000);
updateTimer(); // Run once immediately