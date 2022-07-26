export class Register {
    course: string;
    candidateName : string;
    address : string;
    email : string;
    contactNo : number;
    date:string;

    constructor(course: string="",
    candidateName : string="",
    address : string="",
    email : string="",
    contactNo : number=0,
    date:string="")
        {
       
       this.course = course;
       this.candidateName = candidateName;
       this.address = address;
       this.email = email;
       this.contactNo = contactNo;
       this.date=date;
    
    
    }
}
