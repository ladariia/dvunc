import { makeAutoObservable } from "mobx";

export default class CourseStore {
    //работа с mobx
    constructor() {
        this._types = [

        ]
        this._formats = [

        ]
        this._courses = [
        ]
        this._selectedType = {} //null object
        this._selectedFormat = {}
        makeAutoObservable(this) //теперь mobx будет следить за изм этих переменных
    }

    //Actionы
    // - любой блок кода, который может изменять такие данные (state): пользовательские события, внутренние данные и т.д.
    setTypes(types) {
        this._types = types
    }

    setFormats(formats) {
        this._formats = formats
    }

    setCourses(courses) {
        this._courses = courses
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedFormat(format) {
        this._selectedFormat = format
    }

    //создадим геттеры - для получения каких-то пременных из состояния
    //вызываются только в том случае, если перменная кя была внутри была изменена
    get types() {
        return this._types
    }

    get formats() {
        return this._formats
    }

    get courses() {
        return this._courses
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedFormat() {
        return this._selectedFormat
    }

}