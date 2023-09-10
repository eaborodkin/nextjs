'use client'
import * as React from 'react'
import Link from "next/link"
import styles from "./styles.module.css"
import {useEffect} from "react"
import {useRouter} from "next/navigation"

type Props = {

};
export const P404 = (props: Props) => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 10000)
    })

    return (
        <div className={styles["not-found"]}>
            <h1>Oooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go to the <Link href="/" className={styles.link}>Homepage</Link></p>
        </div>
    );
};