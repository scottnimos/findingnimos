import Link from "next/link";

/**
 * Usage:
 * <NavBar {links = [{name,path,internal},..]} />
 */

const NavBar = props => {
    return (
        <div className="navBar">
            {props.links.map(x => {
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
)};

export default NavBar;