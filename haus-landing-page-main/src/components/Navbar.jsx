"use client";

import { Navbar } from "flowbite-react";
import hauss from "../assets/hauss.png"

export function NavigationBar() {
    return (


        <Navbar fluid rounded>
            <Navbar.Brand href="https://flowbite-react.com">
                <div className="ml-10">
                    <img src={hauss} alt="" />
                </div>
            </Navbar.Brand>
            <div className="flex">
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className="mr-32 indent-14">
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#footer">See More</Navbar.Link>
                <Navbar.Link href="#service">Service</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>

    );
}