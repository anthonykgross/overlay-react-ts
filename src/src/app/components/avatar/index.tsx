import React, {useEffect, useState} from "react";
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

    let [body, setBody] = useState(props.body.body);
    let [top, setTop] = useState(props.top);
    let [leftHand, setLeftHand] = useState(props.leftHand);
    let [rightHand, setRightHand] = useState(props.rightHand);
    let [headHat, setHeadHat] = useState(props.head.hat);
    let [headHair, setHeadHair] = useState(props.head.hair);
    let [skin, setSkin] = useState(props.skin);
    let [shoes, setShoes] = useState(props.body.shoes);
    let [pants, setPants] = useState(props.body.pants);
    let [bodyTop, setBodyTop] = useState(props.body.top);

    useEffect(() => {
        let interval = setInterval(() => {
            let i = Math.random() * 100;

            if (i > 0) {
                setSkin('happy')
            }
            if (i > 33) {
                setSkin('normal')
            }
            if (i > 66) {
                setSkin('speak')
            }
            setBody(props.body.body);
            setTop(props.top);
            setLeftHand(props.leftHand);
            setRightHand(props.rightHand);
            setHeadHat(props.head.hat);
            setHeadHair(props.head.hair);
            setShoes(props.body.shoes);
            setPants(props.body.pants);
            setBodyTop(props.body.top);
        }, 200);
        return function cleanUp() {
            clearInterval(interval);
        }
    }, [props])

    let extraClass = props.webcam ? 'webcam' : '';
    return (
        <div className={'avatar ' + extraClass}>
            <div className="layer body" style={{
                backgroundImage: 'url("images/avatar/' + body + '.png")'
            }}/>
            <div className="layer top" style={{
                backgroundImage: 'url("' + path + 'top/' + top + '.png")'
            }}/>
            <div className="layer left-hand" style={{
                backgroundImage: 'url("' + path + 'left_hand/' + leftHand + '.png")'
            }}/>
            <div className="layer right-hand" style={{
                backgroundImage: 'url("' + path + 'right_hand/' + rightHand + '.png")'
            }}/>
            {
                props.accessories.map((accessory, index) => {
                    return (
                        <div key={index} className="layer accessories" style={{
                            backgroundImage: 'url("' + path + 'accessories/' + accessory + '.png")'
                        }}/>
                    )
                })
            }
            <div className="layer head-hat" style={{
                backgroundImage: 'url("' + path + 'head/hat/' + headHat + '.png")'
            }}/>
            <div className="layer head-hair" style={{
                backgroundImage: 'url("' + path + 'head/hair/' + headHair + '.png")'
            }}/>
            <div className="layer head-skin" style={{
                backgroundImage: 'url("' + path + 'skin/' + skin + '.png")'
            }}/>
            <div className="layer body-shoes" style={{
                backgroundImage: 'url("' + path + 'body/shoes/' + shoes + '.png")'
            }}/>
            <div className="layer body-pants" style={{
                backgroundImage: 'url("' + path + 'body/pants/' + pants + '.png")'
            }}/>
            <div className="layer body-top" style={{
                backgroundImage: 'url("' + path + 'body/top/' + bodyTop + '.png")'
            }}/>
        </div>
    )
}

export default connector(AvatarComponent);