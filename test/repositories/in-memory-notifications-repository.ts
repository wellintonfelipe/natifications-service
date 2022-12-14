import { NotificationsRepository } from '../../src/application/repositories/notification-repository';
import { Notification } from '../../src/application/entities/notification';

export class InMemoryNotificationsRepositiry
  implements NotificationsRepository
{
  public notications: Notification[] = [];

  async create(notication: Notification) {
    this.notications.push(notication);
  }
}
