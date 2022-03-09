import Logo from '../../assets/logo.svg';
import { Component } from './styles';
import { Content } from './styles';

export function Header () {

    return (
        <Component>
            <Content>
                <img src={Logo} alt="dt-money" />
                <button type="button">
                    Nova Transação
                </button>
            </Content>
        </Component>
    )

}