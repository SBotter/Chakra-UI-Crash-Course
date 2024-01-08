import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <ListIcon as={CalendarIcon} color="white" />
        <NavLink to="/">Dasboard</NavLink>
      </ListItem>
      <ListItem>
        <ListIcon as={EditIcon} color="white" />
        <NavLink to="/create">New Task</NavLink>
      </ListItem>
      <ListItem>
        <ListIcon as={AtSignIcon} color="white" />
        <NavLink to="/profile">Profile</NavLink>
      </ListItem>
    </List>
  );
}
