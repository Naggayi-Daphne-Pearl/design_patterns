// Logger classes

interface LoginStrategy{
    login(loginCredentials:object):boolean;
}

class LoginWithUsername implements LoginStrategy{
    login(loginCredentials:object){
         let username = loginCredentials['username'];
        let password = loginCredentials['password'];
        if(username || password){
            throw new Error('Username or password is missing');
        }
        // if(username === 'admin' && password === 'admin'){
        //     return true;
        // }
        // return false;
        return true;
    }
}

class LoginWithEmailAndPassword implements LoginStrategy{
    login(loginCredentials:object){
        let email = loginCredentials['email'];
        let password = loginCredentials['password'];
        if(email || password){
            throw new Error('Email or password is missing');
        }
        // if(email === 'arafat@gmail.com' && password === 'arafat'){
        //     return true;
        // }
        // return false;
        return true;
    }
}

class LoginWithIdAndPassword implements LoginStrategy{
    login(loginCredentials:object){
        let id = loginCredentials['id'];
        let password = loginCredentials['password'];
        if(id || password){
            throw new Error('Id or password is missing');
        }
        // if(id === '1' && password === 'arafat'){
        //     return true;
        // }
        // return false;
        return true;
    }
}

class Logger {
    private static loggedInuser:object;
    private static userDetails = {}
    private static loginStrategy:LoginStrategy;

    private constructor(user:object){
        Logger.userDetails = user;
    }

    static setLoginStraegy(loginStrategy:LoginStrategy){
        Logger.loginStrategy = loginStrategy;
    }

    static logIn(user:object){
        if(Logger.loggedInuser != null){
            return Logger.loggedInuser ;   
        }
        Logger.loggedInuser = new Logger(user);
        
    }

    static getLoggedInUser(){
        return Logger.userDetails;
        
    }

    static logOut(){
        Logger.loggedInuser = null;
    }
}

interface InputDevice{  
    inputData(): any;
}

class inputDataFromKeyboard implements InputDevice{
    inputData(){
        return "Data from keyboard";
        
    }
}

interface Memory {
    storeData(data: any): boolean;
    retrieveData(basis: any): any;

}

interface Processor{
    processData(data: any): any;
}

interface ComputerErrors{
    handleError(error: any): any;

}

class inMemoryy implements Memory {
    memory: any[] = [];
    storeData(data:any){
        console.log("Data has been stored in memory");
        
        if(!this.memory.push(data)){
            throw new Error("Data could not be stored");
        } 
        return data;
    }
    
    retrieveData(basis:any){
        console.log("Data has been retrieved from memory");
        return this.memory;
    }
}

class CPU implements Processor{
    processData(data: any){
        console.log("Data has been processed by the CPU");
        
        return data;
    }
}
  

interface DisplayDevice{
    displayData(data: any): void;
}

class Monitor implements DisplayDevice{
    displayData(data: any){
        console.log(data);
    }
   
}

class Errors implements ComputerErrors{
    handleError(error:any){
        console.log("Error: "+error);
    }
}

class Computer{
    //Data
    private inputDevice:InputDevice;
    private memory:Memory;
    private processor:Processor;
    private errors:ComputerErrors;
    private displayDevice:DisplayDevice;

    //Methods

    constructor(inputDevice:InputDevice, memory:Memory, processor:CPU, errors:ComputerErrors, displayDevice:DisplayDevice){
        this.inputDevice = inputDevice;
        this.memory = memory;
        this.processor = processor;
        this.errors = errors;
        this.displayDevice = displayDevice;

    }

    input(){   
        return this.inputDevice.inputData();
    }

    store(data:any): boolean{
        
        //Delegate the responsibility to another class
        return this.memory.storeData(data);
    }

    retrieve(data:any){
        return this.memory.retrieveData(data);
    }

    process(data:any){    
        this.processor.processData(data);
    }

    handleError(error:any){   
        this.errors.handleError(error); 
    }

    display(data:any){   
        this.displayDevice.displayData(data);
    }

    //Setters and Getters

    setInputDevice(inputDevice:InputDevice){  

        this.inputDevice = inputDevice;
    }

    getInputDevice(){
        return this.inputDevice;
    }

  

//Setter and getter for memory

setMemory(memory:Memory){
    this.memory = memory;
}
}

class ChargeableComputer extends Computer{
    private charger:any;    

    constructor(inputDevice:InputDevice, memory:Memory, processor:CPU, errors:ComputerErrors, displayDevice:DisplayDevice){
        super(inputDevice, memory, processor, errors, displayDevice);
        // this.charger = chargerPc;
    }
    chargerPc(){
        console.log("Charging...");
    }
}

//Liskov Substitution Principle states that a class should be substitutable for its subclasses

function TestComputer(computer:Computer){
    computer.input();
    computer.store("This Data from keyboard");
    computer.retrieve("This Data from memory");
    computer.process("Data from memory");
    computer.display("Processed data from memory");
    computer.handleError("Error");
}

function ChargeComputer(computer:ChargeableComputer){
    computer.input();
    computer.store("This Data from keyboard");
    computer.retrieve("This Data from memory");
    computer.process("Data from memory");
    computer.display("Processed data from memory");
    computer.handleError("Error");
    computer.chargerPc();
}

// let computer1 = new Computer(new inputDataFromKeyboard(), new inMemoryy(), new CPU(), new Errors(), new Monitor());
// TestComputer(computer1);

// let computer2 = new ChargeableComputer(new inputDataFromKeyboard(), new inMemoryy(), new CPU(), new Errors(), new Monitor());
// ChargeComputer(computer2);


// Immediately invoking the function to test the class. Define the function in the first ()
(function testLogger(){
Logger.setLoginStraegy(new LoginWithIdAndPassword());
Logger.logIn({id:1, password:'arafat'});
console.log(Logger.getLoggedInUser());
Logger.logOut();

Logger.setLoginStraegy(new LoginWithEmailAndPassword());
Logger.logIn({email:'arafat@gmail.com', password:'arafat'});
console.log(Logger.getLoggedInUser());
Logger.logOut();
})();



class SecureComputer extends Computer{
    logger:Logger;
     constructor(inputDevice:InputDevice, memory:Memory, processor:CPU, errors:ComputerErrors, displayDevice:DisplayDevice){
        super(inputDevice, memory, processor, errors, displayDevice);
        // this.logger = logger;
    }
    setLogger(logger:Logger){
        this.logger = logger;
    }

    getLogger(){
        return this.logger;
    }
}

let secureComputer = new SecureComputer(new inputDataFromKeyboard(), new inMemoryy(), new CPU(), new Errors(), new Monitor());
secureComputer.setLogger(Logger.logIn({id:1, password:'daphne'}));


