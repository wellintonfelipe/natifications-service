import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it(' should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content(' Voce recebeu uma solicitação de amizade.'),
      category: 'social',
      recipientId: 'exple-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
