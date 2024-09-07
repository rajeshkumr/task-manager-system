import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/task.entity';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb', // Change this to the appropriate type (e.g., mysql, postgres)
      host: 'localhost', // or your MongoDB host
      port: 27017, // default MongoDB port
      database: 'taskdb', // Your database name
      useUnifiedTopology: true, // Needed for MongoDB
      synchronize: true, // Automatically synchronize entity changes to the database
      entities: [Task, User], // Path to your entities
    }),
    TasksModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
