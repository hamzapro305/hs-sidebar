import Sidebar from "../components/Sidebar";
import Head from "next/head";
import "../styles/style.scss";
import NextNProgress from "nextjs-progressbar";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <div className="Main-page">
      <Head>
        <title>For SideBar</title>
      </Head>
      <Sidebar />
      <NextNProgress />
      <AnimatePresence exitBeforeEnter>
        <motion.div className="content-page">
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
