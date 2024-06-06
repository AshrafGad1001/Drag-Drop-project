import { Base } from "./Base.js";
import { AssignValidateInputs, handleValidationErrors } from "utils/Validation/ValidationHelpers.js";
export class Fields extends Base {
    constructor() {
        super("fields", "app", "form", true);
        this._addProject();
    }
    _addProject() {
        this.element.addEventListener("submit", this._handelAddProject.bind(this));
    }
    _handelAddProject(e) {
        e.preventDefault();
        const [titleInput, descInput] = this._targetInputs();
        const [titleValue, descValue] = this._getInputValues(titleInput, descInput);
        if (this._validationInputValues(titleValue, descValue)) {
            console.log("OOOOOOOOOOOK");
        }
    }
    _targetInputs() {
        const titleInput = document.getElementById("title");
        const descInput = document.getElementById("desc");
        return [titleInput, descInput];
    }
    _getInputValues(titleInput, descInput) {
        const titleValue = titleInput.value;
        const descValue = descInput.value;
        return [titleValue, descValue];
    }
    _validationInputValues(titleValue, descValue) {
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
//# sourceMappingURL=Fields.js.map