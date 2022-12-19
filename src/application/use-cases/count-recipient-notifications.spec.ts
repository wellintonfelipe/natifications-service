import { makeNotification } from '@test/factories/notifications-factory';
import { InMemoryNotificationsRepositiry } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications. ', async () => {
    const notificationsRepository = new InMemoryNotificationsRepositiry();
    const countManyByRecipientId = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );
    const { count } = await countManyByRecipientId.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});