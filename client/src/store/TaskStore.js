import {makeAutoObservable} from 'mobx'
import TypeService from '../services/TypeService';
import TaskService from '../services/TaskService';

export default class TaskStore {
    constructor() {
        this._types = [];
        this._theories = [];
        this._tasks = [];

        this._error = null
        makeAutoObservable(this);
    }


    setTypes(types) {
        this._types = types; 
    }

    setTheories(theories) {
        this._theories = theories; 
    }

    setTasks(tasks) {
        this._tasks = tasks;
    }

    setError(error) {
        this._error = error
    }

    get types() {
        return this._types;
    }

    get theories() {
        return this._theories;
    }

    get tasks() {
        return this._tasks;
    }

    get error() {
        return this._error;
    }


    async typeCreate(name) {
        try {
            const response = await TypeService.create(name);
            console.log(response);
            if(response && response.data) {
                this.setTypes([...this._types, response.data]);
            }
            return response
        } catch (error) {
            throw Error(error.response?.data?.message)
        }
    }

    async typeAll() {
        try {
            const response = await TypeService.getAll();
            if(response && response.data) {
                this.setTypes(response.data);
            }
            return response;
        } catch (error) {
            throw Error(error.response?.data?.message)
        }
    }

    async typeOne() {
        try {
            const response = await TypeService.getOne();
            if(response && response.data) {
                return response.data
            }
            return response
        } catch (error) {
            throw Error(error.response?.data?.message)
        }
    }

    async taskCreate(type, name, description, exp) {
        try {
            const response = await TaskService.create(type, name, description, exp)
            if(response && response.data) {
                this.setTasks([...this.tasks. response.data])
            }
            return response;
        } catch (error) {
            throw Error(error.response?.data?.message)
        }
    }

    async getTasksAll() {
        try {
            const response = await TaskService.getAll();
            if(response && response.data) {
                this.setTasks(response.data);
                return response
            }
            return response
        } catch (error) {
            throw Error(error.response?.data?.message);
        }
    }

    async getTaskOne(id) {
        try {
                const response = await TaskService.getOne(id);
                if(response && response.data) {
                    return response.data;
                }
                return response;
        } catch (error) {
            throw Error(error.response?.data?.message);
        }
    }

    async editTask(id, status) {
        try {
            const response = await TaskService.editTask(id, status);
            if(response && response.data) {
                this.setTasks(this.tasks.map(task =>
                    task.id === id ? {...task, status} : task
                ))
                return response.data;
            }
        } catch (error) {
            throw Error(error.response?.data?.message)
        }
    }
} 