import AWSIcon from '@/components/icons/AWSIcon';
import GithubIcon from '@/components/icons/GithubIcon';
import GoIcon from '@/components/icons/GoIcon';
import JupyterIcon from '@/components/icons/JupyterIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import MongoDBIcon from '@/components/icons/MongoDBIcon';
import NetlifyIcon from '@/components/icons/NetlifyIcon';
import NextJSIcon from '@/components/icons/NextJSIcon';
import NumpyIcon from '@/components/icons/NumpyIcon';
import PandasIcon from '@/components/icons/PandasIcon';
import PostgresSQLIcon from '@/components/icons/PostgresSQLIcon';
import PythonIcon from '@/components/icons/PythonIcon';
import RedisIcon from '@/components/icons/RedisIcon';
import TypeScriptIcon from '@/components/icons/TypeScriptIcon';
import { MailIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto pt-4">
      <nav className="flex justify-between items-center bg-blue-bell border-4 border-vampire-black shadow-[4px_4px_0_#0A0A0A] p-2 ">
        <h3 className="text-2xl hidden md:block font-semibold">Fabs Website</h3>
        <div className="flex w-full md:w-auto  justify-center md:justify-start gap-4">
          <Link
            href="/"
            className="border-2 border-vampire-black min-w-24 md:min-w-28 font-bold text-center transition-all ease-in bg-hot-pink shadow-[2px_2px_0_#0A0A0A] -translate-y-0.5"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className="border-2 border-vampire-black min-w-24 md:min-w-28 font-bold text-center transition-all ease-in hover:bg-hot-pink hover:shadow-[2px_2px_0_#0A0A0A] hover:-translate-y-0.5"
          >
            Blog
          </Link>
        </div>
      </nav>
      <section className="flex flex-col items-center md:items-start md:flex-row w-full mt-16 gap-4">
        <div className="flex">
          <Image
            src="/headshot.jpg"
            alt="headshot"
            width={680}
            height={680}
            className="size-48 object-center border-2 border-vampire-black shadow-[4px_4px_0_#0A0A0A]"
          />
        </div>
        <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-2/3">
          <h2 className="font-black uppercase text-4xl md:text-6xl text-center md:text-left">Hi There, I'm Fabs!</h2>
          <p className="md:text-2xl text-center md:text-left">Programmer and Analyst.</p>
          {/* <a className="bg-jonquil shadow-[4px_4px_0_#0A0A0A] border-2 border-vampire-black w-36 h-14 font-bold flex items-center justify-center transition-all ease-in hover:bg-hot-pink hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-0.5">
            See My Work
          </a> */}
          <div className="flex gap-2">
            <a href="https://github.com/fabstorres">
              <GithubIcon className="bg-jonquil hover:cursor-pointer shadow-[4px_4px_0_#0A0A0A] border-2 border-vampire-black size-12 md:size-16 font-bold flex items-center justify-center transition-all ease-in hover:bg-hot-pink hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-0.5" />
            </a>
            <a href="https://www.linkedin.com/in/fabian-r-torres">
              <LinkedinIcon className="bg-jonquil hover:cursor-pointer shadow-[4px_4px_0_#0A0A0A] border-2 border-vampire-black size-12 md:size-16 font-bold flex items-center justify-center transition-all ease-in hover:bg-hot-pink hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-0.5" />
            </a>
            <a href="mailto:fabian.rf.torres@gmail.com">
              <MailIcon className="bg-jonquil hover:cursor-pointer shadow-[4px_4px_0_#0A0A0A] border-2 border-vampire-black size-12 md:size-16 font-bold flex items-center justify-center transition-all ease-in hover:bg-hot-pink hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-0.5" />
            </a>
          </div>
        </div>
      </section>

      <div
        className="mt-8 w-full h-8 bg-vampire-black"
        style={{
          backgroundImage: 'radial-gradient(circle at top, #BFAFF2 50%, transparent 51%)',
          backgroundSize: '4rem 2rem',
          backgroundRepeat: 'repeat-x',
        }}
      />
      <div
        className="w-full h-8 bg-vampire-black"
        style={{
          backgroundImage: 'radial-gradient(circle at bottom, #BFAFF2 50%, transparent 51%)',
          backgroundSize: '4rem 2rem',
          backgroundRepeat: 'repeat-x',
        }}
      />
      <div
        className="w-full h-8 bg-vampire-black"
        style={{
          backgroundImage: 'radial-gradient(circle at top, #BFAFF2 50%, transparent 51%)',
          backgroundSize: '4rem 2rem',
          backgroundRepeat: 'repeat-x',
        }}
      />
      <section className="flex flex-col bg-vampire-black bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_2px,transparent_2px)] bg-[length:4rem_4rem]">
        <h1 className="uppercase font-extrabold underline z-10 text-3xl md:text-5xl m-4 w-fit relative before:absolute before:bg-white before:-top-2.5 before:-left-1.5 before:w-[105%] before:h-[110%] before:-z-10  before:rotate-2 before:border-2 before:border-vampire-black before:shadow-[4px_4px_0_white] before:origin-top-left">
          My Projects
        </h1>

        <div className="w-full flex flex-col md:grid grid-cols-4 p-4 gap-4">
          <article className="p-4 border-2 bg-jonquil border-vampire-black shadow-[4px_4px_0_#FACC15] col-span-3 w-full">
            <h1 className="font-bold text-3xl">Full Stack Development Projects</h1>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="https://fabs.chat"
                className="w-full md:w-60 size-60 min-w-60 ease-in transition-all duration-100 hover:rotate-3 hover:origin-top-left hover:cursor-pointer bg-white border-2 border-vampire-black shadow-[4px_4px_0_#0A0A0A] flex items-center justify-center overflow-hidden"
              >
                <Image
                  src="/fabs-chat-thumbnail.png"
                  alt="Fabs Chat thumbnail"
                  width={240}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </a>
              <div className="flex flex-col">
                <h2 className="font-semibold text-2xl">Fabs Chat</h2>
                <ul className="list-disc list-inside">
                  <li>Real-time streaming LLM responses.</li>
                  <li>Multimodal model support (text, images, vision).</li>
                  <li>Built-in web search capabilities.</li>
                  <li>Reasoning effort controls for model responses.</li>
                  <li>10+ active users and growing.</li>
                  <li>Everything you would expect from an AI chat app but better.</li>
                </ul>
              </div>
            </div>
          </article>
          <article className="p-4 border-2 bg-atomic-tangerine border-vampire-black shadow-[4px_4px_0_#ff6a59] col-span-1 row-span-2 w-full">
            <h1 className="font-bold text-3xl">Data Analysis Projects</h1>
            <a
              href="https://github.com/fabstorres/Case-Study-Bellabeat"
              className="w-full md:w-60 size-60 min-w-60 ease-in transition-all duration-100 hover:rotate-3 hover:origin-top-left hover:cursor-pointer bg-white border-2 border-vampire-black shadow-[4px_4px_0_#0A0A0A] flex items-center justify-center"
            >
              <GithubIcon className="size-16" />
            </a>
            <h2 className="font-semibold text-2xl mt-4">Belabeat Case Study</h2>
            <ul className="list-disc list-inside ">
              <li>Analyze Fitbit fitness tracker data to uncover user behavior trends.</li>
              <li>Provide actionable insights to support Bellabeat's marketing strategies and product development.</li>
            </ul>
          </article>
          <article className="p-4 border-2 order-last md:order-none bg-electric-lime border-vampire-black shadow-[4px_4px_0_#23ed27] col-span-1 w-full">
            <h1 className="font-bold text-3xl">More on GitHub</h1>
            <a
              href="https://github.com/fabstorres"
              className="w-full md:w-60 size-60 min-w-60 ease-in transition-all duration-100 hover:rotate-3 hover:origin-top-left hover:cursor-pointer bg-white border-2 border-vampire-black shadow-[4px_4px_0_#0A0A0A] flex flex-col items-center justify-center gap-2"
            >
              <GithubIcon className="size-16" />
              <span className="font-semibold">@fabstorres</span>
            </a>
          </article>
          <article className="p-4 border-2 bg-hot-pink border-vampire-black shadow-[4px_4px_0_#f472b6] col-span-2 w-full">
            <h1 className="font-bold text-3xl">Backend Projects</h1>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="https://github.com/fabstorres/web-crawler"
                className="w-full md:w-60 size-60 min-w-60 ease-in transition-all duration-100 hover:rotate-3 hover:origin-top-left hover:cursor-pointer bg-white border-2 border-vampire-black shadow-[4px_4px_0_#0A0A0A] flex items-center justify-center"
              >
                <GithubIcon className="size-16" />
              </a>
              <div className="flex flex-col">
                <h2 className="font-semibold text-2xl">Web Crawler</h2>
                <ul className="list-disc list-inside">
                  <li>Fetches & processes pages through jobs.</li>
                  <li>Retry logic (up to 10x) + timeout handling.</li>
                  <li>Tracks metadata for URLs & domains.</li>
                  <li>Queue-based design for scalable foundation.</li>
                  <li>Seeded with Wikipedia as starting point.</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
