import React, { FC, FunctionComponent, MouseEventHandler } from 'react'
import { SearchBar } from './SearchBar';
import * as Icon from 'react-feather'
import { useNavigate } from 'react-router-dom';

export type BarButtonProps = {
    onClick: MouseEventHandler;
}

export const BarButton: FC<BarButtonProps> = ({onClick, children})  => {
  return <div className='bar-button' onClick={onClick}>{children}</div>
}

export type BarProps = {
    logo: string;
}

export function Bar(props: BarProps) {

    const navigate = useNavigate();

    return (
        <nav className="bar">
            <div className="flexy">
                <BarButton onClick={() => { navigate("/") }}>
                    <img id='logo' src={props.logo} alt="logo"></img>
                </BarButton>
                <BarButton onClick={() => { }}>
                    <Icon.Menu size={20} />
                    <span>&nbsp;</span>
                    <span>Menu</span>
                </BarButton>
            </div>
            <div className="flexy">
                <SearchBar/>
                <BarButton onClick ={() => {}}>
                    <div id="help">Help</div>
                </BarButton>
                <BarButton onClick={() => { }}>
                    <div id="signin">Sign in</div>
                </BarButton>
            </div>
        </nav>
    )
}