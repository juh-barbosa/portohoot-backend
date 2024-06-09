import { Injectable } from '@nestjs/common';

@Injectable()
export class TimerService {
  private intervalId: NodeJS.Timeout;
  private remainingTime: number;

  startTimer(
    duration: number,
    callback: (remainingTime: number) => void,
  ): void {
    this.remainingTime = duration;
    this.intervalId = setInterval(() => {
      this.remainingTime -= 1;
      callback(this.remainingTime);
      if (this.remainingTime <= 0) {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  getCurrentTime(): number {
    return this.remainingTime;
  }
}
