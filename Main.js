 //var selecionarCampus = document.getElementById('selecionar_campus');

const selecionarCampus = document.querySelector('.selecionar_campus');
const fundoBordo = document.querySelector('.fundo_Bordo');

selecionarCampus.addEventListener('change', (event) => {
   console.log(event.target.value);
   if (event.target.value === 'vassouras') {
       // window.location.href = '../Pages/Campus_vassouras.html';
        fundoBordo.classList.add('fundo_bordo--desabilitado');
        console.log('vassouras');
   } else if (event.target.value === 'marica') {
        window.location.href = '../Pages/Campus_marica.html';
    } else if (event.target.value === 'saquarema') {
        window.location.href = '../Pages/Campus_saquarema.html';
    
   }
})

 
