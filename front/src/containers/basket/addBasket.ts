const setItemBasket = (props: any) => {
    
    const {idItem, name, price} = props
    let basket = []
    if (localStorage.getItem('basket')) {
        basket = JSON.parse(localStorage.getItem('basket') || '[]')
        const index = basket.findIndex((elem:any) => elem.idItem === idItem)
        if (index >= 0) {
            basket[index].itemCount = basket[index].itemCount + 1;
            localStorage.setItem('basket', JSON.stringify(basket))
        } else {
         
        basket.push({idItem, name, price, itemCount: 1})
        localStorage.setItem('basket', JSON.stringify(basket))}


        } else {
            const newBasket = [{idItem, name, price, itemCount: 1}]
            localStorage.setItem('basket', JSON.stringify(newBasket))
        }
}

export default setItemBasket