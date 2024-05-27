
const servicesItems  = document.querySelectorAll('.services__item')

const clearItems = () => {
    servicesItems.forEach(item => {
    item.classList.remove('item-service_active')
})
}

servicesItems.forEach(item => {
    item.addEventListener('click', () => {
        clearItems()
        item.classList.add('item-service_active')
})
})