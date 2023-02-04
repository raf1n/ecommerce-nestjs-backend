import { Test, TestingModule } from '@nestjs/testing';
import { PopularCategoriesService } from './popular_categories.service';

describe('PopularCategoriesService', () => {
  let service: PopularCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PopularCategoriesService],
    }).compile();

    service = module.get<PopularCategoriesService>(PopularCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
