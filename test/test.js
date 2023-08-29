const { expect } = require("chai");
const { json } = require("express");
const request = require("request");
let cat = {
    title : 'CAT <3' ,
    subTitle : 'Kitten' ,
    path : 'images/kitten-3.jpg' ,
    description : 'Cat' ,
};


describe('test GET api' , function(){
    it('if GET success-returns Status code 200', function(done){
        request('http://localhost:3000/api/cat', function(error,res,logic){
            let logic_obj = JSON.parse(logic);
            expect(logic_obj.message).to.equal('get all cats successful');
            done();
        });
    });
});

describe('test POST api', function(){
    it('if POST success-returns Status code 201', function(done){
        request.post({url:'http://localhost:3000/api/cat',form:cat}, function(error,res,logic){
            let obj_body = JSON.parse(logic);
            expect(obj_body.message).to.equal('success');
            done();
        });    
    });
});

describe('test DELETE api', function(){
    it('if POST success-returns Status code 201', function(done){
        request.post({url:'http://localhost:3000/api/cat',form:cat}, function(error,res,logic){
            done();
        });
    });
            it('if DELETE success-returns Status code 400', function(done){
                request.delete({url:'http://localhost:3000/api/cat', form:cat}, function (error,res,logic){
                let body_obj = JSON.parse(logic);
                expect(body_obj.statusCode).to.equal(400);
                done();
        });
    });
});
