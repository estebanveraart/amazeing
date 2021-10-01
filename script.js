const LEVEL_1 = [
    ["*","*","*","*","*","*","*","*","*","*","*",".","*"],
    ["*","S",".",".",".",".",".","*","*",".","*",".","T"],
    ["*","*","*","*","*",".",".",".",".",".","*",".","*"],
    ["*","*","*","*","*",".","*","*","*",".","*",".","*"],
    ["*","*","*","*","*",".","*","*","*","*","*",".","*"],
    ["*","*","*","*","*",".","*","*","*","*","*",".","*"],
    ["*","*","*","*","*",".",".",".",".",".",".",".","*"],
    ["*","*","*","*","*",".","*","*","*","*","*","*","*"],
    ["*",".",".",".",".",".",".",".",".",".","*","*","*"],
    ["*",".","*","*","*","*","*","*",".",".",".","*","*"],
    ["*",".",".",".",".","*","*","*","*","*","*","*","*"],
    ["*","*","*","*","*","*","*","*","*","*","*","*","*"]
]

let positionX = 0;
let positionY = 0;
let main = document.querySelector('main');

for (let i=0; i<LEVEL_1.length; i++) {

    let ligne = LEVEL_1[i];
    let lignDiv = document.createElement('div');
    lignDiv.className = 'ligne';

    for (j=0; j<ligne.length; j++) {
        
        let collone = ligne[j];
        let salle = document.createElement('div');
        salle.classList.add('zone');

        if(collone === "*"){

            salle.classList.add("mur");

        }

        if(collone === "."){

            salle.classList.add("chemin");

        }

        if(collone === "S"){

            salle.classList.add("position");
            positionX = j
            positionY = i

        }

        if(collone === "T"){

            salle.classList.add("tresor")

        }

        lignDiv.appendChild(salle);

    }

    main.appendChild(lignDiv);

}

let zones = document.querySelectorAll(".zone");

document.addEventListener('keydown', e => {

    if(e.key === 'ArrowLeft') {
        
        positionX --;

    }

    if(e.key === 'ArrowRight') {
        
        positionX ++;

    }

    if(e.key === 'ArrowUp'){

        positionY --;

    }

    if(e.key === 'ArrowDown'){

        positionY ++;

    }

    zones[positionY * 13 + positionX].classList.add('joueur');

})



