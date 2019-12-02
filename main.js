$ (document).ready (function () {
    // SOLUZIONE UTILIZZANDO HTML E JAVASCRIPT
    // $ (".casella").click (function () {
    //     if ($(this).hasClass("nave")) {
    //         $ (this).addClass ("rosso");
    //     } else {
    //         $ (this).addClass ("verde");
    //     }
    // });



    // SOLUZIONE UTILIZZANDO SOLO JAVASCRIPT
    var naviIndex = [];

    do {
        // genero un numero random tra 1 e 64 che corrisponderà all'indice della nave
        var indexRandom = (naveRandom(1, 64));
        // se il numero generato non è già stato inserito nell'array naviIndex allora lo inserisco
        if (!naviIndex.includes(indexRandom)) {
            naviIndex.push (indexRandom);
        }
        // continuo ad inserire elementi finchè non ho generato 15 numeri random tra loro diversi
    } while (naviIndex.length < 15)

    console.log("Questi sono gli indici random delle navi: " + naviIndex);

    var casellaAcqua = '<div class="casella"></div>';
    var casellaNave = '<div class="casella nave"></div>';

    for (var i = 1; i <= 64; i++) {
        // se la i che sto ciclando corrisponde a un naviIndex
        if (naviIndex.includes (i)) {
            // aggiungo una casellaNave
            $ ("#scacchiera").append (casellaNave);
        } else {
            // altrimenti aggiungo una casellaAcqua
            $ ("#scacchiera").append (casellaAcqua);
        }
    }

    $ (".casella").click (function () {
        // se la casella sulla quale clicco è una nave
        if ($ (this).hasClass("nave")) {
            // aggiungo la classe rosso
            $ (this).addClass ("rosso");
        } else {
            // altrimenti, se non è una nave, aggiungo la classe verde
            $ (this).addClass ("verde");
        }
    });




    function naveRandom (min, max) {
        return Math.floor(Math.random () * max-min + 1) + min;
    }


});
