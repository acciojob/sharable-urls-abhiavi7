// your code here
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form with JS Manipulation</title>
</head>
<body>

  <form id="myForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <br>

    <label for="year">Year:</label>
    <input type="number" id="year" name="year" required>

    <br>

    <input type="submit" id="button" value="Submit">
  </form>

  <h3 id="url">https://localhost:8080/</h3>

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

</body>
</html>