// Code goes here!


abstract class Department {
    static fiscalYear = 2020
    // private name: string;
    protected employees: string[] = [];
    constructor(protected readonly id: string, private name: string) {}
    static createEmployee(name:string){
        return {name}
    }
    abstract describe(this: Department): void;
    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    get getName(){
        return this.name
    }
}
// private propertiese doesn't be inherit to the child property
// protected make the private accessable inside the children
class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, "IT");
        // if we set something using this we must use the super first
    }
    describe(): void {
        console.log("IT Department - ID: ", this.id)
    }
}
class AccountingDepartment extends Department {
    private lastReport:string;
    private static instance:AccountingDepartment;
    get mostRecentReport(){
        return this.lastReport
    }
    set mostRecentReport(value:string){
        if(!value) return;
        this.addReport(value)
    }
    private constructor(id: string, private reports: string[]) {
        super(id, "accounting");
        this.lastReport = this.reports[0];
    }
    // using this inside static methods refer to the class itself not the object
    static getInstance(){
        if(this.instance) return this.instance;
        this.instance = new AccountingDepartment("d3",[])
        return this.instance
    }
    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text
    }
    getReports(){
        console.log(this.lastReport)
        console.log(this.reports)
    }
    describe(): void {
        console.log("Acccounting Department - ID: " + this.id)
    }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1)

// if the ITDepartment doesn't has its own constructor we can do as below
// const dep1 = new ITDepartment("102", "Engineering");
const dep1 = new ITDepartment("102", ["Max"]);
dep1.addEmployee("Yousef");
dep1.addEmployee("Khaled");
dep1.printEmployeeInformation();
dep1.describe();
console.log(dep1);
const depCopy = {
    name: "DUMMY", // if we remove it it gives error
    describe: dep1.describe,
};
// depCopy.describe()

// const accounting = new AccountingDepartment("d3",[]);
const accounting = AccountingDepartment.getInstance()
const accounting2 = AccountingDepartment.getInstance()
console.log("test ",accounting === accounting2)
accounting.addReport("something went wrong...");
accounting.addReport("something went wrong...");
accounting.addReport("something went wrong...");
accounting.addReport("something went wrong...");
console.log(accounting.mostRecentReport)
accounting.mostRecentReport = "test!..."
accounting.getReports()

accounting.describe()



