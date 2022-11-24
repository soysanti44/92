 player1_name =localStorage.getItem("player1");
 player2_name =localStorage.getItem("player2");

 player1_score =0;
 player2_score =0;

 document.getElementById("player_name").innerHTML = player1_name;
 document.getElementById("player_name2").innerHTML = player2_name;

 document.getElementById("score").innerHTML = player1_score;
 document.getElementById("score2").innerHTML = player2_score;

 document.getElementById("player_question").innerHTML = "turno para preguntar "+ player1_name;
 document.getElementById("player_anser").innerHTML ="turno para responder "+ player2_name;

 function enviar() {
    palabra =document.getElementById("word").value;
    palabra2 =palabra.toLowerCase();
    posicion1 =palabra2.charAt(1);

    remplaza_posicion1 =palabra2.replace(posicion1,"_");
    console.log(remplaza_posicion1);

    letra_de_medio =Math.floor(palabra2.length/2);
    posicion_de_en_medio =palabra2.charAt(letra_de_medio)
    remplaza_posicion_de_medio =remplaza_posicion1.replace(posicion_de_en_medio,"_")
    console.log(remplaza_posicion_de_medio)
    
    letra_final =palabra2.length -1;
    posicion_final =palabra2.charAt(letra_final)
    remplazo_final =remplaza_posicion_de_medio.replace(posicion_final,"_")
    console.log(remplazo_final)
    question_word = "<h4 id='word_display'> P. "+remplazo_final+"</h4>";
    input_box = "<br>Respuesta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
    row =  question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
 }

question_turn ="player1";
answer_turn ="player2";

 function check() {
   get_answer =document.getElementById("input_check_box").value;
   answer =get_answer.toLowerCase();
   console.log("repuesta "+answer)
   if ( word == answer ) {
      if (answer_turn =="player1") {
         player1_score = player1_score + 1;
         document.getElementById("score").innerHTML =player1_score;
      }else {
         player2_score = player2_score + 1;
         document.getElementById("score2").innerHTML =player2_score;
      }
   }
   if (question_turn == "player1") {
      question_turn ="player2";
      document.getElementById("player_question").innerHTML ="turno para preguntar -"+ player2_name;
   }else {
      question_turn ="player1";
      document.getElementById("player_question").innerHTML ="turno para preguntar -"+ player1_name;
   }
   if (answer_turn == "player1") {
      answer_turn ="player2"
      document.getElementById("player_anser").innerHTML ="turno para responder -"+ player2_name;
   }else {
    answer_turn="player1";
    document.getElementById("player_anser").innerHTML ="turno para responder -"+ player1_name;
   }
   document.getElementById("output").innerHTML ="";
 }