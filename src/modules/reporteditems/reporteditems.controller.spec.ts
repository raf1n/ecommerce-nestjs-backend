import { Test, TestingModule } from '@nestjs/testing';
import { ReporteditemsController } from './reporteditems.controller';
import { ReporteditemsService } from './reporteditems.service';

describe('ReporteditemsController', () => {
  let controller: ReporteditemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReporteditemsController],
      providers: [ReporteditemsService],
    }).compile();

    controller = module.get<ReporteditemsController>(ReporteditemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
