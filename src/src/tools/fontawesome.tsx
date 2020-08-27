import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {
    IconDefinition,
    findIconDefinition
} from '@fortawesome/fontawesome-svg-core'
import {IconName, IconPrefix} from "@fortawesome/fontawesome-common-types";
library.add(fas, fab)

export const findIcon = (prefix: string, iconName: string): IconDefinition => {
    return findIconDefinition({
        prefix: prefix as IconPrefix,
        iconName: iconName as IconName
    })
}