import React, {useEffect} from "react";
import ChatBoxComponent from "../../components/chatbox";
import "./index.scss"
import AvatarComponent from "../../components/avatar";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {actions} from "../../../services/avatar/actions";
import CountDownComponent from "../../components/countdown";


interface Props {
    nakedAvatar:  Function
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        nakedAvatar(){
            dispatch(actions.nakedAvatar());
        }
    };
};

const connector = connect(
    undefined,
    mapDispatchToProps
);

function OpeningComponent(props: Props) {
    useEffect(() => {
        props.nakedAvatar()
    }, [props])
    
    return (
        <div id={'opening'}>
            <div className={'welcome'}>
                <span>Je mets un slip et j'arrive ! </span>
                <CountDownComponent message={"Je l'ai !!!!"}/>
            </div>
            <div className={'block block-chatbox'}>
                <ChatBoxComponent/>
            </div>
            <div className={'block block-avatar'}>
                <AvatarComponent/>
            </div>
            <div className={'customisation'}>
                Dressing disponible sur http://store.anthonykgross.fr
            </div>
        </div>
    )
}

export default connector(OpeningComponent);