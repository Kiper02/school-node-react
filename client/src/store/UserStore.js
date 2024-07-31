import {makeAutoObservable} from 'mobx'
import AuthService from '../services/AuthService';
import axios from 'axios';
import UserInfoService from '../services/UserInfoService';

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {};
        this._info = {}
        makeAutoObservable(this);
    }


    setIsAuth(bool) {
        this._isAuth = bool; 
    }

    setUser(user) {
        this._user = user; 
    }

    setInfo(info) {
        this._info = info
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }

    get info() {
        return this._info;
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password)
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setIsAuth(true);
            this.setUser(response.data.user);
        } catch (error) {
            throw Error(error.response?.data?.message)
        }
    }

    async registration(email, password) {
        try {
            const response = await AuthService.registration(email, password)
            localStorage.setItem('token', response.data.accessToken);
            this.setIsAuth(true);
            this.setUser(response.data.user);
        } catch (error) {
            console.log(error.response?.data?.message);
            throw Error(error.response?.data?.message)
        }
    }

    async logout() {
        try {
            await AuthService.logout()
            localStorage.removeItem('token');
            this.setIsAuth(false);
            this.setUser({});
        } catch (error) {
            throw Error(error.response?.data?.message)
        }
    }

    async checkAuth() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            this.setIsAuth(true);
            this.setUser(response.data.user);
        } catch (error) {
            throw Error(error.response?.data?.message)
        }
    }


    async getInfo(id) {
        try {
            const response = await UserInfoService.getOne(id)
            this.setInfo(response.data);
            return response;
        } catch (error) {
            throw Error(error.response?.data?.message)
        }
    }
} 