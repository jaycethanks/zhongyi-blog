import ArticleCard from '@/components/HomePage/ArticleCard/index';

const { ArticleItem } = ArticleCard;

const mocklist = [
  {
    createdAt: "2021-07-14T05:29:58.195Z",
    title: "quibusdam-iste-quam",
    description: "eius ab aut",
    cover: "https://loremflickr.com/640/480",
    readers: 3,
    liking: 12,
    comments: 8,
    visible: true,
    artid: "1",
  },
  {
    createdAt: "2068-06-29T07:17:43.824Z",
    title: "officiis-fuga-aspernatur",
    description: "modi odit dicta",
    cover: "https://loremflickr.com/640/480",
    readers: 12412,
    liking: 1,
    comments: 3,
    visible: true,
    artid: "2",
  },
  {
    createdAt: "2039-01-25T04:07:58.121Z",
    title: "ipsam-ducimus-alias",
    description: "voluptates rerum ducimus",
    cover: "https://loremflickr.com/640/480",
    readers: 3,
    liking: 12,
    comments: 412,
    visible: true,
    artid: "3",
  },
  {
    createdAt: "2036-10-14T23:44:28.870Z",
    title: "illo-saepe-laudantium",
    description: "error voluptas libero",
    cover: "https://loremflickr.com/640/480",
    readers: 421,
    liking: 23,
    comments: 423,
    visible: true,
    artid: "4",
  },
  {
    createdAt: "2057-03-13T15:22:16.091Z",
    title: "ullam-nesciunt-eligendi",
    description: "quisquam adipisci ad",
    cover: "https://loremflickr.com/640/480",
    readers: 4213,
    liking: 42,
    comments: 4213,
    visible: true,
    artid: "5",
  },
  {
    createdAt: "2012-09-24T01:43:09.849Z",
    title: "vero-iste-veritatis",
    description: "expedita maiores facere",
    cover: "https://loremflickr.com/640/480",
    readers: 123,
    liking: 423,
    comments: 12,
    visible: true,
    artid: "6",
  },
  {
    createdAt: "2012-02-23T09:05:29.474Z",
    title: "pariatur-facilis-dolorum",
    description: "ipsa provident harum",
    cover: "https://loremflickr.com/640/480",
    readers: 4123,
    liking: 3,
    comments: 2,
    visible: true,
    artid: "7",
  },
];
export default () => {
  return (
    <ArticleCard>
      {mocklist.map((it, index) => {
        return <ArticleItem key={it.artid} article={it} />;
      })}
    </ArticleCard>
  );
};
