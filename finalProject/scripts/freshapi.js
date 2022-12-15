// API call to retrieve data for the select options
fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
  .then((response) => response.json())
  .then((data) => {
    // Create the select element
    const select = document.createElement('select');

    // Loop through the data and create an option element for each item
    data.forEach((item) => {
      const option = document.createElement('option');
      option.value = item.value;
      option.text = item.text;
      select.appendChild(option);
    });

    // Append the select element to the page
    document.body.appendChild(select);
  });
