import Heading from "@/components/common/Heading";

export default () => (
  <>
    <div className="flex h-48 flex-col justify-between bg-gray-100 text-sm text-gray-500 dark:bg-gray-800  dark:text-gray-600">
      <div>
        <Heading level={2}>Footer</Heading>
      </div>
      <div>
        <div className="flex justify-end">CopyRight JayceThanks'Blog</div>
        <div className="flex justify-end">Real Name: ZhongyiSun</div>
      </div>
    </div>
  </>
);
