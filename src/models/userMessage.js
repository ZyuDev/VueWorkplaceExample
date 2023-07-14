export default class UserMessage{

messageId = 0;
userId = 0;
period = '';
text = '';

    constructor(messageId, userId, period, text){
        this.messageId = messageId;
        this.userId = userId;
        this.period = period;
        this.text = text;
    }
}