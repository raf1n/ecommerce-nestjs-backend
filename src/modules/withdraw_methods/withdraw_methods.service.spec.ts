import { Test, TestingModule } from '@nestjs/testing';
import { WithdrawMethodsService } from './withdraw_methods.service';

describe('WithdrawMethodsService', () => {
  let service: WithdrawMethodsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WithdrawMethodsService],
    }).compile();

    service = module.get<WithdrawMethodsService>(WithdrawMethodsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
