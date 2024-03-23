
function join_game() {
    let join_code = document.getElementById("join_inp").value.toUpperCase();
    let name = document.getElementById("name_inp").value;
    if (join_code.length == 6 && name != "") {
        console.log(join_code);
        //TODO koble til et spill
    }
}



function create_game() {
    let name = document.getElementById("name_inp").value;
    if (name != "") {
        let join_code = generate_ID();
        //TODO lag spill i databasen og legg inn spilleren med navn (firebase?) (+ pass på at ikke flere spillere har samme navn)
        window.location.href = "/game.html?game="+join_code+",name="+name; 
    }
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
    let container_html = document.getElementById("playerboxes");
    container_html.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        //TODO legg til klassen "is_me" om spilleren er denne brukeren

        container_html.innerHTML += `
        <div class="playerbox br_20">
            <button class="icon">...</button>
            <div class="shown_cards">

            </div>
            <div class="name_and_amount">
                <h5>NAVN</h5>
                <div>
                    <img src="" alt="" />
                    <span>#</span>
                </div>
            </div>
            <div class="last_played">
                <img src="" alt="">
            </div>
        </div>
        `;
    }
}
