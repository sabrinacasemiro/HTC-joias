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
                        <div class='header__menu--items ${department.children.some(item => item.children) && 'header__menu--items-children'}'>
                            ${department.children.reduce((acc, category) => {
                                if(category.children === undefined){
                                    return acc + `<a href=${category.url} class='header__menu--item-category'>${category.name}</a>`
                                } else{
                                    return acc + `
                                    <div class='header__menu--items-wrapper'>
                                    <a href=${category.url} class='header__menu--item-category'>${category.name}</a>
                                    <div class='header__menu--sub-item'>
                                    ${category.children.reduce((acc, subcategory) => {
                                        return acc + `<a href=${subcategory.url} class='header__menu--item-sub-category'>${subcategory.name} </a>`
                                    }, '')}
                                    </div>
                                    </div>`
                                }
                            }, '')}
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