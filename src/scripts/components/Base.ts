export class Base<T extends HTMLElement>{
    private _template: HTMLTemplateElement;
    private _hostElement: HTMLDivElement;
    public element: T;
    constructor(private _templateId: string,
        private _hostId: string,
        private _elementId: string,
        private _positionElementStart: boolean
    ) {
        //Assign Template Element
        this._template = document.getElementById(this._templateId)! as HTMLTemplateElement;
        this._hostElement = document.getElementById(this._hostId)! as HTMLDivElement;
        // Import Template Content
        const _templateContent = document.importNode(this._template.content, true);
        this.element = _templateContent.firstElementChild! as T;
        if (this._elementId) {
            this.element.id = this._elementId;
            this._insertElement(this._positionElementStart);
        }
    }

    private _insertElement(positionStart: boolean) {
        const isInsertStart = positionStart ? "afterbegin" : "beforeend";
        this._hostElement.insertAdjacentElement(isInsertStart, this.element);
    }
}