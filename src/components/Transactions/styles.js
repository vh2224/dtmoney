import styled from 'styled-components';

export const Transactions = styled.div`

	display: flex;
	align-items: center;
	flex-direction: row;
	max-width: 1120px;
	margin: 0 auto;

	table{
		margin-top: 4rem;
		width: 100%;
		border-spacing: 0 0.5rem;

		th {
			padding: 1rem 2rem;
			line-height: 1.5rem;
			color: var(--text-body);
			font-weight: 400;
			text-align: left;
		}

		td {
			padding: 1rem 2rem;
			background: var(--white);
			border-radius: 0.20rem;
			color: var(--text-body);

			:first-child {
				color: var(--text-title);
			}

			&.deposit {
				color: var(--green);
			}

			&.withdraw {
				color: var(--red)
			}

		}

	}


`;