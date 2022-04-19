// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

  
  const heartBtns = document.querySelectorAll(".like-glyph")
  heartBtns.forEach(heartBtn => heartBtn.addEventListener('click', e => handleHeart(heartBtn)))
 

 function handleHeart(heartBtn){
    mimicServerCall()
    .then( () => {
    
      if(heartBtn.textContent === EMPTY_HEART){
        heartBtn.classList.add('activated-heart')
        heartBtn.innerHTML = FULL_HEART
      }
      else{
        heartBtn.classList.remove('activated-heart')
        heartBtn.innerHTML = EMPTY_HEART
      }
    })
  
    .catch( errorMsg => {
    const error= document.getElementById('modal')
    error.classList.remove('hidden')
    p = document.getElementById('modal-message')
    p.innerText = `${errorMsg}`
    error.append(p)

    setTimeout(() =>{
      const err= document.getElementById('modal')
      err.classList.add('hidden')
    }, 3000)
    })
  }

  handleHeart()

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
