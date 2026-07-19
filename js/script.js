///seleção dom 
///console.log(document)

const menu = document.querySelector('.menu');
const btnMenu = document.querySelector('.btn-menu');
const links = document.querySelectorAll('.menu a'); //selecionando todos o links do menu 

console.log(links);
//console.log(menu);
//console.log(btnMenu);

function manipularMenu(){
  //  alert('função acionada');

    menu.classList.toggle('menu-show'); //toggle ajuda, alternar a adc e remove para ver o menu abrir e fechar //
    btnMenu.classList.toggle('x'); 
}


function removerMenu(){
    menu.classList.remove('menu-show');
    btnMenu.classList.remove('x');
}

//event listener (monitoramento )
btnMenu.addEventListener('click',manipularMenu);
//menu.addEventListener('click', removerMenu);


//for(i=0 ; i>4;i++){
//links[i].addEventListener('click',removerMenu);
//}

//para cada item da lista 

links.forEach(function(item){
   item.addEventListener('click', removerMenu); 
});