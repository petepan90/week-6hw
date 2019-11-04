$(document).ready(function () {
    var submitbtn = document.getElementById('#submitbtn');
    var nbateams = ["Celtics", "Lakers", "Clippers", "Pelicans", "Rockets", "Bulls"];
    var btndiv = document.getElementById('btndiv');
    var giphy = document.getElementById('giphy');
    var button = document.getElementsByTagName('buttons')

    for (var i in nbateams) {
        let buttons = document.createElement("BUTTON");
        buttons.innerHTML = nbateams[i];
        buttons.setAttribute('value', nbateams[i])
        buttons.setAttribute('class', 'teams')
        // let image = document.createElement('img').setAttribute('src', response[i].url);
        btndiv.appendChild(buttons);
    }

    // sample URL uses generic API key, do NOT reuse the exact URL below
    // sample URL:  http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=dogs

    // Use string interpolation to generate URL
    // Create an onClick function to generate GIFs when a Team button is clicked
    // submitbtn.on('click', function () {
    //     submitbtn = $('#submitbtn');

    //     query = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=gIbzoZrKwfvM9leO6LBC3nya5niS262d&limit=10"
    //     console.log(this);
    // })
    input;
    $('button').on('click', function () {
        team = $(this).val().trim();

        query = "https://api.giphy.com/v1/gifs/search?q=" + team + "&api_key=gIbzoZrKwfvM9leO6LBC3nya5niS262d&limit=10"

        console.log(query);

        // Make AJAX call within onClick function to the button value clicked
        //Manipulate HTML within AJAX call
        // Call the Teams class for the onClick

        // Set onClick function to the Teams button class
        // In the onClick function, set the button value to a variable
        // In the AJAX call, pass the button value variable to the buildQueryURL function
        $.ajax({
            // 'value' passed to buildQueryURL should actually be the clicked button's value
            // IE-- if you click on Celtics, it should pass the value 'Celtics' to the buildQueryURL
            url: query,
            method: 'GET'
        }).then(res => {
            var results = res.data;
            console.log(results);

            // console.log(response);
            for (let i = 0; i < results.length; i++) {
                let image = $('<img>');
                image.attr('src', results[i].images.fixed_height.url);

                let newdiv = $('<div>');
                newdiv.append(image);

                $('#giphy').prepend(newdiv);
            }
        })

    })

    $('#submitbtn').on('click', function () {
        (
            input = $('#input-style').val().trim());
        query = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=gIbzoZrKwfvM9leO6LBC3nya5niS262d&limit=10"
        console.log(this);

        $.ajax({
            url: query,
            method: 'GET'
        }).then()
    })

    // create buttons for each team in the array
    // create a forloop that renders the buttons in the html div of buttons
    // create objects for each important element in the html
    // create onclick function for each button that renders a giphy api
    // add atributes too buttons for onclick function?
    // 

});