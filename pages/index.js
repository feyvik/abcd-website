import Head from "next/head";
import style from "../styles/index.module.css";
import Image from "next/image";
import { BlogCard, ImageCard, InfoCard } from "../components/Cards";
import { Heading1, Heading2, Heading3, Paragraph } from "../components/Type";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ABCDevs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="bg-abcdteam bg-cover bg-top min-h-screen w-full flex flex-col object-fill justify-start">
          <div
            className={`flex-1 w-full sm:w-full xs:w-full lg:w-full px-6 pt-64 text-center text-2xl ${style.movement}`}
          >
            <p>Welcome to ABCD</p>
            <Heading1>AFRICA'S BLOCKCHAIN CENTER FOR DEVELOPERS</Heading1>
          </div>
        </div>
        <div className="w-full min-h-screen text-center mt-10">
          <Heading2>More About ABCD</Heading2>
          <div className="flex flex-col md:flex-wrap lg:flex-row items-center w-full min-h-80">
            <InfoCard>
              <div className="w-3/4 pl-6">
                <Heading3>Who We Are</Heading3>
                <Paragraph>
                  AFRICA'S BLOCKCHAIN CENTER FOR DEVELOPERS ( ABCD ), is an
                  online Blockchain marketplace for startup that connect
                  Blockchain startup with investors and a Center for Blockchain
                  Startups Acceleration and Innovation Hub
                </Paragraph>
              </div>
            </InfoCard>

            <ImageCard>
              <Image
                src="/abcd.jpg"
                width="500"
                height="400"
                objectFit="fill"
                className="m-0 p-0 rounded-lg shadow-lg text-center"
              />
            </ImageCard>
          </div>

          <div className="flex flex-col md:flex-wrap lg:flex-row items-center w-full min-h-80">
            <ImageCard>
              <Image
                src="/Abcd.png"
                width="500"
                height="400"
                objectFit="fill"
                className="m-0 p-0 rounded-lg shadow-lg text-center"
              />
            </ImageCard>
            <InfoCard>
              <div className="w-3/4 pl-6">
                <Heading3>What We Do</Heading3>
                <Paragraph>
                  We mentor, train potential businesses and we build African
                  blockchain hub that will incubate blockchain-based startup and
                  an online marketplace that will connect Blockchain startups to
                  investors.
                </Paragraph>
              </div>
            </InfoCard>
          </div>

          <div className="mx-5 md:mx-10 my-20 ">
            <Heading2>Events</Heading2>
            <section className="mt-6 w-full flex justify-center">
              <iframe
                width="660"
                height="415"
                src="https://www.youtube.com/embed/6-MvvZrhg40"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </section>
          </div>
        </div>
      </body>
    </div>
  );
}
