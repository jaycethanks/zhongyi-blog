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
import mitt, { Emitter }  from 'mitt'

type Events = {
    toggleTheme: boolean;
  };
  
const mitter: Emitter<Events> = mitt<Events>()
export default mitter;
