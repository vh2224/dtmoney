import { useContext } from "react";
import { Card, CardContent, CardHeader } from "./styles";
import IncomeImage from '../../assets/income.svg';
import OutcomeImage from '../../assets/outcome.svg';
import TotalImage from '../../assets/total.svg';
import { TransactionsContext } from "../../TransactionsContext";

export function Cards () {

	const {newTransactions} = useContext(TransactionsContext);

	const totalDeposits = newTransactions.reduce((val, transaction) => {
		if(transaction.type === 'deposit') {
			return val += transaction.value;
		}

		return val;

	}, 0);

	const totalWithdraw = newTransactions.reduce((val, transaction) => {
		if(transaction.type === 'withdraw') {
			return val += transaction.value;
		}
		return val;
	}, 0)

	const total = totalDeposits - totalWithdraw;

	function numberTransform (value) {
		return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value);
	}
	
	return (
		<CardContent>
			<Card>
				<CardHeader> 
					<p>Entrada</p>
					<img src={IncomeImage} alt="Entrada"/>
				</CardHeader>
				<strong>{numberTransform(totalDeposits)}</strong>
			</Card>
			<Card>
				<CardHeader> 
					<p>Saida</p>
					<img src={OutcomeImage} alt="Saida"/>
				</CardHeader>
				<strong>-{numberTransform(totalWithdraw)}</strong>
			</Card>
			<Card className={total >= 0 ? '' : 'withdraw'}>
				<CardHeader> 
					<p className="total">Total</p>
					<img src={TotalImage} alt="Total"/>
				</CardHeader>
				<strong>{numberTransform(total)}</strong>
			</Card>
		</CardContent>
	);
}