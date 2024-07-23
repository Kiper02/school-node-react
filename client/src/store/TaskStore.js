import {makeAutoObservable} from 'mobx'

export default class TaskStore {
    constructor() {
        this._types = [
            {id: 1, name: 'JavaScript'},
            {id: 2, name: 'Python'},
            {id: 3, name: 'C++'},
        ];
        this._theories = [
            {id: 1, name: 'Операторы', description: '*, /, //, +, -', text: 'В этом task научимся использовать основные операторы'},
            {id: 2, name: 'Массивы', description: '*, /, //, +, -', text: 'В этом task научимся использовать основные операторы'},
            {id: 3, name: 'Стилистика', description: '*, /, //, +, -', text: 'В этом task научимся использовать основные операторы'},
            {id: 4, name: 'Классы', description: '*, /, //, +, -', text: 'В этом task научимся использовать основные операторы'},
        ];
        this._tasks = [
            {id: 1, name: 'Работа с операторами', description: 'Для прохождения этого этапа стоит пройти предыдущий', exp: 20, status: 'Not Started'},
            {id: 1, name: 'Работа с массивами', description: 'Как хранить данные', exp: 25, status: 'Not Started'},
            {id: 1, name: 'Работа со стилистикой', description: 'Научимся писать код красиво', exp: 10, status: 'Not Started'},
            {id: 1, name: 'Работа с классами', description: 'Это сложная задача, советуем прочитать теорию перед прохождением', exp: 35, status: 'Not Started'},
        ];
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

    get types() {
        return this._types;
    }

    get theories() {
        return this._theories;
    }

    get tasks() {
        return this._tasks;
    }
} 