import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { useState } from "react";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start"></NavbarContent>
      <NavbarContent justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">LIFEHOUSE</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end"></NavbarContent>
    </Navbar>
  );
};

export default NavigationBar;
