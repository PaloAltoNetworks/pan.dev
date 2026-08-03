"use client";

import { Tabs } from "./Tabs.js";

export function TabsDemo() {
  const tabs = [
    {
      title: "API Reference Docs",
      value: "api-reference",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#FA582D] to-[#AE3B1C]">
          <p>API Reference Docs</p>
          <TabsImage src="img/homepage-tabs/APIReferenceExample.png" />
        </div>
      ),
    },
    {
      title: "Developer Docs",
      value: "developer-docs",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#FA582D] to-[#AE3B1C]">
          <p>Developer Docs</p>
          <TabsImage src="img/homepage-tabs/DeveloperDocsExample.png" />
        </div>
      ),
    },
    {
      title: "Getting Started Guides",
      value: "getting-started-guides",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#FA582D] to-[#AE3B1C]">
          <p>Getting Started Guides</p>
          <TabsImage src="img/homepage-tabs/GettingStartedExample.png" />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-6xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const TabsImage = ({ src }) => {
  return (
    <div className="relative z-10 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      <img
        src={src}
        alt="Landing page preview"
        className="aspect-[16/9] h-auto w-full object-cover"
        height={1000}
        width={1000}
      />
    </div>
  );
};
