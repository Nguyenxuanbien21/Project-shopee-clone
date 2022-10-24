const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const loginButton = $('.form__login-register-btn')



loginButton.addEventListener('click', () => {
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString)

  const ref = urlParams.get('ref')
  if (ref) {
    window.location.href = ref
  }

})

function handleClickPassWordChange() {
  const btnShowPassWord = $('.form-group-password-show')
  const btnHidePassWord = $('.form-group-password-hide')
  const inputPassWord = $('.form-control-password')

  btnShowPassWord.addEventListener('click', () => {
    btnShowPassWord.style.display = 'none'
    btnHidePassWord.style.display = 'block'
    inputPassWord.type = 'text'
  })

  btnHidePassWord.addEventListener('click', () => {
    btnHidePassWord.style.display = 'none'
    btnShowPassWord.style.display = 'block'
    inputPassWord.type = 'password'
  })
}

handleClickPassWordChange()
