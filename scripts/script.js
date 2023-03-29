document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = `https://tarot-api.onrender.com/api/v1/cards/random?n=1`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
    displayCard(data)

    })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function displayCard (data){
    console.log(data)
    document.querySelector('img').style.display = 'none'
    document.querySelector('h2').innerHTML = data.cards[0].name
    document.querySelector('p').innerHTML = `Meaning: ${data.cards[0].meaning_up}`
}
