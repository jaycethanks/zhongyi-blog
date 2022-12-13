import Image from 'next/image';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import wavinghand from '@/components/Icons/animateIcon/waving-hand.png';
import SendFullfilled from '@/components/Icons/SendFullfilled';
import comments from '@/pages/api/mockmsg';

import Marquee from './Marquee';

// console.log("[comments]: ", comments);
const items = comments.slice(0, 10);
const BulletChat = () => {
  const handleSend = () => {
    console.log("click send");
  };
  return (
    <div className="marquee-board relative overflow-hidden">
      <Marquee style={{ marginLeft: "2%" }} items={items}></Marquee>
      <Marquee style={{ marginLeft: "-16%" }} items={items}></Marquee>
      <Marquee style={{ marginLeft: "-4%" }} items={items}></Marquee>
      <Marquee style={{ marginLeft: "4%" }} items={items}></Marquee>
      <Marquee items={items}></Marquee>

      <div className="mt-6 flex justify-center sm:justify-end sm:p-2">
        <div className="flex  gap-2 sm:w-auto">
          <Image src={wavinghand} className="h-8 w-8 shrink-0" alt="" />
          <Input
            maxLength={20}
            placeholder="嗨嗨,你今天状态好吗?"
            className="h-10   shrink-0 text-sm sm:w-auto"
          />
          <Button onClick={() => handleSend()} className="h-10 w-10 shrink-0">
            <SendFullfilled className="shrink-0 fill-slate-400 dark:fill-slate-400" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BulletChat;
