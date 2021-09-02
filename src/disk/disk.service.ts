/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(
    private powerService: PowerService, // 可以注入類似 connection 的 data 層，來達成資料持久化
  ) {}

  getData() {
    const randomWattsToDrawing = Math.floor(Math.random() * 100);

    const powerDrawingSuccess = this.powerService.supplyPower(randomWattsToDrawing);

    if (powerDrawingSuccess) {
      return `電源供應器 花費了 ${randomWattsToDrawing} 瓦特，於讀取資料中，data: ......`;
    }

    return `花費 ${randomWattsToDrawing} 瓦特，電源供應器 瓦數不夠，取得資料失敗`;
  }
}
