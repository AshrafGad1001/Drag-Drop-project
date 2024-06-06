import { Validation } from "./validationTypes.js";

export const AssignValidateInputs = (titleValue: string, descValue: string) => {
    const titleInputRule: Validation = {
        type: "title",
        value: titleValue,
        required: true,
        minLength: 4,
        maxLength: 40
    };
    const descInputRule: Validation = {
        type: "description",
        value: descValue,
        required: true,
        minLength: 10,
        maxLength: 100
    };
    return [titleInputRule, descInputRule];
};

export const handleValidationErrors = (inputRule: Validation): string => {
    let errorMsg: string = "";
    // required
    if (inputRule.required && inputRule.value.trim().length === 0) {
        errorMsg = `${inputRule.type} is required`;
    }
    // min Length
    if (
        inputRule.minLength &&
        inputRule.minLength > inputRule.value.trim().length
    ) {
        errorMsg = `${inputRule.type} must be at least ${inputRule.minLength} characters`;
    }
    // max Length
    if (
        inputRule.maxLength &&
        inputRule.maxLength < inputRule.value.trim().length
    ) {
        errorMsg = `${inputRule.type} must be less than ${inputRule.maxLength} characters`;
    }

    return errorMsg;
};