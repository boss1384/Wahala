da01d7158a60be461c607c6d31470b4e
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('desertVideo');
  
  video.addEventListener('error', () => {
    console.error("Video failed to load. Check if sahara-desert.mp4 exists.");
    alert("Video file not found. Make sure your video is named 'sahara-desert.mp4' and in the same folder.");
  });
});
