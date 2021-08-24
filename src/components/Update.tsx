import React from "react";
import dayjs from "dayjs";
import H2 from "./H2";

interface UpdateList {
  update_list: string;
}

interface Update {
  version: string;
  date: Date;
  list: UpdateList[];
}

interface Updates {
  updates: Update[];
}

const Update: React.FC<Updates> = ({ updates }) => {
  const UpdateComponent = updates.map((update, index) => {
    const UpdateListComponent: JSX.Element[] = update.list.map(
      (update_list, index) => {
        return (
          <li key={"update_list$index"} className="list-disc ml-6 mb-2">
            {update_list.update_list}
          </li>
        );
      }
    );
    const date = dayjs(update.date).format("YYYY-MM-DD");

    return (
      <li key={"update$index"} className="mb-4">
        <span className="font-bold">Version </span>
        <span className="font-bold num">{update.version}</span>
        <span className="ml-20 num">{date}</span>
        <ul className="mt-2">{UpdateListComponent}</ul>
      </li>
    );
  });

  return (
    <section id="update" className="py-20">
      <div className="px-8 mx-auto max-w-4xl lg:px-16">
        <H2>Update</H2>
        <div className="grid grid-cols-1 gap-0 text-gray-700 md:gap-16">
          <ul className="mt-10">{UpdateComponent}</ul>
        </div>
      </div>
    </section>
  );
};

export default Update;
