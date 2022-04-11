let selectRank = document.querySelectorAll('.rank-btn')

let btnSubmit = document.querySelectorAll('.submit-btn')
console.log(btnSubmit)
let rankSelected = 0

// get rank then assign text to state
const userSubmit = () => {
  userSelectedRank()
  // ! not correct
  document.querySelector('#submitted-rank').textContent = rankSelected
}

// get innerhtml of selected rank
const userSelectedRank = () => {
  for (let i = 0; i < selectRank.length; i++) {
    if (selectRank[i].classList.contains('.rank-btn-selected')) {
      // ! not correct
      let rankSelected = selectRank.innerHTML
      return console.log(rankSelected)
    }
  }
}

// ** remove and add class to the rank buttons

const removeActiveClass = () => {
  for (const selectRankItem of selectRank) {
    selectRankItem.classList.remove('rank-btn-selected')
  }
}

for (let i = 0; i < selectRank.length; i++) {
  selectRank[i].addEventListener('click', function () {
    removeActiveClass()
    selectRank[i].classList.add('rank-btn-selected')
    console.log(rankSelected)
  })
}

// **

btnSubmit.addEventListener('click', userSubmit())
