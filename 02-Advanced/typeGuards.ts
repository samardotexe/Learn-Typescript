//TypeGuards are used to narrow down the type of variable during run time

function display(value: number | string) {
    if (typeof value === "string") {
      console.log(value.toUpperCase()); // Narrowed to string
    } else {
      console.log(value.toFixed(2)); // Narrowed to number
    }
}
  