import { makeNotification } from '@test/factories/notifications-factory';
import { InMemoryNotificationsRepositiry } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('alcel notification', () => {
  it('should be able to send a notification. ', async () => {
    const notificationsRepository = new InMemoryNotificationsRepositiry();
    const calcelNotification = new CancelNotification(notificationsRepository);

    const notification = makeNotification();
    await notificationsRepository.create(notification);

    await calcelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].createdAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification ', async () => {
    const notificationsRepository = new InMemoryNotificationsRepositiry();
    const calcelNotification = new CancelNotification(notificationsRepository);

    expect(() => {
      return calcelNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
