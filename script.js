   // JavaScript to toggle accordion content
   const headers = document.querySelectorAll('.accordion-header');

   headers.forEach(header => {
       header.addEventListener('click', () => {
           const content = header.nextElementSibling;
           const isOpen = content.style.display === 'block';

           // Close all accordion content
           document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');

           // Toggle current
           content.style.display = isOpen ? 'none' : 'block';
       });
   });

   function toggleMenu() {
       const menu = document.getElementById('mobileMenu');
       menu.classList.toggle('show');
   }


   function scrolldiv(id) {
       var elem = document.getElementById(id);
       elem.scrollIntoView({
           behavior: 'smooth',
           block: 'start'
       });

       // Close mobile menu if screen is small
       const menu = document.getElementById('mobileMenu');
       if (window.innerWidth <= 768) {
           menu.classList.remove('show');
       }
   }


   // ========================================
   // Hurley-Hayes Reunion Countdown
   // ========================================

   const reunionDate = new Date("2027-07-15T00:00:00-04:00").getTime();

   function updateCountdown() {
       const now = new Date().getTime();
       const distance = reunionDate - now;

       // Event has started
       if (distance <= 0) {
           document.getElementById("days").textContent = "00";
           document.getElementById("hours").textContent = "00";
           document.getElementById("minutes").textContent = "00";
           document.getElementById("seconds").textContent = "00";
           return;
       }

       // Calculate time remaining
       const days = Math.floor(distance / (1000 * 60 * 60 * 24));

       const hours = Math.floor(
           (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
       );

       const minutes = Math.floor(
           (distance % (1000 * 60 * 60)) / (1000 * 60)
       );

       const seconds = Math.floor(
           (distance % (1000 * 60)) / 1000
       );

       // Update the page
       document.getElementById("days").textContent =
           String(days).padStart(2, "0");

       document.getElementById("hours").textContent =
           String(hours).padStart(2, "0");

       document.getElementById("minutes").textContent =
           String(minutes).padStart(2, "0");

       document.getElementById("seconds").textContent =
           String(seconds).padStart(2, "0");
   }

   // Run immediately
   updateCountdown();

   // Update every second
   setInterval(updateCountdown, 1000);