import React from 'react';
import './style.css';
import profilePicture from '../../assets/images/profile-picture.jpg';

function About() {
    return (
        <div className="ps-4 pe-4">
            <h2 className="mt-4">About Me</h2>
            <img src={profilePicture} alt='profile' className="mt-3" />
            <p className="mt-3 lh-sm">
                Ut esse nostrud mollit dolore pariatur commodo minim non. Proident nostrud fugiat proident ullamco cupidatat eu commodo nisi ad. Qui enim eiusmod occaecat quis sint Lorem reprehenderit nostrud incididunt enim. Labore magna nostrud incididunt dolore tempor quis do pariatur mollit aute laborum. Aliqua commodo cupidatat ea mollit voluptate aute sunt sint veniam ea aliqua magna occaecat. Ut ea consequat proident exercitation non tempor ex irure elit irure ut deserunt proident. Voluptate Lorem tempor occaecat dolore sunt quis. Ipsum consequat consectetur do nostrud dolore amet eiusmod proident ipsum et commodo in exercitation. Sit labore incididunt adipisicing excepteur officia commodo. 
            </p>
            <p className="lh-sm">
                Quis Lorem reprehenderit sunt ipsum. Do laboris nisi commodo laboris nostrud tempor dolore ut. Nostrud cillum sint proident deserunt qui fugiat deserunt esse. Dolor laboris duis mollit ipsum esse labore. Sunt cillum ad dolor cupidatat sunt in. Duis cupidatat nostrud culpa aliquip nostrud do nulla sunt minim consectetur ad enim id. Irure cupidatat sint nostrud est non exercitation ullamco. Ea sunt reprehenderit eu sit proident ullamco labore elit. Eu aliquip occaecat in consectetur nisi culpa incididunt in commodo duis magna id duis. Excepteur incididunt pariatur esse exercitation labore eu proident do do. Lorem minim id ut amet nisi Lorem pariatur cupidatat veniam ut labore laboris consectetur consequat. Labore aliqua irure elit excepteur esse incididunt est consectetur. Eu tempor id cillum tempor exercitation ut Lorem sunt qui esse. Ut voluptate et laboris qui deserunt ad laborum. Consectetur ea officia ex et excepteur laborum qui consectetur commodo minim nulla minim. Officia magna aliqua laborum occaecat incididunt.
            </p>
        </div>
    )
}

export default About;