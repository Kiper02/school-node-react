import { useState } from 'react';

const useForm = () => {
    const [showEye, setShowEye] = useState(false);

    const toggleShowEye = () => {
        setShowEye(!showEye);
    };

    return {
        showEye,
        toggleShowEye,
    };
};

export default useForm;
