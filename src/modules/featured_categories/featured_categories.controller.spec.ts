import { Test, TestingModule } from '@nestjs/testing';
import { FeaturedCategoriesController } from './featured_categories.controller';
import { FeaturedCategoriesService } from './featured_categories.service';

describe('FeaturedCategoriesController', () => {
  let controller: FeaturedCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeaturedCategoriesController],
      providers: [FeaturedCategoriesService],
    }).compile();

    controller = module.get<FeaturedCategoriesController>(FeaturedCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
