import styles from './styles.module.css'
import Link from "next/link";
export default function Home() {
    return (
        <div>
            <h1>Homepage</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolor perferendis quia rem sint?
                Architecto dolore esse harum, placeat quasi quibusdam rem voluptate! Eligendi est iusto molestiae quam,
                tenetur totam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolor perferendis quia rem sint?
                Architecto dolore esse harum, placeat quasi quibusdam rem voluptate! Eligendi est iusto molestiae quam,
                tenetur totam.</p>
            <Link
                href="/listing"
                className={styles.btn}
            >Listing</Link>
        </div>
    )
}
