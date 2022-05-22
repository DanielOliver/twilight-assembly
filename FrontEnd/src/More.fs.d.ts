// Unfortunately declaration files don't accept relative paths

import { ReactElement } from "react";

// so we just use the * wildcard
declare module "*More.fs" {
    function sayHelloFable(): string;
    function HelloWorld(): ReactElement;
}

// export function sayHelloFable(): string;
// export function HelloWorld(): ReactElement;

