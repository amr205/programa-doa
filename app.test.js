const makeApp = require("./app")
const request = require("supertest");
const { response } = require("express");

const getUser = jest.fn()
const app = makeApp({
    getUser
})

describe('user API',()=>{
    it('should run', ()=>{});

    it('POST /authenticate --> should return 404 when user is not in database', ()=>{
        getUser.mockClear()
        getUser.mockReturnValue(null)

        return request(app).post("/authenticate")
            .send({
                username:"myNonUser",
                password:"passldj"
            })
            .expect(404).then(
                (response)=>{
                    expect(getUser.mock.calls.length).toBe(1)
                }
            )
    });

    it('POST /authenticate --> should return user when user is in database', ()=>{
        getUser.mockClear()
        getUser.mockReturnValue({
            username:"myUser",
            password:"MochaJest1212",
            number: 4
        })

        return request(app).post("/authenticate")
            .send({
                username:"myUser",
                password:"MochaJest1212"
            })
            .expect(200)
            .expect('Content-Type',/json/)
            .then(
                (response)=>{
                expect(response.body).toEqual(
                    expect.objectContaining({
                        username: expect.any(String),
                        password: expect.any(String),
                        number:expect.any(Number)
                    })
                );
                
                expect(getUser.mock.calls.length).toBe(1)

            })
    });
})