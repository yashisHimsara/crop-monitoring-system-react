export class Staff {
    employeeId: string;
    firstName: string;
    lastName: string;
    designation: string;
    contact: string;
    address: string;
    gender: string;
    joinedDate: string;
    email: string;

    constructor(
        employeeId: string,
        firstName: string,
        lastName: string,
        designation: string,
        contact: string,
        address: string,
        gender: string,
        joinedDate: string,
        email: string
    ) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
        this.contact = contact;
        this.address = address;
        this.gender = gender;
        this.joinedDate = joinedDate;
        this.email = email;
    }
}
