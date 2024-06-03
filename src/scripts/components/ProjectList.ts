export class projectList {
    private _template: HTMLTemplateElement;
    private _projectsContainer: HTMLDivElement;
    private _hostElement: HTMLDivElement;

    constructor() {
        this._template = document.getElementById("list")! as HTMLTemplateElement;
        this._hostElement = document.getElementById("app")! as HTMLDivElement;
        const _templateContent = document.importNode(this._template.content, true);
        this._projectsContainer = _templateContent.firstElementChild! as HTMLDivElement;
        this._hostElement.insertAdjacentElement("beforeend", this._projectsContainer);
    }
}