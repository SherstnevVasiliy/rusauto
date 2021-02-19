const countBasket = () => {
    const basket = JSON.parse(localStorage.getItem('basket') || '[]')
    if (!localStorage.getItem('basket')) {
        return 0
    } else {
    return (
        basket.map((elem:any) => elem.itemCount).reduce((sum:any, current:any) => sum + current)
    )}
}
export default countBasket