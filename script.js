function updateCountdown() {
  const now = new Date();
  const day = now.getUTCDay(); // 0 = Sunday
  const hour = now.getUTCHours();
  
  // Find next Friday 8 PM MT (8 PM MST = 3 AM UTC)
  let nextFriday = new Date(now);
  nextFriday.setUTCDate(now.getUTCDate() + ((5 - day + 7) % 7));
  nextFriday.setUTCHours(3, 0, 0, 0);
  
  const diff = nextFriday - now;
  
  if (diff <= 0) {
    document.getElementById('countdown').innerText = "Happening Now!";
    return;
  }

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const minutes = Math.floor((diff / (1000*60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('countdown').innerText = 
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
