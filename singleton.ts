// Our logger system is to log in and log out a single user in a system
class Logger {
    // there should be one and only user at a time 
    // static means that we should be logging in and log out the user
    loggedInUser: object;
    loggedInUser1: object;



}

// creating an instance of Logger
let logger: Logger = new Logger(); 

// Non-Static:Object Members
// its object created can define its own properties
logger.loggedInUser1

// Static: Class Member
// its variables are global variables and cut across all objects
logger.loggedInUser; 