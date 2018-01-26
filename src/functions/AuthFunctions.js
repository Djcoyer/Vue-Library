/**
 * Created by dcoyer on 1/20/2018.
 */
import {eventBus} from './../main';
import {Constants} from "../constants/Constants";
import jwtDecode from 'jwt-decode';

class AuthFunctions {
    checkAuthenticated = () => {
        let idToken = localStorage.getItem('id_token');
        if(idToken == null){
            eventBus.$emit(Constants.NOT_AUTHENTICATED);
            return;
        }
        var decodedToken = jwtDecode(idToken);
        if(new Date().getTime() < decodedToken.exp *999.981) {
             eventBus.$emit(Constants.AUTHENTICATED);
        }
        else {
            eventBus.$emit(Constants.NOT_AUTHENTICATED);
        }
    };
}

export const authFunctions = new AuthFunctions();