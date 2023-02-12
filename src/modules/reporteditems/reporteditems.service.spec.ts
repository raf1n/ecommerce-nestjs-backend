import { Test, TestingModule } from '@nestjs/testing';
import { ReporteditemsService } from './reporteditems.service';

describe('ReporteditemsService', () => {
  let service: ReporteditemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReporteditemsService],
    }).compile();

    service = module.get<ReporteditemsService>(ReporteditemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
