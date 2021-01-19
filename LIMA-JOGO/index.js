function verifica_resposta() {
    let respostas = new Array(10);
    respostas[0]= document.getElementById("alternativa2").checked
    respostas[1]= document.getElementById("alternativa8").checked
    respostas[2]= document.getElementById("alternativa10").checked
    respostas[3]= document.getElementById("alternativa15").checked
    respostas[4]= document.getElementById("alternativa19").checked
    respostas[5]= document.getElementById("alternativa24").checked
    respostas[6]= document.getElementById("alternativa28").checked
    respostas[7]= document.getElementById("alternativa32").checked
    respostas[8]= document.getElementById("alternativa33").checked
    respostas[9]= document.getElementById("alternativa38").checked
    

let score = new Array(10);
let pontuacao;


    if(respostas[0] == true ){
        score[0] = 100;
         document.getElementById("resposta01").textContent = "✔️"
       
      }
      else{
        score[0] = 0;
        document.getElementById("resposta01").textContent = "✖️"
      }
      
    if(respostas[1] == true ){
        score[1] = 100;
         document.getElementById("resposta02").textContent = "✔️"
       
      }
      else{
        score[1] = 0;
        document.getElementById("resposta02").textContent = "✖️"
      }

      if(respostas[2] == true ){
        score[2] = 100;
         document.getElementById("resposta03").textContent = "✔️"
       
      }
      else{
        score[2] = 0;
        document.getElementById("resposta03").textContent = "✖️"
      }

      if(respostas[3] == true ){
        score[3] = 100;
         document.getElementById("resposta04").textContent = "✔️"
       
      }
      else{
        score[3] = 0;
        document.getElementById("resposta04").textContent = "✖️"
      }

      if(respostas[4] == true ){
        score[4] = 100;
         document.getElementById("resposta05").textContent = "✔️"
       
      }
      else{
        score[4] = 0;
        document.getElementById("resposta05").textContent = "✖️"
      }

      if(respostas[5] == true ){
        score[5] = 100;
         document.getElementById("resposta06").textContent = "✔️"
       
      }
      else{
        score[5] = 0;
        document.getElementById("resposta06").textContent = "✖️"
      }

      if(respostas[6] == true ){
        score[6] = 100;
         document.getElementById("resposta07").textContent = "✔️"
       
      }
      else{
        score[6] = 0;
        document.getElementById("resposta07").textContent = "✖️"
      }

      if(respostas[7] == true ){
        score[7] = 100;
         document.getElementById("resposta08").textContent = "✔️"
       
      }
      else{
        score[7] = 0;
        document.getElementById("resposta08").textContent = "✖️"
      }

      if(respostas[8] == true ){
        score[8] = 100;
         document.getElementById("resposta09").textContent = "✔️"
       
      }
      else{
        score[8] = 0;
        document.getElementById("resposta09").textContent = "✖️"
      }

      if(respostas[9] == true ){
        score[9] = 100;
         document.getElementById("resposta10").textContent = "✔️"
       
      }
      else{
        score[9] = 0;
        document.getElementById("resposta10").textContent = "✖️"
      }

      pontuacao = score[0] + score[1] + score[2] + score[3] + score[4] + score[5]+ score[6]+ score[7]+ score[8]+ score[9] ;
      localStorage.setItem("pontuacao", pontuacao)
      let a = localStorage.getItem("pontuacao");

      if(localStorage.getItem("pontuacao") > a) {

        document.getElementById("saida_score").textContent = localStorage.getItem("pontuacao") + " de 1000"
        document.textContent("saida_recorde").textContent = localStorage.getItem("pontuacao")
      }
      else{
      
        document.getElementById("saida_score").textContent = localStorage.getItem("pontuacao") + " de 1000"
        document.getElementById("saida_recorde").textContent = a;
      }
      
}
