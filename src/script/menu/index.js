const renderMenuDesktop = (menu) => {
    const $containerMenu = document.querySelector('.menu-wrapper')

    let structureMenu = ''

    menu.map((department) => {
        if(department.children === undefined){
            structureMenu += `
                <div class='header__menu--wrapper'>
                    <a href=${department.url} class='menu-item'>${department.name}</a>
                </div>`
        } else{
            structureMenu += `
                <div class='header__menu--wrapper'>
                    <a href=${department.url} class='menu-item'>${department.name}</a>
                        <div class='header__menu--items'>
                            ${department.children.map((category) => {
                                if(category.children === undefined){
                                    return `<a href=${category.url}>${category.name}`
                                } else{
                                    return `<a href=${category.url}>${category.name}
                                    <div class='header__menu--sub-item'>
                                    ${category.children.map((subcategory) => {
                                        return `<a href=${subcategory.url}>${subcategory.name}`
                                    })}`
                                }
                            })}
                        </div>
                </div>`
        }
       
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