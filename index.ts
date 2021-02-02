class HelloTypeScript {
    helloString: string;
    constructor(message: string) {
        this.helloString = message;
    }
    hello() {
        return this.helloString;
    }
}

let myName: string = 'QYK';
let myAge: number = 18;
let sentence: string = `Hello, my name is ${myName}, I'll be ${myAge + 1} years old next month`
let helloTypeScript: HelloTypeScript = new HelloTypeScript(sentence);
document.body.innerHTML = helloTypeScript.hello();