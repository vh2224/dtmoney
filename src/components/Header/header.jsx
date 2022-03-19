import Logo from '../../assets/logo.svg';
import { Button } from '../Button/Button';
import { Component } from './styles';
import { Content } from './styles';

export function Header ({onClickNewTransaction}) {

    return (
        <Component>
            <Content>
                <img src={Logo} alt="dt-money" />
                <Button onClick={onClickNewTransaction}>Nova Transação</Button>
            </Content>
        </Component>
    )
}