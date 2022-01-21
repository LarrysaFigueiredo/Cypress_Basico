describe("Tickets", () => {
    beforeEach(() => cy.visit("https://bit.ly/2XSuwCW"));

    it("fills all the text input fields", () => {
        cy.get("#first-name").type("Larrysa");
        cy.get("#last-name").type("Figueiredo");
        cy.get("#email").type("larrysa.figueiredo@virtus.ufcg.edu.br");
        cy.get("#requests").type("Carnivora");
        cy.get("#signature").type("LFigueiredo");
    });

    it("select two tickets", () => {
        cy.get("#ticket-quantity").select("2");
    }); 

    it("select 'vip' ticket type", () => {
        cy.get("#vip").check();
    });
    it("select 'social media' checkbox", () => {
        cy.get("#social-media").check();
    });

    it("selects 'friend', and 'publication', then uncheck 'friend'", () => {
        cy.get("#friend").check();
        cy.get("#publication").check();
        cy.get("#friend").uncheck();
    });

    it("has 'TICKETBOX' header's heading", () => {});
});