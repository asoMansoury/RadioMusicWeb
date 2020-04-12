export default  class commonUtility {
    static UserInformation;
    static TLanguageCode;
    static Elements;

    static setTLanguageCode(value){
        this.TLanguageCode = value;
    }
    static getTLanguageCode(){
        return this.TLanguageCode;
    }
    static  setUserInformation(value){
        this.UserInformation = value;
    }

    static getUserInformation(){
        return this.UserInformation;
    }

    static setElements(value){
        
        this.Elements = value
    }

    static getElements(){
        return this.Elements
    }

    static filterElement(elementID){
        return this.Elements.filter(element=>element.ElementID===elementID)[0];
    }

    static getElementTitle(elementID){
        if(this.Elements !== undefined)
            return this.Elements.filter(element=>element.ElementID===elementID)[0].ElementTitle;
        else
            return ""
    }
}