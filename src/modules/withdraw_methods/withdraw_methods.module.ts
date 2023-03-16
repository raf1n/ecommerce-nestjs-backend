import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WithdrawMethodsService } from './withdraw_methods.service';
import { WithdrawMethodsController } from './withdraw_methods.controller';
import { WithdrawMethod, WithdrawMethodSchema } from './../../schemas/withdraw_method.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: WithdrawMethod.name, schema: WithdrawMethodSchema }]),
  ],
  controllers: [WithdrawMethodsController],
  providers: [WithdrawMethodsService]
})
export class WithdrawMethodsModule {}
