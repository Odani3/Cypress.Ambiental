
const Email = "henrique.odani@gmail.com"


describe("Ambiental", () => {
  it("tests Ambiental", () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    cy.viewport(1478, 1021);
    cy.visit("https://staging-icara-ambiental.bauhaus.systems/home");

    cy.contains('button','Acessar').click()
    cy.contains('button','Registrar').click({force:true})
    cy.contains("Tipo de infração").click({force:true})
    cy.contains("Maus-tratos de animais").click({force:true});
    cy.get('input[name="denouncerEmail"]').type(Email)

    cy.get(':nth-child(2) > div.MuiFormControl-root > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root').click()
    cy.get(':nth-child(2) > div.MuiFormControl-root > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root').click();
    cy.get('input[name="denouncerName"]').type("Henrique")
    cy.get('input[name="denouncerCPF"]').type("44007853860");
    cy.get('input[name="denouncerCellphone"]').type("11993361016")
    cy.get('input[name="denouncerZipcode"]').type("88040270").wait(1000)
    cy.contains('button','Próximo').click({force:true});


    //Idenfiticação do Denunciado 
    



    

    cy.contains('button','ENTRAR').click();
    cy.contains("E-mail é obrigatório").should('be.visible')
    cy.contains("Senha é obrigatória").should('be.visible')

    cy.contains('input[name=Tipo de infraç~~ao')
    })
  })