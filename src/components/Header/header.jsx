import Logo from '../../assets/logo.svg';
import { Component } from './styles';
import { Content } from './styles';

export function Header (props) {

    return (
        <Component>
            <Content>
                <img src={Logo} alt="dt-money" />
                <button type="button" onClick={props.openNewModalTransaction}>
                    Nova Transação
                </button>
            </Content>
        </Component>
    )

}