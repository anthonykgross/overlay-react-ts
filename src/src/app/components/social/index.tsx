import React, {useEffect, useState} from "react";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {findIcon} from "../../../tools/fontawesome";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface Social {
    icon: IconDefinition
    message: string
}

function SocialComponent() {
    const [social, setSocial] = useState<Social>({
        icon: findIcon('fab', 'twitter'),
        message: '@anthonykgross'
    });

    useEffect(() => {
        let count = 0;
        let interval = setInterval(() => {
            if (count === 0) {
                setSocial({
                    icon: findIcon('fab', 'twitter'),
                    message: '@anthonykgross'
                });
            }
            if (count === 1) {
                setSocial({
                    icon: findIcon('fab', 'youtube'),
                    message: 'youtube.anthonykgross.fr'
                });
            }

            if (count === 2) {
                setSocial({
                    icon: findIcon('fab', 'discord'),
                    message: 'discord.anthonykgross.fr'
                });
            }
            if (count === 3) {
                setSocial({
                    icon: findIcon('fas', 'store'),
                    message: 'store.anthonykgross.fr'
                });
            }
            count++;
            if (count === 4) {
                count = 0
            }
        }, 10000);
        return function cleanUp() {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className={'social'}>
            <FontAwesomeIcon icon={social.icon}/> {social.message}
        </div>
    )
}

export default SocialComponent;