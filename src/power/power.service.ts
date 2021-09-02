import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  private totalWatts: number;

  constructor() {
    this.totalWatts = 100;
  }

  supplyPower(drawingWatts: number) {
    if (this.totalWatts - drawingWatts <= 0) {
      return false; // or throw some Error Exception
    }

    this.totalWatts -= drawingWatts;
    return true;
  }
}
