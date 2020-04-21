import axios from 'axios';
import {BaseApiUrl} from './Constant';
export default  class commonUtility {
    static UserInformation;
    static TLanguageCode;
    static Elements;
    static UIErrorMessages;

    static setUIErrorMessages(TLID){
        axios.get(BaseApiUrl + '/ErrorMessage/getValidationUI?TLID='+TLID)
        .then(res => {
          if (res.data.isError === false) {
            this.UIErrorMessages =  res.data.ErrorMessages
          } 
        }); 
    }
    static getUIErrorMessages(){
        return this.UIErrorMessages;
    }
    static  getUIErrorMessagesByCode(elementID){
        if(this.UIErrorMessages !== undefined)
        return this.UIErrorMessages.filter(element=>element.Code===elementID)[0].Message;
    else
        return ""
    }

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