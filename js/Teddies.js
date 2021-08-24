/* creation de la class teddies */
class Teddies{
    constructor(jsonteddies){
        jsonteddies && Object.assign(this, jsonteddies);
    }
}