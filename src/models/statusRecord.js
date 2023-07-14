export default class StatusRecord{

    id = 0;
    statusId = 0;
    status = "";
    personId = 0;
    person = "";
    destination = "";
    carNumber = "";

    constructor(input){

        if(input == null){
            return;
        }

        this.id = input.id || 0;
        this.statusId = input.statusId || 0;
        this.status = input.status || "";
        this.personId = input.personId || 0;
        this.person = input.person || "";
        this.destination = input.destination || "";
        this.carNumber = input.carNumber || "";

    }


}