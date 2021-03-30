export const APIs = {

    init(parm?) {

        const BaseUrl = 'https://api.edamam.com/api';
        const APP_ID = `47379841`;
        const APP_KEY = `d28718060b8adfd39783ead254df7f92`;

        const API = {
            nutritionDetails: `${BaseUrl}/nutrition-details?app_id=${APP_ID}&app_key=${APP_KEY}`
        }
        return API;
    }
}