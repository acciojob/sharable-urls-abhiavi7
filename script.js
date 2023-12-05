<script>
    document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault();

      // Get values from the form
      var name = document.getElementById('name').value;
      var year = document.getElementById('year').value;

      // Update the h3 element with the new URL
      var urlElement = document.getElementById('url');
      urlElement.textContent = 'https://localhost:8080/?name=' + encodeURIComponent(name) + '&year=' + encodeURIComponent(year);
    });
  </script>