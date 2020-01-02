
export interface Person {
    name: string;
    surname: string;
    friendly: boolean;
}

export class Greeter {
    public greet(greeter: Person): string {
        return `${greeter.name} ${greeter.surname} salutes you, and is ${greeter.friendly ? 'friendly' : 'not friendly!'}`;
    }
}

const greeter: Greeter = new Greeter();

const greetingPerson: Person = {
    surname: "Girard",
    name: "Maxime",
    friendly: true
};

console.log(greeter.greet(greetingPerson));
console.log("done");