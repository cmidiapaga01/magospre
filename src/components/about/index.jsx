import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Traffic Manager / Web Developer
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          My journey as a traffic manager is guided by a fascinating set of tools and techniques,
          with a special focus on tracking and analysis. I manipulate data and insights to optimize
          the visibility and efficiency of digital campaigns, connecting brands to their consumers.
          Recently, I started exploring the world of web development, incorporating languages like JavaScript
          and using frameworks such as React.js and Next.js. This new spectrum of skills enhances my results daily
          in obtaining traffic while spending less and hitting more accurately. Join me as I continue to discover new techniques and technologies to shape the future of digital traffic and web development..
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=css,github,html,js,nextjs,nodejs,npm,react,tailwind,vercel,vite,vscode`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
