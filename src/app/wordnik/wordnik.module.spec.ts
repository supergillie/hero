import { WordnikModule } from './wordnik.module';

describe('WordnikModule', () => {
  let wordnikModule: WordnikModule;

  beforeEach(() => {
    wordnikModule = new WordnikModule();
  });

  it('should create an instance', () => {
    expect(wordnikModule).toBeTruthy();
  });
});
