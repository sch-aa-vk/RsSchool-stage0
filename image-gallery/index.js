const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid')[0];
const box = document.getElementsByClassName('search-box');

input.addEventListener('keydown', function(ev){
    if(ev.key === 'Enter') {
        loadImg();
    }
})

function loadImg() {
    removeImg();

    const url = 'https:/api.unsplash.com/search/photos/?query='+input.value+'&per_page=9&orientation=landscape&client_id=iW8k0-lLZq7T6O-HVj1O1XI2aiX-Y0qf3cQxWSe-hbc';

    fetch(url)

    .then(responce =>{
        if(responce.ok){
            return responce.json();
        } else{
            alert(responce.status);
        }
    })

    .then(data =>{
        const imageNodes = [];
        for(let i = 0; i < data.results.length; i++) {
            imageNodes[i] = document.createElement('div');
            imageNodes[i].className = 'img';
            imageNodes[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
            imageNodes[i].addEventListener('dblclick', function(){
                window.open(data.results[i].links.download, '_blank');
            })
            grid.appendChild(imageNodes[i]);
        }
    })
}

function removeImg() {
    grid.innerHTML = '';
}