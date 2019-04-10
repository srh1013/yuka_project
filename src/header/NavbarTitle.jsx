
import React from 'react';
import styles from '../header/NavbarTitle.module.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

export default class NavbarTitle extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className={styles.TopNavBar}>
        <Navbar expand="md">
          <NavbarBrand className={`${styles.Brand} m-auto`} href="/">YuKids</NavbarBrand> {/*Centre le titre quand on passe sur mobile*/}
          <NavbarToggler className="d-none" onClick={this.toggle} /> {/*Fais disparaitre le toggler quand on passe sur mobile */}
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className={styles.Link} href="/home/">Home </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={styles.Link} href="/contact/">Contact </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={styles.Link} href="/faq/">F.A.Q </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={styles.Link} href="/apropos/">A propos </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}