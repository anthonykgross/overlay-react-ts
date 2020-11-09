import React, {useEffect, useState} from "react";
import './index.scss'
import {PopupFadeComponent} from "../ui/popup";

function AdComponent() {
    const [count, setCount] = useState(0);
    let duration = 10000;
    let fadeDuration = 1000;

    useEffect(() => {
        let c = 0;
        let interval = setInterval(() => {
            c++;

            if (c === 8) {
                c = 0
            }
            setCount(c);
        }, duration);
        return function cleanUp() {
            clearInterval(interval);
        }
    }, [duration])

    return (
        <>
            {
                count === 0 &&
                <PopupFadeComponent className={'ad'} duration={duration} fadeInDuration={fadeDuration}
                                    fadeOutDuration={fadeDuration}>
                    <div className={'thumbnail'}>
                        <img src={'images/streamelements.png'} alt={''}/>
                    </div>
                    <div className={'message'}>
                        <h3>Les points</h3>
                        <p>
                            Ils sont nécessaire pour la customisation de l'avatar. Quand tu regardes, follow, sub,
                            cheer, tip & host la chaîne,
                            t'en gagnes !<br/>
                            <b>http://store.anthonykgross.fr</b>
                        </p>

                    </div>
                </PopupFadeComponent>
            }
            {
                count === 1 &&
                <PopupFadeComponent className={'ad'} duration={duration} fadeInDuration={fadeDuration}
                                    fadeOutDuration={fadeDuration}>
                    <div className={'thumbnail'}>
                        <img src={'images/twitch.png'} alt={''}/>
                    </div>
                    <div className={'message'}>
                        <h3>Devenir membre !</h3>
                        <p>
                            La meilleure manière de soutenir la chaîne. 3 emotes, pas de pubs et pas de slow mode
                            (quand on sera plus nombreux <span role={'img'} aria-label=":joy:">😂</span>).
                            D'ailleurs, avec Amazon prime ça ne te coute rien !<br/>
                            <b>https://www.twitch.tv/subs/anthonykgross</b>
                        </p>
                    </div>
                </PopupFadeComponent>
            }
            {
                count === 2 &&
                <PopupFadeComponent className={'ad'} duration={duration} fadeInDuration={fadeDuration}
                                    fadeOutDuration={fadeDuration}>
                    <div className={'thumbnail'}>
                        <img src={'images/github.png'} alt={''}/>
                    </div>
                    <div className={'message'}>
                        <h3>Github</h3>
                        <p>
                            La plupart des projets sont disponible sur mon Github. N'hésite pas à me suivre
                            afin d'être averti de tous les changements apportés.<br/>
                            <b>http://github.anthonykgross.fr</b>
                        </p>
                    </div>
                </PopupFadeComponent>
            }
            {
                count === 3 &&
                <PopupFadeComponent className={'ad'} duration={duration} fadeInDuration={fadeDuration}
                                    fadeOutDuration={fadeDuration}>
                    <div className={'thumbnail'}>
                        <img src={'images/discord.png'} alt={''}/>
                    </div>
                    <div className={'message'}>
                        <h3>Discord</h3>
                        <p>
                            Rencontre un développeur dans ta région en rejoingant le Discord<br/>
                            <b>http://discord.anthonykgross.fr</b>
                        </p>
                    </div>
                </PopupFadeComponent>
            }
            {
                count === 4 &&
                <PopupFadeComponent className={'ad'} duration={duration} fadeInDuration={fadeDuration}
                                    fadeOutDuration={fadeDuration}>
                    <div className={'thumbnail'}>
                        <img src={'images/youtube.png'} alt={''}/>
                    </div>
                    <div className={'message'}>
                        <h3>Youtube</h3>
                        <p>
                            La quasi totalité des VOD sont disponible sur Youtube.<br/>
                            <b>http://youtube.anthonykgross.fr</b>
                        </p>
                    </div>
                </PopupFadeComponent>
            }
            {
                count === 5 &&
                <PopupFadeComponent className={'ad'} duration={duration} fadeInDuration={fadeDuration}
                                    fadeOutDuration={fadeDuration}>
                    <div className={'thumbnail'}>
                        <img src={'images/twitter.png'} alt={''}/>
                    </div>
                    <div className={'message'}>
                        <h3>Twitter</h3>
                        <p>
                            Si tu tiens à assister tous les lives, n'hésite pas à me suivre sur Twitter.
                            Même-moi je me suis pour savoir quand je streame !<br/>
                            <b>http://twitter.anthonykgross.fr</b>
                        </p>
                    </div>
                </PopupFadeComponent>
            }
            {
                count === 6 &&
                <PopupFadeComponent className={'ad'} duration={duration} fadeInDuration={fadeDuration}
                                    fadeOutDuration={fadeDuration}>
                    <div className={'thumbnail'}>
                        <img src={'images/streamelements.png'} alt={''}/>
                    </div>
                    <div className={'message'}>
                        <h3>Customisation</h3>
                        <p>
                            Les points ça sert à quoi ? À personnaliser l'avatar <img
                            src={'https://static-cdn.jtvnw.net/emoticons/v1/1447198/1.0'} alt={''}/>.
                            Toi aussi customise-le !<br/>
                            <b>http://store.anthonykgross.fr</b>
                        </p>
                    </div>
                </PopupFadeComponent>
            }
            {
                count === 7 &&
                <PopupFadeComponent className={'ad'} duration={duration} fadeInDuration={fadeDuration}
                                    fadeOutDuration={fadeDuration}>
                    <div className={'thumbnail'}>
                        <img src={'images/streamelements.png'} alt={''}/>
                    </div>
                    <div className={'message'}>
                        <h3>Astuces !</h3>
                        <p>
                            !points : Connaitre son nombre de points<br/>
                            !redeem nom_objet : Personnaliser l'avatar<br/>
                            <b>https://streamelements.com/anthonykgross/commands</b>
                        </p>
                    </div>
                </PopupFadeComponent>
            }
        </>
    )
}

export default AdComponent;