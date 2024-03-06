import {useState} from "react";

export function useInput(defaultValue, validationFn) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);

    const [didEdit, setDidEdit] = useState(false);

    function handleInputChange(event) {
        setEnteredValue(event.target.value);
        setDidEdit(false);
    }

    const valueIsValid = validationFn(enteredValue);

    function handleInputBlur() {
        setDidEdit(true);
    }

    return {
        value: enteredValue,
        handleInputBlur,
        handleInputChange,
        hasError: didEdit && !valueIsValid
    }
}