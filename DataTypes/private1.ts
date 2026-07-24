class student {
    private age: number = 20;

    showAge(): void {
        console.log(this.age);
    }
}

let st = new student();

st.showAge();