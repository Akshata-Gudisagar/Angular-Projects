export class Participant {
    participantId:string;
    participantName:string;
    branch:string;

    constructor(participantId:string="",participantName:string="",branch:string=""){
        this.participantId=participantId;
        this.participantName=participantName;
        this.branch=branch;
    }
}
