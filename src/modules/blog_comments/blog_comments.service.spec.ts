import { Test, TestingModule } from '@nestjs/testing';
import { BlogCommentsService } from './blog_comments.service';

describe('BlogCommentsService', () => {
  let service: BlogCommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogCommentsService],
    }).compile();

    service = module.get<BlogCommentsService>(BlogCommentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
