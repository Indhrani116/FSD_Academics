class Car {
    public brand: string = "Toyota";

    public display(): void {
        console.log(this.brand);
    }
}

let c = new Car();

c.display();