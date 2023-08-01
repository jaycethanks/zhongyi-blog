// 创建全局事件对象
// const eventBus: {
//   on: Function;
//   emit: Function;
//   [key: string]: Function | Function[];
// } = {
//   on: function (eventName: string, callback: () => void) {
//     if (!this[eventName]) {
//       this[eventName] = [];
//     }
//     (this[eventName] as Function[]).push(callback);
//   },
//   emit: function (eventName: string, data: any) {
//     if (!this[eventName]) {
//       return;
//     }
//     (this[eventName] as Function[]).forEach((callback) => {
//       callback(data);
//     });
//   },
// };
import type { Emitter } from 'mitt';
import mitt from 'mitt';

interface Events {
  toggleTheme: boolean
  [key: string | symbol ]: any
}

const mitter: Emitter<Events> = mitt<Events>();
export default mitter;
