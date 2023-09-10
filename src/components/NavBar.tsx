// @flow
import * as React from 'react';
import Link from "next/link";

type Props = {};
export const NavBar = (props: Props) => {
    return (
        <nav>
            <div className="logo">
                <h1>Next website</h1>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/listing">Listings</Link>
        </nav>
    );
};