import Head from "next/head";
import NavBar from "../../components/NavBar";
import Main from "../../components/Main";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Smeet | Project Manager</title>
        <meta name="description" content="my portfolio generated using Next app" />
      </Head>
      <NavBar />
      <Main />
      <Skills />
      <Contact />
    </div>
  );
}
