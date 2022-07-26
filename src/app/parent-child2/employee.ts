export class Employee {
    candidateName : string;
    email : string;
    //courseCode : string;
    participantId: string ;

    constructor(candidateName : string='', email:string='', participantId:string=''){
        this.candidateName=candidateName;
        this.email = email;
        this.participantId = participantId;
    }

}
