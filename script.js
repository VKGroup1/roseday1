// Play/Pause music functionality
const music = document.getElementById('music');
const playPauseBtn = document.querySelector('.play-pause-btn');

playPauseBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    playPauseBtn.textContent = 'Pause Music';
  } else {
    music.pause();
    playPauseBtn.textContent = 'Play Music';
  }
});

// Surprise message functionality
document.querySelector('.show-message-btn').addEventListener('click', () => {
  const message = "You are the love of my life. Forever and always.";
  alert(message);
});

// Particles.js customization for background particles
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ff4081"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#ffffff"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.1,
        "opacity_min": 0.1
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.1
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    }
  },
  "retina_detect": true
});
