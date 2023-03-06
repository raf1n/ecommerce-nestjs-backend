import { Test, TestingModule } from '@nestjs/testing';
import { MegaMenuCategoriesService } from './mega_menu_categories.service';

describe('MegaMenuCategoriesService', () => {
  let service: MegaMenuCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MegaMenuCategoriesService],
    }).compile();

    service = module.get<MegaMenuCategoriesService>(MegaMenuCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
