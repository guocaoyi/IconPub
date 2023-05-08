import * as mongoose from 'mongoose'
// import { MongooseModule } from '@nestjs/mongoose'

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    // imports: [MongooseModule.forRoot('mongodb://127.0.0.1/iconpub')],
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://127.0.0.1', { dbName: 'iconpub' }),
  },
]
