//Here you can provide data properties before assingning the value to the object using interface and also provide optional properties

interface data {
    name: string;
    age?: number;
}

const data: data = {
    name: "Samar",
    age: 30,
};

if (data.age) {
    console.log(`Name: ${data.name}, Age: ${data.age}`);
}
