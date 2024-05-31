import { Test, TestingModule } from '@nestjs/testing';
import { TokenisationService } from './tokenisation.service';

describe('TokenisationService', () => {
  let service: TokenisationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TokenisationService],
    }).compile();

    service = module.get<TokenisationService>(TokenisationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
