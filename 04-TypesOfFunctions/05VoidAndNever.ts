//Void and Never

//Void : Functions that don't return a value
function logMessage(message: string): void {
    console.log(message);
}
  

//Never : Functions that never return (e.g., throw an error or run infinitely
function throwError(message: string): never {
    throw new Error(message);//throws error
}
  