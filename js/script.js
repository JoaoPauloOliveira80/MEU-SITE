console.log('funcionando')

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 100 * i)

  });
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);


var som = document.getElementById("som")
function mouseOver(){
 // som.play()
 if(audio.pause){
    som.play()
  }else{
    som.pause()
  }
  
  
  
  
  
}

/* 
var som = $("#som")[0]
$(".globo")
.mouseenter(function(){
  som.pause()
  som.currentTime = 0
 
  som.play()
  
});*/

/*
var som = document.getElementById("som")

$("globo").mouseover(function(){
  som.pause()
  som.currentTime = 0
  som.play()
})*/