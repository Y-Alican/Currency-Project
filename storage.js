class Storage{
    static addStorage(userName){
        console.log(this)
       let  userStorage = this.getStorage();
        userStorage.push(userName);
        localStorage.setItem("user",JSON.stringify(userStorage))
        
    }

    static getStorage(){
        let lastUser ;
        if(localStorage.getItem("user") === null){
            lastUser = [];
        }else{
            lastUser = JSON.parse(localStorage.getItem("user"))
        }
      
        return lastUser;
    }

    static deleteStorage(){
        
        localStorage.removeItem("user")
    }

    
}

