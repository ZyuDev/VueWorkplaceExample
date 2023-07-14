import UserMessage from './../models/userMessage'

export default class UserMessageProvider{

  getData(){

    return [
        new UserMessage(1, 3, '2023-07-13T11:00:03','Все в порядке, еду'),
        new UserMessage(2, 2, '2023-07-13T11:00:03','Двигаемся по расписанию'),
        new UserMessage(3, 1, '2023-07-13T11:00:03','Грузимся'),
        new UserMessage(3, 1, '2023-07-13T12:00:03','Складские тупят'),
        new UserMessage(4, 4, '2023-07-13T11:00:03','Выехал'),
        new UserMessage(5, 4, '2023-07-13T12:00:03','Стою в пробке'),
        new UserMessage(5, 4, '2023-07-13T13:00:03','Ремонт дороги, все еще стою'),
    ];

  }

  getUserMessages(userId){

         var messages = this.getData().filter(x=>x.userId == userId);

         return messages;

  }

}