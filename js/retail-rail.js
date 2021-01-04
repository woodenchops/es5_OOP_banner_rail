import {retailOne} from './retail-rail-type.js';


function RetailRail(props) {

    this._title = props.title || 'TITLE';
    this._description = props.description || 'big sale, blah, blah';
    this._cta = props.cta;

    this._activeClass = 'active-retail-rail';
    this._attachTo = document.querySelector(props.attachTo || 'body');

    this.retailContainer = document.createElement('div');

    this._positionFixedToBottom = props.positionFixedToBottom || false;

    this.retailContainer.classList.add('retail-rail-container');

    this._positionFixedToBottom ? this.retailContainer.classList.add('positionFixedToBottom') : null;

    this._styles = props.styles;


    this._rail = retailOne(this);

    this.SetOpenState = (val) => {
        this._openState = val;
    };

    this.GetOpenState = () => {
        return this._openState;
    };

    this.ToggleActiveState = () => {
        this.GetOpenState() ? this.retailContainer.classList.add(this._activeClass) : this.retailContainer.classList.remove(this._activeClass); 
    };

    this.CloseRetailRail = () => {
        this.SetOpenState(false);
        this.ToggleActiveState();
    };

    this.OpenRetailRail = () => {
        this.SetOpenState(true);
        this.ToggleActiveState();
    };

    this.CloseRailButtonHandler = () => {
            this._closeBtn = this.retailContainer.querySelector('#icon-close');

            if(!this._closeBtn) {
                console.error('close icon not found');
                return;
            }

            this._closeBtn.addEventListener('click', () => this.CloseRetailRail());
           
    };


    this.RenderRetailRail = () => {
        if(this._rail) {
            this.SetOpenState(props.openState);
            this.retailContainer.innerHTML = this._rail;
            this._attachTo.appendChild(this.retailContainer);
            this.ToggleActiveState();
            this.HandleCTA();
            this.CloseRailButtonHandler();
        }
    };

    this.HandleCTA = () => {
        this._cta && this._cta.length > 0 && this._cta.map(cta => {
            if(!cta.id) {
                console.error('cta has no id');
                return;
            }
            let button = document.getElementById(cta.id);
            return button.addEventListener('click', () => {
               return cta.eventHandler && cta.eventHandler();
            });
        });
    };

    this.Init = () => {
        this.RenderRetailRail();
    };


    this.Init();

    return {
        OpenRail: this.OpenRetailRail,
        CloseRail: this.CloseRetailRail
    };
        
};

export default RetailRail;