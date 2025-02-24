import { Base } from "./Base.js"
import { AssignValidateInputs, handleValidationErrors } from "utils/Validation/ValidationHelpers.js";
export class Fields extends Base<HTMLFormElement> {

    constructor() {
        super("fields", "app", "form", true);
        this._addProject();
    }

    private _addProject(): void {
        this.element.addEventListener("submit", this._handelAddProject.bind(this));
    }
    private _handelAddProject(e: Event): void {
        e.preventDefault();
        const [titleInput, descInput] = this._targetInputs();
        const [titleValue, descValue] = this._getInputValues(titleInput, descInput);

        if (this._validationInputValues(titleValue, descValue)) {
            console.log("OOOOOOOOOOOK");
        }
    }

    private _targetInputs(): HTMLInputElement[] {
        const titleInput = document.getElementById("title")! as HTMLInputElement;
        const descInput = document.getElementById("desc")! as HTMLInputElement;
        return [titleInput, descInput];
    }
    private _getInputValues(titleInput: HTMLInputElement, descInput: HTMLInputElement): string[] {
        const titleValue = titleInput.value;
        const descValue = descInput.value;
        return [titleValue, descValue];
    }

    private _validationInputValues(titleValue: string, descValue: string) {
        const [titleInputRule, descInputRule] = AssignValidateInputs(titleValue, descValue);
        const titleErrorMsg = handleValidationErrors(titleInputRule);
        const descErrorMsg = handleValidationErrors(descInputRule);

        if (titleErrorMsg.length)
            alert(titleErrorMsg);
        else if (descErrorMsg)
            alert(descErrorMsg);


        return true;
    }
}


