const viewPassword = document.getElementById('viewPassword')
const passwordInput = document.getElementById('passwordInput')
const usernameInput = document.getElementById('usernameInput')
const loginBtn = document.getElementById('loginBtn')

viewPassword.addEventListener('click', () => {
  const actualType = passwordInput.getAttribute('type')
  if (actualType == 'password') {
    passwordInput.setAttribute('type', 'text')
  } else {
    passwordInput.setAttribute('type', 'password')
  }
})

const users = [
  {
    username: 'bauti',
    password: 'bauti'
  },
  {
    username: 'santi',
    password: 'santi'
  }
]

loginBtn.addEventListener('click', (event) => {
  event.preventDefault()

  const usernameValue = usernameInput.value
  const passwordValue = passwordInput.value

  const user = users.find((user) => user.username == usernameValue && user.password == passwordValue)

  if (user) {
    alert('Login correcto')
    localStorage.setItem('isLogged', true)
    window.location.href = 'index.html';    
  }
  else {
    usernameInput.value = ''
    passwordInput.value = ''
    alert('Login incorrecto')
  }
})

if (localStorage.getItem('isLogged')) {
  const form = document.getElementById('loginForm')
  form.innerHTML = `<button id="logout">Logout<button>
        <a href="../index.html">
        <i class="bi bi-arrow-left"></i> Back
      </a>`

  const logoutBtn = document.getElementById('logout')
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isLogged')
    window.location.href = '../login.html'
  })
}

