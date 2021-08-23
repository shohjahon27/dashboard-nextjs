import React from "react";
import DashboardWrapper from "./DashboardWrapper";
import { Button, List, ListItem } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { MDCMenu } from "@material/menu";
import { toggleMenu } from "../../redux/actions";
import {
  faBars,
  faHome,
  faImages,
  faNewspaper,
  faTasks,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const menus = [
  { id: "home", to: "/", title: "Home", icon: faHome },
  { id: "todos", to: "/todos", title: "Todos", icon: faTasks },
  { id: "albums", to: "/albums", title: "Albums", icon: faVideo },
  // { id: "photos", to: "/photos", title: "Photos", icon: faImages },
  // { id: "posts", to: "/posts", title: "Posts", icon: faNewspaper },
];

const Dashboard = ({ children, menu }) => {
  const dispatch = useDispatch();

  const show = useSelector((state) => state.isSidebarShow);

  return (
    <DashboardWrapper>
          <div className={`sidebar ${(show && "show") || ""}`}>
              

        <h1 className="text-white">menu</h1>

        <List component="nav">
          {menus.map((v, i) => (
            <li>
              <Link key={v.to} href={`${v.to}`}>
                <a className={`${menu === v.id ? "active" : ""}`}>
                  <ListItem button>
                    <FontAwesomeIcon icon={v.icon} className="me-2" /> {v.title}
                  </ListItem>
                </a>
              </Link>
            </li>
          ))}
        </List>
      </div>
      <div className="rightside">
        <header className="shadow">
          <Button
            onClick={() => toggleMenu(dispatch)}
            variant="contained"
            disableElevation
            className="me-3"
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
          <img src="/vercel.svg" className="logo" alt="" />
        </header>
        <div className="content">{children}</div>
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;
