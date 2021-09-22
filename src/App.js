import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionsCreators } from './state/index';
import './App.css';

function App() {
	const account = useSelector((state) => state.account);
	const dispatch = useDispatch();
	const { depositMoney, withdrawMoney } = bindActionCreators(
		actionsCreators,
		dispatch
	);

	return (
		<div className='App'>
			{account}
			<br />
			<br />
			<button onClick={() => depositMoney(200)}>Deposit</button>{' '}
			<button onClick={() => withdrawMoney(100)}>Withdraw</button>
		</div>
	);
}

export default App;
