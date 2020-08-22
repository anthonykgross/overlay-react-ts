import {UpdateNbViewerAction} from "./schema";

export const channels = {
    VIEWER_UPDATE: 'services/viewer/update',
};

export const actions = {
    updateNbViewer: (count: number): UpdateNbViewerAction => {
        return {
            type: channels.VIEWER_UPDATE,
            response: {
                count: count
            }
        };
    }
}