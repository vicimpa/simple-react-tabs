import { useReactiveSet } from "hooks/useReactiveSet";
import { ReactiveSet } from "library/ReactiveSet";
import { createContext, FC, ReactNode, useState } from "react";

import styles from "./Tabs.module.sass";
import { TTabsItemProps } from "./TabsItem";

export type TTabsProps = {
  children?: ReactNode;
};

export const TabsContext = createContext<ReactiveSet<TTabsItemProps> | null>(null);

export const Tabs: FC<TTabsProps> = ({ children }) => {
  const tabs = useReactiveSet<TTabsItemProps>();
  const [current, setCurrent] = useState(0);

  const tabsArray = [...tabs];
  const currentTab = tabsArray[current];

  return (
    <div className={styles.tabs}>
      <div className={styles.header}>
        {tabsArray.map(({ title }, i) => (
          <div className={styles.item} key={i} onClick={(() => setCurrent(i))}>
            {title}
          </div>
        ))}
      </div>
      <div>
        {currentTab?.children}
        <TabsContext.Provider value={tabs}>
          {children}
        </TabsContext.Provider>
      </div>
    </div>
  );
};