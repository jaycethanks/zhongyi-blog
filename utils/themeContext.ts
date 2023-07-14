import React from "react";


const ThemeContext = React.createContext({
  theme: true,//true for dark, false for light

});

export default ThemeContext;


/**
 * 我在组件a 中切换了 主题样式， 并将主题写入到localStorage, 我怎么在b组件中知道a 中知道什么时候切换了呢， 并且刷新b组件
 * 我不好拿到这个 context 这连个组件没有公共的父组件
 * 
 * A:如果这两个组件没有公共的父组件，那么你可以使用 React 的 Context API 和 useContext 钩子来共享上下文。具体来说，你可以在一个单独的文件中创建一个上下文，然后在需要使用的组件中通过 useContext 钩子来获取上下文中的数据。
 * // ThemeContext.js
import React from "react";

const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: () => {},
});

export default ThemeContext;

// ComponentA.js
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ComponentA() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    toggleTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div>
      <button onClick={handleThemeChange}>Change theme</button>
    </div>
  );
}

export default ComponentA;

// ComponentB.js
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ComponentB() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      This is Component B
    </div>
  );
}

export default ComponentB;
 */