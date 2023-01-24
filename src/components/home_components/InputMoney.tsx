import React, {useState} from 'react'
import { TextField, Box } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { NumericFormat, InputAttributes, NumericFormatProps } from 'react-number-format';

interface State {
  value: string;
}

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumberFormatCustom = React.forwardRef<
NumericFormatProps<InputAttributes>, CustomProps
>(
  function NumberFormatCustom(props, ref){
    const {onChange, ...other} = props;

    return(
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
        thousandSeparator
        valueIsNumericString
        prefix='$'
      />
    )
  }
)

export default function InputMoney() {
  const [values, setValues] = useState<State>({
    value:'1200'
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  return (
  		<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AttachMoneyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Valor" variant="standard"
          value={values.value} 
          InputProps={{
            inputComponent: NumberFormatCustom as any,
          }}
          onChange={handleChange}/>
      </Box>
    )
}