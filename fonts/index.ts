import localFont from '@next/font/local';

const SongJianTi = localFont({ src: '../fonts/FangZhengShuSongJianTi.ttf' });
const HeiTi = localFont({ src: '../fonts/FangZhengHeiTiJianTi.ttf' });
const KaiTi = localFont({ src: '../fonts/FangZhengKaiTiJianTi.ttf' });
const SourceHanSerifCN = localFont({
  src: '../fonts/SourceHanSerifCN-Regular.otf',
});

const SourceHanSansCNRegular = localFont({
  src: '../fonts/SourceHanSansCN-Regular.otf',
});
const Fonts = {
  SongJianTi: SongJianTi.className,
  HeiTi: HeiTi.className,
  KaiTi: KaiTi.className,
  SourceHanSansCNRegular: SourceHanSansCNRegular.className,
  SourceHanSerifCN: SourceHanSerifCN.className,
};

export default Fonts;
