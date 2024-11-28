//Extending interface is used to inherit from other interfaces

interface sectionA {
    name: string;
    total: number;
}

const classA: sectionA = {
    name: "Class A",
    total: 30,
};

interface sectionB extends sectionA {
    girls: number;
    boys: number;
}

const classB: sectionB = {
    name: "Class B",
    total: 30,
    girls: 15,
    boys: 15,
};