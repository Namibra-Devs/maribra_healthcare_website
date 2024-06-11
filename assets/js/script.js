// Activate Navs----------------------
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.navbar .btn');

    buttons.forEach(button => {
      button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });

  // Slider------------------------------
  let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto-slide every 3 seconds
setInterval(() => {
    nextSlide();
}, 3000);

// Modal----------------
<script>
document.getElementById('openModalBtn').addEventListener('click', function () {
    var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
        keyboard: false
    });
    myModal.show();
});
</script>