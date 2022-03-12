import Logo from '../../assets/logo.svg';
import { Component } from './styles';
import { Content } from './styles';

export function Header ({onClickNewTransaction}) {

    return (
        <Component>
            <Content>
                <img src={Logo} alt="dt-money" />
                <button type="button" onClick={onClickNewTransaction}>
                    Nova Transação
                </button>
            </Content>
        </Component>
    )

}