let types = [
'WRITER', 
'ENTREPRENEUR', 
'MUSICIAN', 
'MARKETER', 
'DAD', 
'PARTNER',
'SONGWRITER',
'COOK',
'TRAVELER',
'READER',
'THINKER',
'PUNK ROCKER'
];

//When the header button is clicked, empty the text,
//Pick a random index from the 'types' array
//Load that random index in to the button text


function changeButton() {
    $('.headerbutton').on('click', function(event){
        let type = types[Math.floor(Math.random()*types.length)];
        $('.headerbutton').html(type);
    });
};

changeButton();