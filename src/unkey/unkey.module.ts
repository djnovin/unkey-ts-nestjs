import { Module } from '@nestjs/common';
import { Unkey } from '@unkey/api';

@Module({
  providers: [
    {
      provide: 'UNKEY_INSTANCE',
      useFactory: () => {
        return new Unkey({
          rootKey: process.env.UNKEY_ROOT_KEY,
        });
      },
    },
  ],
  exports: ['UNKEY_INSTANCE'],
})
export class UnkeyModule {}
