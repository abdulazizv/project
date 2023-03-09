import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    const PORT = process.env.PORT || 7000;
    app.listen(PORT, () => {
      console.log(`Server ${PORT} da yuguryapti...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
