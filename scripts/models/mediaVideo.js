class mediaVideo {
    constructor(data, name){
        // const {id, photographerId, title, image, likes, date, price, urlName, media} = data;
        this._id = data.id
        this._photographerId = data.photographerId
        this._title = data.title
        this._video = data.video
        this._likes = data.likes
        this._price = data.price
        this._date = data.date
        this._name = name
    }

    get id(){
        return this._id
    }

    get photographerId(){
        return this._photographerId
    }

    get title(){
        return this._title
    }

    get urlName(){
        return `./assets/${this._name}/${this._video}`
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