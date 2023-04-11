import { Test, TestingModule } from '@nestjs/testing';
import { MegaMenuCategoriesController } from './mega_menu_categories.controller';
import { MegaMenuCategoriesService } from './mega_menu_categories.service';

describe('MegaMenuCategoriesController', () => {
  let controller: MegaMenuCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MegaMenuCategoriesController],
      providers: [MegaMenuCategoriesService],
    }).compile();

    controller = module.get<MegaMenuCategoriesController>(MegaMenuCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
