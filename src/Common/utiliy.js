export default  class commonUtility {
    static UserInformation;
    static  setUserInformation(value){
        this.UserInformation = value;
    }

    static getUserInformation(){
        return this.UserInformation;
    }
}