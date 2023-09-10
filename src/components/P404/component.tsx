// @flow
import * as React from 'react';
import Link from "next/link";
import styles from "./styles.module.css"

type Props = {

};
export const P404 = (props: Props) => {
    return (
        <div className={styles["not-found"]}>
            <h1>Oooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go to the <Link href="/" className={styles.link}>Homepage</Link></p>
        </div>
    );
};