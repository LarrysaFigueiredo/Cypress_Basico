describe("Tickets", () => {
    beforeEach(() => cy.visit("https://bit.ly/2XSuwCW"));

    it("fills all the text input fields", () => {
        cy.get("#first-name").type("Larrysa");
        cy.get("#last-name").type("Figueiredo");
        cy.get("#email").type("larrysa.figueiredo@virtus.ufcg.edu.br");
        cy.get("#requests").type("Carnivora");
        cy.get("#signature").type("LFigueiredo");
    });

    it("has 'TICKETBOX' header's heading", () => {});
});