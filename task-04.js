class StringBuilder {
    constructor(value) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    append(str) {
        let newString = this._value.split();
        newString.push(str);
        this._value = newString.join('');
    }

    prepend(str) {
        let newString = this._value.split();
        const result = [str, ...newString].join('');
        this._value = result;
    }

    pad(str) {
        let newString = this._value.split();
        const result = [str, ...newString, str].join('');
        this._value = result;
    }
}


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'
builder.prepend('^');
console.log(builder.value); // '^.^'
builder.pad('=');
console.log(builder.value); // '=^.^='