import StatusRecord from "./../models/statusRecord";

export default class StatusRecordProvider{

    getData(){
        return [

            new StatusRecord({id:1, 
                statusId:1, 
                status:"Погрузка", 
                personId:1, 
                person: "Петрович", 
                carNumber:"AБ 123 77", 
                destination:"Петушки"}),

            new StatusRecord({id:2, 
                statusId:2, 
                status:"Дорога", 
                personId:2, 
                person: "Кузьмич", 
                carNumber:"AБ 456 77", 
                destination:"Владимир"}),

            new StatusRecord({id:3, 
                statusId:2, 
                status:"Дорога", 
                personId:3, 
                person: "Михалыч", 
                carNumber:"AБ 987 77", 
                destination:"Казань"}),

            new StatusRecord({id:3, 
                statusId:3, 
                status:"Проблема", 
                personId:4, 
                person: "Эдуард", 
                carNumber:"AБ 666 77", 
                destination:"Питер"}),    
    

        ];
    }

}