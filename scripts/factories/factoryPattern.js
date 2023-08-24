class MediaFactory {
    constructor(data, name, type) {
        // Si le type correspond à l'objet video, alors retourne le format video
        if (type === 'video') {
            return new mediaVideo(data, name)
        // Sinon retourne moi le formattage image
        } else if (type === 'image') {
            return new mediaImages(data, name)
        // Une bonne pratique est de throw une erreur si le format n'est pas reconnu
        } else {
            throw 'Unknown type format'
        }
    }
}