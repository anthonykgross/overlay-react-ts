import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import './index.scss'
import {selector} from "../../../services/avatar/selectors";
import {State} from "../../../services/avatar/schema";

const mapStateToProps = (state: any): State => {
    return selector.getState(state);
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {};
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

function AvatarComponent(props: State) {
    let path = 'images/avatar/'

    let body = path + props.body.body + '.png';
    let top = path + 'top/' + props.top + '.png';
    let leftHand = path + 'left_hand/' + props.leftHand + '.png';
    let rightHand = path + 'right_hand/' + props.rightHand + '.png';
    let headHat = path + 'head/hat/' + props.head.hat + '.png';
    let headHair = path + 'head/hair/' + props.head.hair + '.png';
    let skin = path + 'skin/' + props.skin + '.png';
    let shoes = path + 'body/shoes/' + props.body.shoes + '.png';
    let pants = path + 'body/pants/' + props.body.pants + '.png';
    let bodyTop = path + 'body/top/' + props.body.top + '.png';


    return (
        <div className={'avatar'}>
            <div className="body" style={{
                backgroundImage: 'url("' + body + '")'
            }}/>
            <div className="top" style={{
                backgroundImage: 'url("' + top + '")'
            }}/>
            <div className="left-hand" style={{
                backgroundImage: 'url("' + leftHand + '")'
            }}/>
            <div className="right-hand" style={{
                backgroundImage: 'url("' + rightHand + '")'
            }}/>
            {
                props.accessories.map((accessory, index) => {
                    return (
                        <div key={index} className="accessories" style={{
                            backgroundImage: 'url("' + path + 'accessories/' + accessory + '.png")'
                        }}/>
                    )
                })
            }
            <div className="head-hat" style={{
                backgroundImage: 'url("' + headHat + '")'
            }}/>
            <div className="head-hair" style={{
                backgroundImage: 'url("' + headHair + '")'
            }}/>
            <div className="head-skin" style={{
                backgroundImage: 'url("' + skin + '")'
            }}/>
            <div className="body-shoes" style={{
                backgroundImage: 'url("' + shoes + '")'
            }}/>
            <div className="body-pants" style={{
                backgroundImage: 'url("' + pants + '")'
            }}/>
            <div className="body-top" style={{
                backgroundImage: 'url("' + bodyTop + '")'
            }}/>
        </div>
    )
}

export default connector(AvatarComponent);