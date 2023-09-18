// @flow
import * as React from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"

type Props = {};
export const Component = (props: Props) => {
    return (
        <nav>
            <div className="logo">
                <Image className={styles.logo__img} alt="Logo" width={128} height={77}  src="/android.svg"/>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/listing">Listings</Link>
        </nav>
    );
};