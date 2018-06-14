'use strict'

function Board ( height, width, parentElement ) {
    this.height = Number( height )
    this.width = Number( width )

    this.parentElement = parentElement

    // setup board html and css and append to
    // parent div.
    this.html = document.createElement( 'div' )
    this.html.classList.add( 'board' )
    this.html.style.display = 'grid'

    this.parentElement.appendChild( this.html )
}

Board.prototype = {

    fill: function () {
        this.board = new Array( this.height ).fill().map( function( row, rowIndex ) {
            return new Array( this.width ).fill().map(
                function( _, cellIndex ) {
                    return new Cell( rowIndex, cellIndex, cellIndex )
                }.bind( this ) )
            }.bind( this ) )

        this.board.forEach( ( row, rowIndex ) => {
            row.forEach( ( cell ) => {
                this.html.appendChild( cell.getHTML() )
            } )
        } )

        return this
    },

    findCell: function ( row, col ) {
        let r = row * this.width

        if ( this.board ) {
            return this.board[ r + col ]
        } else {
            return 'index not found'
        }
    },

    getSurroundingByCoords: function ( row, col ) {
        let surroundingCoords = [
            [ 0, 1 ], [ 1, 1 ], [ 1, 0 ], [ 0, -1 ], [ -1, -1 ], [ -1, 0 ], [ -1, 1 ], [ 1, -1 ] ]

        let surroundingArray = new Array()
        for ( let [ rOffset, cOffset ] of surroundingCoords ) {
            surroundingArray.push( this.findCell( Number( row ) + rOffset, Number( col ) + cOffset ) )
        }

        return surroundingArray
    },

    getSurroundingByCell: function ( cell ) {
        let row = Number( cell.html.style.boardRow )
        let col = Number( cell.html.style.gridColumn )

        let surroundingCoords = [
            [ 0, 1 ], [ 1, 1 ], [ 1, 0 ], [ 0, -1 ], [ -1, -1 ], [ -1, 0 ], [ -1, 1 ], [ 1, -1 ] ]

        let surroundingArray = new Array()
        for ( let [ rOffset, cOffset ] of surroundingCoords ) {
            surroundingArray.push( this.findCell( Number( row ) + rOffset, Number( col ) + cOffset ) )
        }

        return surroundingArray
    },

}
