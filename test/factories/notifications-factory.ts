import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Overrride = Partial<NotificationProps>;

export function makeNotification(overrride: Overrride = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Outra Solicitação de amizade!'),
    recipientId: 'recipient-2',

    ...overrride,
  });
}
