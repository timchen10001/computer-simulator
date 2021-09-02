import { Injectable } from '@nestjs/common';
import { PowerService } from './../power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    const randomCostWatts = Math.floor(Math.random() * 20);

    const powerDrawingSuccess = this.powerService.supplyPower(randomCostWatts);

    if (powerDrawingSuccess) {
      console.log(`電源供應器 花費了 ${randomCostWatts} 瓦特，於本次運算中`);

      return a + b;
    }

    return `花費 ${randomCostWatts} 瓦特，電源供應器 運算失敗`;
  }
}
