// Our logger system is to log in and log out a single user in a system
class Logger {
    // there should be one and only user at a time 
    // static means that we should be logging in and log out the user
    private static loggedInUser: object;

    // creating a single Instance for a user
    static login(user:object) {
        // we dont use this method, we use the name of the class name
        if (Logger.loggedInUser === null) {
            Logger.loggedInUser = new Logger(); // existing logger    
        }
        return Logger.loggedInUser; // calling back the logger
    }



}

// creating an instance of Logger
let logger: Logger = new Logger(); 
