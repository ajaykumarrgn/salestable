/* eslint-disable */
 
describe('Sales Table Report', () => {

before(() => {
// Read data from the Excel file
cy.task('readExcel',{ filepath: 'cypress/variables/sales_table.xlsx', sheetName: 'Sheet1' }).then((data) => {
// Log the data for debugging
        //cy.log(JSON.stringify(data));  // This will print the data in the Cypress test runner
        cy.wrap(data).as('testdata');
    });
});

it('Sales Table', () => {
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    // Sequence 1: Login and navigate to Sales Table Report

    //Fetching data from the Excel sheet
    cy.get('@testdata').then((testdata) => {
        const source = testdata[0].Value;  
        const target = testdata[1].Value; 
        const fromDate = testdata[2].Value; 
        const toDate = testdata[3].Value; 
        const salesOrder = testdata[4].Value; 
        const customer = testdata[5].Value; 
        const deliveryNote = testdata[6].Value; 
        const incoterms = testdata[7].Value; 
        const customerGroup = testdata[8].Value; 
        const territory = testdata[9].Value; 
        const documentationLanguage = testdata[10].Value; 
        const reservedOrder = testdata[11].Value; 
        const itemCode = testdata[12].Value; 
        const idNumber = testdata[13].Value; 
        const rdgNumber = testdata[14].Value; 
        const rating = testdata[15].Value; 
        const trafoType = testdata[16].Value; 
        const hvVolt = testdata[17].Value; 
        const lvVolt = testdata[18].Value; 
        const vectorGroup = testdata[19].Value; 
        const uk = testdata[20].Value; 
        const tappings = testdata[21].Value; 
        const p0 = testdata[22].Value; 
        const pk = testdata[23].Value; 
        const li = testdata[24].Value; 
        const thdi = testdata[25].Value; 
        const ipProtection = testdata[26].Value; 
        const electroStaticScreen = testdata[27].Value; 
        const hv1Volt = testdata[28].Value; 
        const hv2Volt = testdata[29].Value; 
        const po = testdata[30].Value; 
        const poDate = testdata[31].Value; 
        const oaConfirmedDate = testdata[32].Value; 
        const plannedProductionEndDate = testdata[33].Value; 
        const plannedWeeks = testdata[34].Value; 
        const deliveryDate = testdata[35].Value; 
        const onTimeDelivery = testdata[36].Value; 
        const storageFee = testdata[37].Value; 
        const transformerStatus = testdata[38].Value; 
        const sapReference = testdata[39].Value; 
        const orderValue = testdata[40].Value; 
        const priceGTS = testdata[41].Value; 
        const invoiceNumber = testdata[42].Value; 
        const invoiceDate = testdata[43].Value; 
        const paymentCondition = testdata[44].Value; 
        const productionEndDate = testdata[45].Value; 
        const gtaSerialNumber = testdata[46].Value; 
        const companyGurantee = testdata[47].Value; 
        const antiVibrationPads = testdata[48].Value; 
        const enclosure = testdata[49].Value; 
        const ballPoint = testdata[50].Value; 
        const cupal = testdata[51].Value; 
        const busbars = testdata[52].Value; 
        const fan = testdata[53].Value; 
        const controlUnit = testdata[54].Value; 
        const sensors = testdata[55].Value; 
        const forkLift = testdata[56].Value; 
        const siliconFree = testdata[57].Value; 
        const testLab = testdata[58].Value; 
        const otherAccessories = testdata[59].Value; 
        const engineeringRequired = testdata[60].Value; 
        const earthingSwith = testdata[61].Value; 
        const surgeArrester = testdata[62].Value; 
        const sgbAccount = testdata[63].Value; 
        const agent = testdata[64].Value; 
        const notes = testdata[65].Value; 
        const prepaymentInvoice = testdata[66].Value; 
        const prepaymentStatus = testdata[67].Value; 
        const prepaymentInvoice2 = testdata[68].Value; 
        const prepaymentStatus2 = testdata[69].Value; 
        const itemCode1 = testdata[70].Value; 
        const rating1 = testdata[71].Value; 
        const hvVolt1 = testdata[72].Value; 
        const uk1 = testdata[73].Value; 
        const po1 = testdata[74].Value; 
        const pk1 = testdata[75].Value; 
        const li1 = testdata[76].Value; 
        const ipProtection1 = testdata[77].Value; 
        const orderValue1 = testdata[78].Value; 
        const priceGST1 = testdata[79].Value; 
        const cupal1 = testdata[80].Value; 
        

    cy.visit(source);
    
    // Typing into inputs
    cy.get('#login_email').type(username);
    cy.get('#login_password').type(password);
    
    // Clicking the login button and waiting for navigation
    // cy.get('.form-signin > :nth-child(1) > .page-card-actions > .btn').click({force: true});
    cy.get('.for-login > .login-content > .form-signin > .page-card-actions > .btn').click({force: true});
    cy.location('pathname', { timeout: 10000 }).should('include', '/app');
    
    // Visit the target URL
    cy.visit(target);
    
    // Clear and type dates in the input fields
    cy.wait(1000);
    
    cy.get('#page-query-report > .page-body > .page-wrapper > .page-content > .row > .layout-main-section-wrapper', { timeout: 10000 }).should('be.visible');
    
    cy.get('#page-query-report > .page-body > .page-wrapper > .page-content > .row > .layout-main-section-wrapper', { timeout: 10000 }).should('be.visible');
    cy.wait(30000);
    cy.get('.dt-cell--col-2 > .dt-cell__content > .dt-filter', { timeout: 10000 })
        .should('be.visible')
        .type(salesOrder);
    cy.wait(4000);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-2 > .dt-cell__content', { timeout: 10000 })
        .should('be.visible')
        .contains(salesOrder);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-4 > .dt-cell__content').contains(customer);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-3 > .dt-cell__content').contains(deliveryNote);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-6 > .dt-cell__content').contains(incoterms);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-5 > .dt-cell__content').contains(customerGroup);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-7 > .dt-cell__content').contains(territory);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-8 > .dt-cell__content').contains(documentationLanguage);
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-9 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(reservedOrder);
    //     });
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-10 > .dt-cell__content').contains(itemCode);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-11 > .dt-cell__content').contains(idNumber);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-12 > .dt-cell__content').contains(rdgNumber);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-13 > .dt-cell__content').contains(trafoType);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-14 > .dt-cell__content').contains(rating);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-15 > .dt-cell__content').contains(hvVolt);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-16 > .dt-cell__content').contains(lvVolt);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-17 > .dt-cell__content').contains(vectorGroup);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-18 > .dt-cell__content').contains(uk);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-19 > .dt-cell__content').contains(tappings);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-20 > .dt-cell__content').contains(p0);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-21 > .dt-cell__content').contains(pk);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-22 > .dt-cell__content').contains(li);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-23 > .dt-cell__content').contains(thdi);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-24 > .dt-cell__content').contains(ipProtection);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-25 > .dt-cell__content').contains(electroStaticScreen);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-26 > .dt-cell__content').contains(hv1Volt);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-27 > .dt-cell__content').contains(hv2Volt);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-28 > .dt-cell__content').contains(po);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-29 > .dt-cell__content').contains(poDate);
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-30 > .dt-cell__content')
    .should('have.css', 'color', 'rgb(51, 60, 68)');
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-31 > .dt-cell__content').contains(oaConfirmedDate);
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-32 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(plannedProductionEndDate);
    //     });
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-33 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(plannedWeeks);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-34 > .dt-cell__content').contains(deliveryDate); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-35 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(onTimeDelivery);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-36 > .dt-cell__content').contains(storageFee);
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-37 > .dt-cell__content').contains(transformerStatus);
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-38 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(sapReference);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-39 > .dt-cell__content').contains(orderValue);
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-40 > .dt-cell__content').contains(priceGTS);
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-41 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(invoiceNumber);
    //     }); 
        
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-42 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(invoiceDate);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-43 > .dt-cell__content').contains(paymentCondition); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-44 > .dt-cell__content') 
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(productionEndDate);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-45 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(gtaSerialNumber);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-46 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(companyGurantee);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-47 > .dt-cell__content').contains(antiVibrationPads);
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-48 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(enclosure);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-49 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(ballPoint);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-50 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(cupal);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-51 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(busbars);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-52 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(fan);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-53 > .dt-cell__content').contains(controlUnit);
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-54 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(sensors);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-55 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(forkLift);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-56 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(siliconFree);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-57 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(testLab);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-58 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(otherAccessories);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-59 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(engineeringRequired);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-60 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(earthingSwith);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-61 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(surgeArrester);
    //     }); 
    
    cy.get('.dt-scrollable > .dt-row > .dt-cell--col-62 > .dt-cell__content').contains(sgbAccount);
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-63 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(agent);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-64 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(notes);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-65 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(prepaymentInvoice);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-66 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(prepaymentStatus);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-67 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(prepaymentInvoice2);
    //     }); 
    // cy.get('.dt-scrollable > .dt-row > .dt-cell--col-68 > .dt-cell__content')
    //     .invoke('text')
    //     .should((text) => {
    //     expect(text.trim()).to.equal(prepaymentStatus2);
    //     });
    }); 
    });
});
