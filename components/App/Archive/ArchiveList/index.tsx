import Heading from '@/components/common/Heading';

import styles from './archivelist.module.scss';

const ArchiveList = () => {
  return (
    <div>
      <Heading level={2}>最近发布</Heading>

      <Heading level={3}>12月13日</Heading>

      <Heading level={3}>12月09日</Heading>
      <Heading level={3}>12月03日</Heading>
      <Heading level={3}>12月01日</Heading>

      <Heading level={2}>历史文章</Heading>
      <Heading level={3}>2022年</Heading>
      <Heading level={4}>12月03日</Heading>
      <Heading level={4}>12月01日</Heading>
      <Heading level={3}>2021年</Heading>
      <Heading level={4}>12月03日</Heading>
      <Heading level={4}>12月01日</Heading>
    </div>
  );
};
export default ArchiveList;
