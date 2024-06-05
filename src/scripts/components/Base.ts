export class Base<T extends HTMLElement>{
    private _template!: HTMLTemplateElement;
    private _hostElement!: HTMLDivElement;
    public element: T;
    constructor(private _templateId: string,
        private _hostId: string,
        private _elementId: string,
        private _positionElementStart: boolean
    ) {
        const [template, _] = this._targetElement(this._templateId, this._hostId);

        // Import Template Content
        const _templateContent = document.importNode(template.content, true);
        this.element = _templateContent.firstElementChild! as T;
        if (this._elementId) {
            this.element.id = this._elementId;
            this._insertElement(this._positionElementStart);
        }
    }

    private _targetElement(TemplateId: string, hostId: string):
        [HTMLTemplateElement, HTMLDivElement] {
        this._template = document.getElementById(TemplateId)! as HTMLTemplateElement;
        this._hostElement = document.getElementById(hostId)! as HTMLDivElement;
        return [this._template, this._hostElement];
    }

    private _insertElement(positionStart: boolean) {
        const isInsertStart = positionStart ? "afterbegin" : "beforeend";
        this._hostElement.insertAdjacentElement(isInsertStart, this.element);
    }
}