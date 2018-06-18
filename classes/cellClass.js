'use strict'

function Cell ( row, col, value = '' ) {
    this.value = value
    this.row = Number( row )
    this.col = Number( col )
}

Cell.prototype = {

    /*
    *  Edit this function to create the css for the elemtnts your
    *  grid to be made up of.
    * */

    getHTML: function () {
        if ( this.html ) return this.html

        // html attributes data etc
        this.html = document.createElement( 'div' )
        this.html.textContent = this.value

        // css values
        this.html.style.gridRow = this.row + 1
        this.html.style.gridColumn = this.col + 1
        this.html.style.backgroundColor = 'teal'
        this.html.style.margin = '5px'
        this.html.style.minHeight = '50px'
        this.html.style.minWidth = '70px'

        return this.html
    },

    setValue: function ( value ) {
        this.value = value
        this.html.textContent = this.value
    },

    setClass: function ( newClass ) {
        this.html.classList.add( newClass )
    },

    removeClass: function ( oldClass ) {
        this.html.classList.remove( oldClass )
    },

}

