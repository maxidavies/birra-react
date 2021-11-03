import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SideBarElements.js";

export function SideBar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Birras</SidebarLink>
        <SidebarLink to="/">Aperitivos</SidebarLink>
        <SidebarLink to="/">Otros</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Tomar</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
}
