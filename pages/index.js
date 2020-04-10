import Head from 'next/head'
import Link from "next/link";
import { getData } from "../content/api";

export const getStaticProps = async () => {
  const navlinks = await getData("document.type", "navbar");

  return {
    props: {
      
      navLinks: navlinks.data.results[0].data.links
    }
  };
};


const Home = ({ navLinks }) => (
  <div className="navlinks">
            {navLinks.map(x => {
              console.log("HEEEERE");
              console.log(x);
              if (x.internal === true) {
                return (
                  <Link key={x.name} href={x.path}>
                    <a>{x.name}</a>
                  </Link>
                );
              } else {
                return (
                  <a href={x.path} key={x.name} target="_blank">
                    {x.name}
                  </a>
                );
              }
            })}
  </div>
)

export default Home
