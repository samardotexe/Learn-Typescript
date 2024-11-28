//Readonly is used to make properties immutable

interface dataset {
    readonly name: string;
    age: number;
}

const dataValue: dataset = {
    name: "Samar",
    age: 30,
};

