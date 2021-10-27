import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FiLayers, FiInfo } from 'react-icons/fi';
// import { Link } from 'react-router-dom';

const Example = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <Dropdown direction="right" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        <FiInfo className="my-icon-class"/>Quick Links
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

function NavPill(props) {
    return (
      <>
      <ul className="nav flex-column">
      <li className="nav-item text-left">
        <a className="nav-link btn active my-nav-link rounded" aria-current="page" href="/search">
        <FiLayers/> Search Workloads
        </a>
      </li>
      <li className="nav-item">
        <Example/>
      </li>

      </ul>

  </>
    )
}
function SideBar(props) {
    return (
      <nav id="sidebarMenu" className="col-md-3 col-lg-3 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
            <NavPill/>
        </div>
      </nav>
    )
}


export default SideBar;