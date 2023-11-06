import { FC, ReactNode, useContext, useEffect } from "react";

import { TabsContext } from "./Tabs";

export type TTabsItemProps = {
  title: ReactNode;
  children?: ReactNode;
};

export const TabsItem: FC<TTabsItemProps> = (props) => {
  const tabs = useContext(TabsContext);

  useEffect(() => {
    if (!tabs) return;
    tabs.add(props);

    return () => {
      tabs.delete(props);
    };
  }, []);

  return null;
};