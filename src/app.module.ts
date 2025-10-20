import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { ServicesModule } from './modules/services/services.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    BookingsModule,
    PaymentsModule,
    ServicesModule,
  ],
})
export class AppModule { }
