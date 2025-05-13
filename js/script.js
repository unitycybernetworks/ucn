        function toggleMenu() {
            var menu = document.getElementById('menu');
            menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
        }

        document.getElementById('services').addEventListener('click', function() {
            var dropdown = document.getElementById('dropdown');
            dropdown.style.display = dropdown.style.display === 'none' || dropdown.style.display === '' ? 'block' : 'none';
        });

        document.addEventListener('click', function(event) {
            var services = document.getElementById('services');
            var dropdown = document.getElementById('dropdown');
            if (!services.contains(event.target) && !dropdown.contains(event.target)) {
                dropdown.style.display = 'none';
            }
        });