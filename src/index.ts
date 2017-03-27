import { Type } from "@angular/core";

export class Foo {
    static create() {
        return new this();
    }
}
