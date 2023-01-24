import InputText from '../../components/home_components/InputText'
import InputMoney from '../../components/home_components/InputMoney'
import ButtonText from '../../components/home_components/ButtonText'
import './Transitions.css'

export default function Transitions(){
	return(
		<div className="template">
			<div>
				<h1>Transições</h1>
	            <InputText text="Nome do Usuário"/>
	            <InputMoney/>
				<ButtonText text="Pagar"/>
            </div>
		</div>
		)
}