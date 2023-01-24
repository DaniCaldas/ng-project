import Button from '@mui/material/Button';
interface Props{
	text:string
}

export default function ButtonText({text}: Props){
	return (
		<Button variant="outlined">{text}</Button>
		)
}
