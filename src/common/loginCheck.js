import Cookies from 'universal-cookie';

function loginCheck(){
    const cookies = new Cookies();
    const jwtToken = cookies.get('jwtToken');

    if (jwtToken == undefined || jwtToken == null){
        window.location.href = "/login"
    } else {
        return jwtToken;
    }
}

export { loginCheck }