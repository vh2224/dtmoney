import { Card, CardContent, CardHeader } from "./styles";
import IncomeImage from '../../assets/income.svg';
import OutcomeImage from '../../assets/outcome.svg';
import TotalImage from '../../assets/total.svg';

export function Cards () {

    return (

        <CardContent>
            <Card>
				<CardHeader> 
					<p>Entrada</p>
					<img src={IncomeImage} alt="Entrada"/>
				</CardHeader>
				<strong>R$ 800,00</strong>
            </Card>
            <Card>
				<CardHeader> 
					<p>Saida</p>
					<img src={OutcomeImage} alt="Saida"/>
				</CardHeader>
				<strong>-R$ 500,00</strong>
            </Card>
            <Card>
				<CardHeader> 
					<p className="total">Total</p>
					<img src={TotalImage} alt="Total"/>
				</CardHeader>
				<strong>R$ 300,00</strong>
            </Card>
        </CardContent>
    
    );

}