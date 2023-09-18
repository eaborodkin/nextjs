import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Listing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolor perferendis quia rem sint?\n' +
        '                Architecto dolore esse harum, placeat quasi quibusdam rem voluptate! Eligendi est iusto molestiae quam,\n' +
        '                tenetur totam.',
};
export default function Listing() {
    return (
        <div>
            <h1>Listing</h1>
        </div>
    )
}