import { Content } from './content.entity';
import { Notification } from './notification.entity';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipientId',
    });

    expect(notification).toBeTruthy();
  });
});
