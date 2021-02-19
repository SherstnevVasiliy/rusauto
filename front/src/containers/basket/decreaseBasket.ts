const decreaseBasket = (props: any) => {
    
    const {idItem} = props
    let basket = []
    if (localStorage.getItem('basket')) {
        basket = JSON.parse(localStorage.getItem('basket') || '[]')
        const index = basket.findIndex((elem:any) => elem.idItem === idItem)
        if (basket[index].itemCount > 1) {
            basket[index].itemCount = basket[index].itemCount - 1;
            localStorage.setItem('basket', JSON.stringify(basket))
        } else
        
        if (basket[index].itemCount === 1 && basket.length > 1) {
            basket.filter((item:any) => item.idItem !== idItem)
            localStorage.setItem('basket', JSON.stringify(basket.filter((item:any) => item.idItem !== idItem)))
        } else
        if (index === 0 && basket[index].itemCount === 1 && basket.length === 1) {
            localStorage.removeItem('basket')
        }
    } 
}

export default decreaseBasket