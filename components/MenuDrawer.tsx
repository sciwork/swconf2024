"use client";

import { useState } from "react";
import { REGISTER_URL } from "@/configurations/constants";
import routes from "@/configurations/routes";
import Button from "@/components/Button";
import Drawer from "@/components/Drawer";
import DrawerLink from "@/components/DrawerLink";
import Logo from "@/components/Logo";

const MobileNavigator = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  return (
    <>
      <Button onClick={toggleMenu}>Menu</Button>
      <Drawer show={isMenuOpen} onClick={toggleMenu}>
        <div className="tw-px-6 tw-pb-4 tw-pt-8" onClick={toggleMenu}>
          <Logo variant="light" />
        </div>
        <div onClick={toggleMenu}>
          {routes
            .filter((route) => !route.disabled)
            .map((route) => (
              <DrawerLink key={route.path} to={route.path}>
                {route.name}
              </DrawerLink>
            ))}
        </div>
        <div className="tw-hidden tw-px-7 tw-py-6">
          <Button variant="action" to={REGISTER_URL} target="_blank">
            Register
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default MobileNavigator;
