let defaultCity = '上海'
try{
    if(localStorage){
        defaultCity = localStorage.city
    }
}catch(e){}

export default {
    city:defaultCity
}