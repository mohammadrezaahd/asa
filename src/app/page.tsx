"use client";

import AppCheckBox from "@/components/modules/partials/checkBox/CheckBox";
import AppMenu from "@/components/modules/partials/dropdown/Dropdown";

const fakeData = [
  { title: "cat 1", value: 1, subs: [] },
  { title: "cat 2", value: 2, subs: [] },
  {
    title: "cat 3",
    value: 3,
    subs: [
      {
        title: "sub 1",
        value: 301,
        subs: [{ title: "sub sub 1", value: 33002 }],
      },
      { title: "sub 2", value: 302 },
      { title: "sub 3", value: 303 },
      { title: "sub 4", value: 304 },
    ],
  },
  { title: "cat 4", value: 4, subs: [] },
  { title: "cat 5", value: 5, subs: [] },
];

export default function Home() {
  return (
    <AppMenu
      data={fakeData}
      renderItem={(item) => <AppCheckBox label={item.title} />}
    />
  );
}
