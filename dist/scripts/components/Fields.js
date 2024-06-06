import { Base } from "./Base.js";
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
        console.log(titleValue, descValue);
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
}
//# sourceMappingURL=Fields.js.map