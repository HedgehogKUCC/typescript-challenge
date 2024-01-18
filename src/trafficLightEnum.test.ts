import { describe, it, expect } from 'vitest';
import { TrafficLight, getTrafficLightStatus } from './trafficLightEnum';

describe('交通信號燈模擬', () => {
  it('應該根據輸入的信號燈狀態返回對應的描述', () => {
    expect(getTrafficLightStatus(TrafficLight.Red)).toBe('The traffic light is Red');
  });

  it('應該根據輸入的信號燈狀態返回對應的描述', () => {
    expect(getTrafficLightStatus(TrafficLight.Yellow)).toBe('The traffic light is Yellow');
  });

  it('應該根據輸入的信號燈狀態返回對應的描述', () => {
    expect(getTrafficLightStatus(TrafficLight.Green)).toBe('The traffic light is Green');
  });

  it('不是信號燈狀態返回錯誤訊息', () => {
    // @ts-expect-error
    expect(() => getTrafficLightStatus(123)).toThrowError('Invalid traffic light status');
  });
});