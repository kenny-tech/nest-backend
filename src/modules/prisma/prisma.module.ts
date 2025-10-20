import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // makes it available across all modules
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
