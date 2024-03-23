


function join_game() {
    let join_code = document.getElementById("join_inp").value.toUpperCase();
    if (join_code.length == 6) {
        console.log(join_code);
        //TODO koble til et spill
    }
}

function create_game() {
    let join_code = generate_ID();
    //TODO lag spill i databasen (firebase?)
    window.location.href = "/game.html?game="+join_code; 
}



function generate_ID() {
    const DATA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let new_id = "";
    for (let i = 0; i < 6; i++) {
        new_id += DATA[Math.floor(Math.random() * DATA.length)];
    }

    return new_id;
}



function create_playerboxes() {
    
}
