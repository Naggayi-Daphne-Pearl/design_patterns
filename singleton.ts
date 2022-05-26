// Our logger system is to log in and log out a single user in a system
class Logger {
    // there should be one and only user at a time 
    // static means that we should be logging in and log out the user
    private static loggedInUser: object;
    private static userDetail = {}; 


    private constructor(){
        Logger.userDetail = user;
    }
    
    // creating a single Instance for a user
    static login(user:object) {
        // we dont use this method, we use the name of the class name
        if (Logger.loggedInUser != null) {
            return Logger.loggedInUser;    
        }
        Logger.loggedInUser = new Logger(user)
        
    }

    static getLoggedInUser() {
        return Logger.userDetail; 
    }

    static logout() {
        Logger.loggedInUser = null;  
    }

}

Logger.login({name:'Daphne', password:'12345'}); 
console.log(Logger.getLoggedInUser());
Logger.logout(); 

Logger.login({name:'Pearl', password:'12345'}); 
console.log(Logger.getLoggedInUser());
Logger.logout(); 

Logger.login({name:'Jackson', password:'12345'}); 
console.log(Logger.getLoggedInUser());

Logger.login({name:'Sophia', password:'12345'}); 
console.log(Logger.getLoggedInUser());




