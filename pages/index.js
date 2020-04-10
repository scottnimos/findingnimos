import Head from 'next/head'
import Link from "next/link";
import { getData } from "../lib/api";
import NavBar from "../components/navbar"

export const getStaticProps = async () => {
  const navlinks = await getData("document.type", "navbar");
  console.log(navlinks);
  return {
    props: {
      navLinks: navlinks.data.results[0].data.links
    }
  };
};


const Home =  props => (
  <NavBar links = { props.navLinks } />
)

export default Home
