import React, {useEffect} from "react";
import ChatBoxComponent from "../../components/chatbox";
import "./index.scss"
import AvatarComponent from "../../components/avatar";
import CountDownComponent from "./components/countdown";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {actions} from "../../../services/avatar/actions";


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
            <ChatBoxComponent/>
            <AvatarComponent/>
            <div className={'customisation'}>
                Personnalisez l'avatar sur store.anthonykgross.fr
            </div>
        </div>
    )
}

export default connector(OpeningComponent);