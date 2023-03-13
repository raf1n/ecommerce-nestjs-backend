import { Test, TestingModule } from '@nestjs/testing';
import { WithdrawMethodsController } from './withdraw_methods.controller';
import { WithdrawMethodsService } from './withdraw_methods.service';

describe('WithdrawMethodsController', () => {
  let controller: WithdrawMethodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WithdrawMethodsController],
      providers: [WithdrawMethodsService],
    }).compile();

    controller = module.get<WithdrawMethodsController>(WithdrawMethodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
