import {useState} from "react";
import {omit} from "lodash";

const useForm = () => {
    const [values, valuesSet] = useState({});
    const [errors, errorsSet] = useState({});

    const onValidation = (event, name, value) => {
        switch (name){
            case "name":
                if (name === "name" && value.length === 0) {
                    errorsSet({
                        ...errors,
                        nameRequired: "This field in required"
                    });
                } else {
                    const newObj = omit(errors, "nameRequired");
                    errorsSet(newObj);
                }

                if (name === "name" && new RegExp(/['0-9']/).test(value)) {
                    errorsSet({
                        ...errors,
                        lettersOnly: "Only letters allowed"
                    });
                } else {
                    const newObj = omit(errors, "lettersOnly");
                    errorsSet(newObj);
                }
                break;
            case "number":
                if (value.length === 0) {
                    errorsSet({
                        ...errors,
                        numberRequired: "This field in required"
                    });
                } else {
                    const newObj = omit(errors, "numberRequired");
                    errorsSet(newObj);
                }

                if (value.length > 12) {
                    errorsSet({
                        ...errors,
                        numberLength: "Should contain 12 characters"
                    });
                } else {
                    const newObj = omit(errors, "numberLength");
                    errorsSet(newObj);
                }

                if (!new RegExp('^[0-9]*$').test(value)) {
                    errorsSet({
                        ...errors,
                        numberOnly: "Only numbers allowed"
                    });
                } else {
                    const newObj = omit(errors, "numberOnly");
                    errorsSet(newObj);
                }
                break;
            default:
                break;
        }
    }

    const onInputChange = event => {
        event.persist();

        const name = event.target.name;
        const val = event.target.value;

        onValidation(event, name, val);

        valuesSet({
            ...values,
            [name]: val
        });
    }

    const onSubmit = event => {
        event.preventDefault();

        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0 ){
            console.log(values);
        } else {
            alert("There is an Error!");
        }
    }

    return {
        values,
        errors,
        onSubmit,
        onInputChange
    }
}

export default useForm;
