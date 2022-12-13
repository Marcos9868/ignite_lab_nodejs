import { Content } from './content.entity';

describe('Notification content', () => {
  it('Should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it("Shouldn't be able to create a notification content with less 5 caracters", () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it("Shouldn't be able to create a notification content with more than 240 caracters", () => {
    expect(() => new Content('aaa'.repeat(241))).toThrow();
  });
});
