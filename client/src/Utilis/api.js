import axios from "axios";

export const fetchDataFromApi = async (url) => {
    const params = {
        headers: {
            Authorization: "Bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
        },
    };

    try {
        const apiUrl = process.env.REACT_APP_STRIPE_APP_DEV_URL + url;
        const { data } = await axios.get(apiUrl, params);
        return data;
    } catch (error) {
        console.log("Error:", error);
        return error;
    }
};

export const makePaymentRequest = axios.create({
    baseURL: process.env.REACT_APP_STRIPE_APP_DEV_URL,
    headers: {
        Authorization: "Bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    },
});




