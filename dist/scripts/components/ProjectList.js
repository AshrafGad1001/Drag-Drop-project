export class projectList {
    constructor() {
        this._template = document.getElementById("list");
        this._hostElement = document.getElementById("app");
        const _templateContent = document.importNode(this._template.content, true);
        this._projectsContainer = _templateContent.firstElementChild;
        this._hostElement.insertAdjacentElement("beforeend", this._projectsContainer);
    }
}
//# sourceMappingURL=ProjectList.js.map