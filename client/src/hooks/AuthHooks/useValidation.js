const useValidation = () => {
    const validate = (value) => {
        if (value.trim() === '') {
            return 'Это поле обязательно';
        }
        return '';
    };

    return {
        validate,
    };
};

export default useValidation;
