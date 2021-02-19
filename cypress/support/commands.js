
Cypress.Commands.add('checkCanvas', (borderWidth, borderHeight, canvasBody) => {
    for(var width=1; width<=borderWidth; width++){
        //canvas Header
        cy.get('thead > tr > :nth-child('+width+')').should("exist")
        cy.get('thead > tr > :nth-child('+width+')').contains("-")

        //canvasBody
        for(var height=1; height<=borderHeight; height++){

            //canvasEdges start
            cy.get('tbody > :nth-child('+height+') > :nth-child(1)').should("exist")
            cy.get('tbody > :nth-child('+height+') > :nth-child(1)').contains("|")

            if(width != 1 && width < borderWidth-1){
                cy.get('tbody > :nth-child('+height+') > :nth-child('+width+')').exist
                if(canvasBody[height-1][width-2])
                    cy.get('tbody > :nth-child('+height+') > :nth-child('+width+')').contains( canvasBody[height-1][width-2])
            }

            //canvasEdges end
            cy.get('tbody > :nth-child('+height+') > :nth-child('+borderWidth+')').should("exist")
            cy.get('tbody > :nth-child('+height+') > :nth-child('+borderWidth+')').contains("|")

        }
    }
})
