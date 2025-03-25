import React from "react";
import {Input, FormControl, FormLabel} from "@chakra-ui/react";


interface FieldProps {
    id: string,
    name: string,
    type: string,
    onChange?: (e: React.ChangeEvent<unknown>) => void, 
    value: string,
    label: string, 
}

const FormField:React.FC<FieldProps> = (props) => {
    return (
        <FormControl>
                  <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
                  <Input
                    id={props.id}
                    name={props.name}
                    type={props.type}
                    variant="filled"
                    onChange={props.onChange}
                    value={props.value}
                  />
        </FormControl>
    )

}

export default FormField;