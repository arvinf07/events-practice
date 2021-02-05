

document.addEventListener('DOMContentLoaded', function() {
  fetchDogs()
});

const dogBtn = document.querySelector(`[data-name='dog']`)
const catBtn = document.querySelector(`[data-name='cat']`)

const dogContainer = document.getElementById('dog-container')


function fetchDogs(){
  dogBtn.addEventListener('click', function(e){
    fetch('https://random.dog/woof.json')
    .then(resp => resp.json())
    .then(json => dogs(json))
  });
}

function fetchFacts()

function dogs(json){
  const img = document.createElement('img')
  img.src = json.url
  img.width = 500
  img.height = 500
  dogContainer.appendChild(img)
}
