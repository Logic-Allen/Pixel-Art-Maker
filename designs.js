// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid() {
        document.getElementById('pixelCanvas').innerHTML = '';                   //Clear content in <table> by clicking submit button.
        //Create a new div for Grid.
        const newDiv = document.getElementById('pixelCanvas').appendChild(document.createElement('div'));
        newDiv.id = 'gridDiv';
        newDiv.style.display = 'inline-grid';
        newDiv.style.gap = '0';
        //Nest Loop for 'h' and 'w' of the grid and mark each single box.
        for(h=1 ; h<=document.querySelectorAll('input')[0].value ; h++){
            newDiv.appendChild(document.createElement('span'));
            newDiv.lastChild.id = 'span' + h;
            const gridSpan = document.getElementById('span'+h);
            gridSpan.style.height = '22px';
            for(w=1 ; w<=document.querySelectorAll('input')[1].value ; w++){
                gridSpan.innerHTML += '<canvas width="20" height="20" style="border:1px solid #000000;">\n'
                newDiv.lastChild.lastChild.id = 'canvas' + h + '.' + w;
            };
        };
    };



function handleForm(event) { event.preventDefault(); }                          //Make page unfresh after clicking on submit button.

function getColorCode(){return document.getElementById('colorPicker').value};


/* Main Code */
const submitButton = document.querySelectorAll('input')[2];                     //Set a global varible to submit button object.
submitButton.addEventListener('click', handleForm);                             //Call handleForm when clicking submit.
submitButton.addEventListener('click', makeGrid);                               //Call makeGrid when clicking submit.

//coloring the selected boxes.
document.getElementById('pixelCanvas').addEventListener('click', function(event){
    document.getElementById(event.target.id).style.backgroundColor = getColorCode();
});
