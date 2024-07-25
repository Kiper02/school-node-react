import { useState } from "react";


const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [isTouched, setIsTouched] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        if(isTouched && e.target.value.trim() === '') {
            setError('Это поле обязательно');
        } else {
            setError('');
        }
    }

    const handleBlur = () => {
        setIsTouched(true);
        if (value.trim() === '') {
            setError('Это поле обязательно');
        } else {
            setError('');
        }
    };

    return {
        value,
        error,
        handleChange,
        handleBlur,
        isTouched,
        setValue,
        setIsTouched,
        setError,
    };
}


export default useInput;