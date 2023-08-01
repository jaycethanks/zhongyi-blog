import Container from '@/components/common/Container';

const Footer = () => (
  <div className="w-full bg-BG_MAIN dark:bg-DARK_BG_MAIN">
  <Container>
    {/* <div className="flex justify-start gap-6 items-start select-none   ">
      <div>
        <Heading level={3}>快速导航</Heading>
        <ul>
          {quickEntrylinks.map(({ path, name }) => {
            return (
              <li key={name}>
                <a className="underline underline-offset-4 mt-2 inline-block" href={path}>{name}</a>
              </li>
            );
          })}
          <li></li>
        </ul>
      </div>
      <div>
        <Heading level={3}>更多</Heading>
        <ul>
          {more.map(({ path, name }) => {
            return (
              <li key={name}>
                <a className="underline underline-offset-4 mt-2 inline-block" href={path}>{name}</a>
              </li>
            );
          })}
          <li></li>
        </ul>
      </div>
    </div> */}
    This is a simple footer
  </Container>
  </div>

);

export default Footer;
