import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('Test Fortuna', () => {

    it('Validete Type of return equal number', () => {
      expect(typeof appController.getFortune()).toBe('number');
    });

    // Que tenga 4 digitos
    it('Validete size of fortune number == 4 digits', () => {
      expect(typeof appController.getFortune().toString().length).toBe(4);
    });

    // Validar que sea igua a 4 digitos
    it('Validete size of fortune number <= 4 digits', () => {
      expect(typeof appController.getFortune().toString().length).toBeLessThanOrEqual(4);
    });

    // Validar que sel numero sea aleatorio
    it('Validete size of fortune number <= 4 digits', () => {
      const v1: number = appController.getFortune();
      const v2: number = appController.getFortune();
      expect(v1).not.toEqual(v2);
    });
  });

});