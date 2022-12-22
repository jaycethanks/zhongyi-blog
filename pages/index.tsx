import 'bytemd/dist/index.css';

import { useState } from 'react';

import RecentPosts from '@/components/App/Post/RecentPosts';
import Banner from '@/components/Banner';
import Container from '@/components/common/Container';
import Heading from '@/components/common/Heading';
import Layout from '@/components/common/Layout';
import SpacerBar from '@/components/common/SpacerBar';
import Fonts from '@/fonts';
// import gfm from '@bytemd/plugin-gfm'
import { Editor, Viewer } from '@bytemd/react';

const plugins = [
  // gfm(),
  // Add more plugins here
];

export default function Home() {
  const [value, setValue] = useState("");

  return (
    // 这里为了开发阶段默认启用夜间模式， 上线应该去掉

    <div>
      <Layout>
        <Container>
          <Banner />
          <SpacerBar gap={4} />
          <div className="columns-2 gap-2">
            <div className="mb-2 h-[48rem] break-inside-avoid bg-red-400">
              {/* <Editor
                value={value}
                plugins={plugins}
                onChange={(v) => {
                  setValue(v);
                }}
              /> */}
              <Viewer value="# Hello world > 不是吧 `搞笑 world space`"></Viewer>
            </div>
            <div className="mb-2 aspect-video h-96 break-inside-avoid bg-blue-400"></div>
            <div className="mb-2 aspect-square h-96 break-inside-avoid bg-red-400"></div>
          </div>
        </Container>
      </Layout>
    </div>
  );
}
