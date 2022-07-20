//setting date
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function () {
  //manualmente linksContainer.classList.toggle('show-links')
  //dinamicamente

  const containerHeight = linksContainer.getBoundingClientRect().height
  // Element.getBoundingClientRect() metodo retorna o tamanho de um elemento e sua posição emr relação a viewport
  //console.log(containerHeight)
  const linksHeight = links.getBoundingClientRect().height
  //console.log(linksHeight)
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`
  } else {
    linksContainer.style.height = 0
  }
})

// ********** fixed navbar ************
const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')
window.addEventListener('scroll', function () {
  //console.log(window.pageYOffset)
  // pageYOffset retorna o numero de pixels que o documento rolou verticalmente
  const scrollHeight = window.pageYOffset
  const navHeight = navbar.getBoundingClientRect().height

  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav')
  } else {
    navbar.classList.remove('fixed-nav')
  }
  if (scrollHeight > 500) {
    topLink.classList.add('show-link')
  } else {
    topLink.classList.remove('show-link')
  }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    //prevent default
    e.preventDefault()
    //navigate to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1)
    //console.log(id)
    const element = document.getElementById(id)
    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height
    const containerHeight = linksContainer.getBoundingClientRect().height

    const fixedNav = navbar.classList.contains('fixed-nav')
    let position = element.offsetTop - navHeight
    //offsetTop - retorna um numero representando a posição do elemento em pixels
    if (!fixedNav) {
      position -= navHeight
    }
    if (navHeight > 82) {
      position += containerHeight
    }
    //console.log(position)
    window.scrollTo({ left: 0, top: position })
    linksContainer.style.height = 0
  })
})
