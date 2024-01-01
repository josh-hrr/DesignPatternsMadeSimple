import { LoginCommand, SuccessfulLoginCommand, UnsuccessfulLoginCommand } from "./Product";
 
abstract class LoginCreator {
    protected abstract createLoginCommand(): LoginCommand;
 
    public performLogin(username: string, password: string) {
        const loginCommand = this.createLoginCommand();
        loginCommand.execute(username, password);
    }
} 
class SuccessfullLoginCreator extends LoginCreator {
    public createLoginCommand(): LoginCommand {
        return new SuccessfulLoginCommand();
    }
} 
class UnsuccessfullLoginCreator extends LoginCreator {
    public createLoginCommand(): LoginCommand {
        return new UnsuccessfulLoginCommand();
    }
}

export { LoginCreator, SuccessfullLoginCreator, UnsuccessfullLoginCreator }