import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'About',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolor perferendis quia rem sint?\n' +
        '                Architecto dolore esse harum, placeat quasi quibusdam rem voluptate! Eligendi est iusto molestiae quam,\n' +
        '                tenetur totam.',
};
export default function About() {
    return (
        <div>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis consequuntur deserunt
                dolores doloribus earum et fugiat, id, labore magnam obcaecati pariatur porro quia repellendus
                repudiandae sint temporibus unde veniam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis consequuntur deserunt
                dolores doloribus earum et fugiat, id, labore magnam obcaecati pariatur porro quia repellendus
                repudiandae sint temporibus unde veniam.</p>
        </div>
    )
}
