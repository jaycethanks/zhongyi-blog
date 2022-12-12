import DotMenu from '../Icons/DotMenu';
import LocationPin from '../Icons/LocationPin';
import styles from './index.module.css';

type Comment = {
  comid?: string;
  content?: string;
  nickname?: string;
  avatar?: string;
  email?: string;
  url?: string;
  ip?: string;
  agent?: string;
  city?: string;
  province?: string;

  sort?: number;
  liking?: number;
  status?: number;

  parent?: string;
  parentId?: string;
  parentNickname?: string;

  createdAt?: string;
};
const list: Comment[] = [
  {
    createdAt: "2022-12-11T10:56:05.722Z",

    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1150.jpg",
    content:
      "Quod incidunt tenetur delectus vero laboriosam pariatur molestiae pariatur.",
    nickname: "Cristal57",
    city: "Rio Rancho",
    province: "New Hampshire",
    sort: 17,
    liking: 79,
    status: 98,
    parent: "0eb5cdb3-0734-4725-ab93-c618a7aa893d",
    parentNickname: "Nola_Kub",
    comid: "1",
  },
  {
    createdAt: "2022-12-11T10:36:30.575Z",

    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/6.jpg",
    content: "Blanditiis quidem delectus.",
    nickname: "Lillie.Olson97",
    city: "Evanston",
    province: "Colorado",
    sort: 30,
    liking: 6,
    status: 49,
    parent: "ceb22380-bc31-4c21-9e5d-943d7d7fa77f",
    parentNickname: "Oda.Padberg75",
    comid: "2",
  },
  {
    createdAt: "2022-12-12T01:05:51.295Z",

    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/646.jpg",
    content: "Illo quidem labore quae consequuntur iste.",
    nickname: "Hortense_Quigley",
    city: "Canton",
    province: "Missouri",
    sort: 29,
    liking: 76,
    status: 52,
    parent: "7a8a216e-b755-4d19-b529-f47de21408a5",
    parentNickname: "Myrna99",
    comid: "3",
  },
  {
    createdAt: "2022-12-12T05:14:22.288Z",

    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/604.jpg",
    content: "Quisquam ipsam suscipit ut voluptatem dolor.",
    nickname: "Kelton.Kessler24",
    city: "Deerfield Beach",
    province: "Connecticut",
    sort: 84,
    liking: 75,
    status: 77,
    parent: "5afe51d7-e21a-4e65-af3a-d9bd59e237b0",
    parentNickname: "Collin_Christiansen",
    comid: "4",
  },
  {
    createdAt: "2022-12-12T03:32:39.807Z",

    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/512.jpg",
    content:
      "Earum fugit voluptatibus fugiat ab quo sapiente quisquam laboriosam dolores.",
    nickname: "Audie.Leannon",
    city: "Roanoke",
    province: "New Hampshire",
    sort: 55,
    liking: 21,
    status: 14,
    parent: "dda061c2-ea7b-4c20-8bed-058c37834446",
    parentNickname: "Norma.Treutel89",
    comid: "5",
  },
  {
    createdAt: "2022-12-11T13:30:28.564Z",

    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/56.jpg",
    content:
      "Corrupti perspiciatis repellendus distinctio minima nostrum deleniti vitae.",
    nickname: "Hiram.Konopelski59",
    city: "Plainfield",
    province: "Kentucky",
    sort: 38,
    liking: 39,
    status: 41,
    parent: "8accd9a7-b8fb-41ec-ab1b-744efb8643de",
    parentNickname: "Lukas53",
    comid: "6",
  },
  {
    createdAt: "2022-12-11T06:54:32.111Z",

    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/127.jpg",
    content: "Amet ducimus nulla quasi eius unde repudiandae tempore.",
    nickname: "Aida_Luettgen12",
    city: "Bristol",
    province: "New York",
    sort: 90,
    liking: 15,
    status: 7,
    parent: "50fafad7-418f-4dfa-9b3f-dd9ee77ae895",
    parentNickname: "Valentine_Armstrong",
    comid: "7",
  },
  {
    createdAt: "2022-12-11T10:28:15.468Z",

    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/372.jpg",
    content:
      "Ea quod quia dolorem vero porro perferendis temporibus quo harum.",
    nickname: "Abbey_Brakus51",
    city: "Town 'n' Country",
    province: "South Carolina",
    sort: 86,
    liking: 55,
    status: 78,
    parent: "9013802e-7b12-4e0e-b187-b545e2fcd222",
    parentNickname: "Stefan_Hegmann",
    comid: "8",
  },
];

const MessageList = () => {
  return (
    <div className="text-gray-600 dark:text-gray-400">
      <p className=" mb-6 font-semibold text-gray-600 dark:text-gray-300">
        评论 32 条
      </p>
      {list.map((comment) => {
        const {
          comid,
          nickname,
          content,
          avatar,
          city,
          province,
          liking,
          createdAt,
        } = comment;
        return (
          <div
            key={comid}
            className="comment-raw mb-4 flex w-full items-start gap-6 text-xs"
          >
            {/* 头像列 */}
            <div className="avatar-col flex w-14 shrink-0 flex-col items-center">
              <img className="h-14 w-14  rounded-full" src={avatar} />
              <span
                title={nickname}
                className="mt-2 w-20 overflow-hidden text-ellipsis whitespace-nowrap text-center  text-gray-700 dark:text-gray-600"
              >
                {nickname}{" "}
              </span>
            </div>

            {/* 右边列 */}
            <div
              className={`${styles["info-col"]} min-h-[6rem]  flex-1 shrink-0 rounded-lg bg-slate-100 dark:bg-slate-800`}
            >
              <div
                className={`${styles["inner-wrapper"]} flex h-full w-full flex-col justify-between rounded-lg p-2`}
              >
                <div className="top-half ">
                  <div className="header flex justify-between text-slate-400 dark:text-slate-600">
                    <div className="time">{createdAt}</div>
                    <div className="operation cursor-pointer">
                      <DotMenu className=" fill-slate-400 dark:fill-slate-600" />
                    </div>
                  </div>
                  <div className="content text-sm">{content}</div>
                </div>

                {/* 底部操作条 */}
                <div className="bottom-half flex justify-between text-slate-400 dark:text-slate-600">
                  <div className="operation-bar">回复 {liking}</div>
                  <div className="operation-bar flex ">
                    {province} - {city}
                    <LocationPin className="fill-blue-300 dark:fill-blue-800" />{" "}
                  </div>
                </div>
              </div>
              {/* comid nickname content avatar city province liking createdAt */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
