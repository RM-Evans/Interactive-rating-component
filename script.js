let selectRank = document.querySelectorAll('.rank-btn')
// querySelectorAll not working when I have a single element
let btnSubmit = document.querySelector('.submit-btn')

// get rank then assign text to state
const userSubmit = () => {
  userSelectedRank()
  switchModals()
}
const switchModals = () => {
  let rateModal = document.querySelector('.rate-modal-container')
  let thanksModal = document.querySelector('.thank-you-modal-container')
  //hide first modal then show the second
  rateModal.classList.add('hide-modal')
  thanksModal.classList.add('show-modal')
}

// get innerhtml of selected rank
const userSelectedRank = () => {
  let selectRankToDisplay = document.querySelectorAll('.rank-btn')

  for (let i = 0; i < selectRankToDisplay.length; i++) {
    if (selectRankToDisplay[i].classList.contains('rank-btn-selected')) {
      let rankSelected = selectRankToDisplay[i].innerHTML
      document.querySelector('#submitted-rank').innerHTML = rankSelected
    }
  }
}

// ** remove and add class to the rank buttons

const removeActiveClass = () => {
  for (const selectRankItem of selectRank) {
    selectRankItem.classList.remove('rank-btn-selected')
  }
}

const handleRankClass = () => {
  for (let i = 0; i < selectRank.length; i++) {
    selectRank[i].addEventListener('click', function () {
      removeActiveClass()
      selectRank[i].classList.add('rank-btn-selected')
    })
  }
}

handleRankClass()

// **

btnSubmit.addEventListener('click', function () {
  let containsRank = document.querySelector('.rank-btn-selected') != null
  // make sure a rank is selected
  if (containsRank) {
    userSubmit()
  }
})
