//короткий путь 
function parseUrl(str) {
    return new URL(str)
}
//длинный путь  
function parseUrl(str) {
    class MyClass {
        constructor(str) {
            this.str = str;
            this.href = this.str;
            this.protocol = this.str.slice(0, this.str.indexOf(':') + 1);
            this.host = this.str.slice(this.protocol.length + 2, this.str.indexOf('/d'));
            this.port = this.host.slice(this.host.length - 4, this.host.length);
            this.origin = this.protocol + '//' + this.host;
            this.hostname = this.host.slice(0, this.host.indexOf(':'));
            this.pathname = this.str.slice(this.str.indexOf(this.host) + this.host.length, this.str.indexOf('?'));
            this.hash = this.str.slice(this.str.indexOf('#'));
        };
    };
    return new MyClass(str)
};

