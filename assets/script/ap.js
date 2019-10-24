$(document).ready(function () {

    let nbateams = ["Celtics", "Lakers", "Clippers", "Pelicans", "Rockets"];
    let btndiv = $('#btndiv')
    console.log(nbateams);

    for (i = 0; i < nbateams.length; i++) {
        let buttons = $('<button>' + nbateams[i] + '<button>');
        $('#btndiv').append(buttons);
    }
    // create buttons for each team in the array
    // create a forloop that renders the buttons in the html div of buttons
    // create objects for each important element in the html
    //
})