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