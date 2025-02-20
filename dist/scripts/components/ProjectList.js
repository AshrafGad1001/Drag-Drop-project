import { Base } from "./Base.js";
export class projectList extends Base {
    constructor(_status) {
        super("project-list", "app", `${_status}-projects`, false);
        this._status = _status;
        this.renderProjectList();
    }
    renderProjectList() {
        const title = this.element.querySelector(".title");
        const list = this.element.querySelector("ul");
        list.classList.add(`${this._status}-list`);
        title.textContent = `${this._status}-projects`;
    }
}
//# sourceMappingURL=ProjectList.js.map