function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a imagem
  const img = document.querySelector("#profile img")

  //substituir imagem
  if (html.classList.contains("light")) {
    //se tiver lightmode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem, manter a imagem normal
    img.setAttribute("src", "./assets/AvatarMusashi.png")
  }

  //substituit o alt
  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Reformed Torfinho")
  } else {
    img.setAttribute("alt", "Musashi Galudão")
  }
}
