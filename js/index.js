var HelloTypeScript = /** @class */ (function () {
    function HelloTypeScript(message) {
        this.helloString = message;
    }
    HelloTypeScript.prototype.hello = function () {
        return this.helloString;
    };
    return HelloTypeScript;
}());
var myName = 'QYK';
var myAge = 18;
var sentence = "Hello, my name is " + myName + ", I'll be " + (myAge + 1) + " years old next month";
var helloTypeScript = new HelloTypeScript(sentence);
document.body.innerHTML = helloTypeScript.hello();
