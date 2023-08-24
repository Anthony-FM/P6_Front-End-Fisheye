class mediaImages {
    constructor(data, name){        
        this._id = data.id
        this._photographerId = data.photographerId
        this._title = data.title
        this._image = data.image
        this._likes = data.likes
        this._price = data.price
        this._date = data.date
        this._name = name
    }

    get id() {
        return this._id
    }
    get image() {
        return this._image
    }

    get photographerId(){
        return this._photographerId
    }

    get title(){
        return this._title
    }

    get urlName(){
        return `./assets/${this._name}/${this._image}`
    }

    get likes(){
        return this._likes
    }

    get price(){
        return this._price
    }

    get date(){
        return this._date
    }
}