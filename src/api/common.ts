import apiRequest from "."

const contactUs = async (data:any) => await apiRequest('POST', 'contact-us', data)

export {
    contactUs
}