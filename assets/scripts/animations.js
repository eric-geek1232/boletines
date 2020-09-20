window.addEventListener('load', init, false);

function init() {
    const links = document.querySelectorAll('.link');

    //recorrido de selectoresAll
    links.forEach(function(link){
        link.addEventListener('click', changePage, false);
    });
}

function changePage(event){
    event.preventDefault();
    let content = document.getElementById('content');

    content.classList.remove('animate__animated');
    content.classList.remove('animate__fadeInLeft');

    content.classList.add('animate__animated');
    content.classList.add('animate__fadeOutLeft');

    if(this.classList.contains("actions")){
        setTimeout(function(){
            location.href = "../index.html";
        }, 600);
    } else {
        setTimeout(function(){
            location.href = "./bars/crudelia.html";
        }, 600);
    }
}