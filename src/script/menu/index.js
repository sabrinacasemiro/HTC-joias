const renderMenuDesktop = (menu) => {
    const $containerMenu = document.querySelector('.menu-wrapper')

    let structureMenu = ''

    menu.map((department) => {
        structureMenu += `
        <a href=${department.url}>${department.name}</a>`
    })

    $containerMenu.innerHTML = structureMenu
}

const requestMenuDesktop = () => {
const menu = []

fetch('./src/script/menu/menu.json')
    .then((response) => response.json())
    .then((json) => {
         renderMenuDesktop(json.menu)
     })

}

requestMenuDesktop()