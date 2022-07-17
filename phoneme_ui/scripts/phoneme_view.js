'use strict';

var currentDoc = document.currentScript.ownerDocument;

class PhonemeView extends HTMLElement {
    constructor() {
        super();

        var root = this.attachShadow({mode: 'closed'}); // .createShadowRoot() est déprécié

        var template = currentDoc.querySelector('#phoneme');
        var clone = document.importNode(template.content, true);
        
        // TODO attributes handling
        var symbol = this.getAttribute("symbol");
        if(symbol != null && this.symbol != symbol)
        {
            this.symbol = symbol;
        }
        clone.querySelector('.phoneme_symbol').innerText = this.symbol;

        var exampleAttr = this.getAttribute("example");
        if(exampleAttr != null && this.exampleAttr != exampleAttr)
        {
            this.exampleAttr = exampleAttr;
        }
        this.exampleAttr = this.exampleAttr.replace('{', '<strong>');
        this.exampleAttr = this.exampleAttr.replace('}', '</strong>');
        clone.querySelector('.phoneme_example').innerHTML = this.exampleAttr;

        var soundAttr = this.getAttribute("sound");
        
        clone.querySelector('.phoneme_grid').onclick = 
            function() 
            {
                var audio = new Audio(soundAttr);
                audio.crossOrigin = 'anonymous';
                audio.play();
            };

        root.appendChild(clone);
    }
}

customElements.define('phoneme-view', PhonemeView); // document.registerElement est dépréciée