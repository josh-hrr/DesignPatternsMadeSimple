import { SuccessfullLoginCreator, UnsuccessfullLoginCreator } from "../FactoryMethod/Creator";

class LoginCreatorSingleton {
    private static instance: SuccessfullLoginCreator | UnsuccessfullLoginCreator;

    private constructor() {}

    public static getInstance(isSuccessful: boolean): SuccessfullLoginCreator | UnsuccessfullLoginCreator {
        if(!this.instance) {
            this.instance = isSuccessful ? new SuccessfullLoginCreator() : new UnsuccessfullLoginCreator();
        } 
        return this.instance;
    } 
}

export { LoginCreatorSingleton };

//singleton pattern is used when we want to have only one instance of a class
//in this case we want to have only one instance of the login creator class
//we use the getInstance method to create the instance of the class if it doesn't exist 
//or return the instance if it already exists 