//TypeScript provides several built-in utility types to make code more concise.

//Partial: Make all properties optional.
type PartialUser = Partial<{ name: string; age: number }>;

//Required: Make all properties required.
type RequiredUser = Required<{ name?: string; age?: number }>;

//Pick: Pick specific properties.
type UserName = Pick<{ name: string; age: number }, "name">;

//Omit: Exclude specific properties.
type UserWithoutAge = Omit<{ name: string; age: number }, "age">;

