import { InMemoryNotificationsRepositiry } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notication';

describe('Send notification', () => {
  it('should be able to send a notification. ', async () => {
    const notificationsRepository = new InMemoryNotificationsRepositiry();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'Social',
      recipientId: 'exemple-recipient-id',
    });
    expect(notificationsRepository.notications).toHaveLength(1);
    expect(notificationsRepository.notications[0]).toEqual(notification);
  });
});
