import { API } from '../../network/instances'

export const registration = async (firstName:string, lastName:string, login:string, email:string, password:string) => {
    
    try {
        const response = await API.post('auth/registration', {
            firstName,
            lastName,
            login,
            email,
            password
        })
            if (response.data.error) {
                alert(`${response.data.error}, УПС....`)
            } else {
            alert(`${response.data.login}, регистрация прошла успешно`)
            }
    } catch (err) {
            alert(`${err} беда случилась!`)
        }
}

export const loginFunc = async (login:string, password:string) => {

    try {
        const response = await API.post('auth/login', {
            login,
            password
        })
            if (response.data.error) {
                alert(response.data.error);
            } else {
            localStorage.setItem('token', response.data.data.token);
            return response.data
        }
     

        } catch (err) {
            alert(`УПС....`);
            const response = {data:{error: 'Error to nerwork'}}
            return response.data
        }
}

export const logoutFunc = async (token:string) => {

    try {
        const response = await API.get(`auth/logout/{token}`, {
            params : {
                token
            },
            headers: {
            Authorization: `Bearer ${token}`
            }
        })
            if (response.data.error) {
                localStorage.clear()
                alert(response.data.error);
            } else {
                localStorage.clear()
                return response.data
        }
     

        } catch (err) {
            localStorage.clear()
            alert(`УПС....`);
            const response = {data:{error: 'Error to nerwork'}}
            return response.data
        }
}

export const placeOrder = async (token:string, basket:string) => {
    
    try {
        const response = await API.post('order', {
            token,
            basket
        })
            if (response.data.error) {
                alert(`${response.data.error}...`)
            } else {
            alert(`Заказ №${response.data.orderId} успешно оформлен`)
            localStorage.removeItem('basket')
            localStorage.setItem('lastOrder', response.data.orderId)
            }
    } catch (err) {
            alert(`${err} сервер не отвечает, попробуйте позже...`)
        }
}
