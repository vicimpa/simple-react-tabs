import { Tabs, TabsItem } from "components/Tabs";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById('root')!)
  .render(
    <>
      <Tabs>
        <TabsItem title="Домашняя страничка">
          <h1>Hello wolrd!</h1>
        </TabsItem>
        <TabsItem title="Новости">
          <h1>News!</h1>
        </TabsItem>
        <TabsItem title="Что-то с чем-то">
          <h1>Бугага!</h1>
          <h1>Бугага!</h1>
        </TabsItem>
      </Tabs>
    </>
  );