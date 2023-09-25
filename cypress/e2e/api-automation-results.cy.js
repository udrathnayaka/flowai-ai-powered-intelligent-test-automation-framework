
it('Verify PATCH request for link https://reqres.in/api/users/2', () => {
    cy.request({
        method: 'PATCH',
        url: 'https://reqres.in/api/users/2',
        body: {
            name: 'morpheus',
            job: 'zion resident'
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
})