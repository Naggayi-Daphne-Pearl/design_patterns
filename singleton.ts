// Our logger system is to log in and log out a single user in a system
class Logger {
    // there should be one and only user at a time 
    // static means that we should be logging in and log out the user
    loggedInUser: object;


}

// creating an instance of Logger
let logger: Logger = new Logger(); 

logger.logInUser