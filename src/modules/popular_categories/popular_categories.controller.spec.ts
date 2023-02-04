import { Test, TestingModule } from '@nestjs/testing';
import { PopularCategoriesController } from './popular_categories.controller';
import { PopularCategoriesService } from './popular_categories.service';

describe('PopularCategoriesController', () => {
  let controller: PopularCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PopularCategoriesController],
      providers: [PopularCategoriesService],
    }).compile();

    controller = module.get<PopularCategoriesController>(PopularCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
