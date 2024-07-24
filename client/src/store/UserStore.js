import {makeAutoObservable} from 'mobx'
import AuthService from '../services/AuthService';
import axios from 'axios';

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {};
        makeAutoObservable(this);
    }


    setIsAuth(bool) {
        this._isAuth = bool; 
    }

    setUser(user) {
        this._user = user; 
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password)
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setIsAuth(true);
            this.setUser(response.data.user);
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    }

    async registration(email, password) {
        try {
            const response = await AuthService.registration(email, password)
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setIsAuth(true);
            this.setUser(response.data.user);
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout()
            localStorage.removeItem('token');
            this.setIsAuth(false);
            this.setUser({});
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    }

    async checkAuth() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/refresh`, {withCredentials: true})
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setIsAuth(true);
            this.setUser(response.data.user);
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    }
} 