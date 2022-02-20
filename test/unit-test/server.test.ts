const dotenv = require('dotenv');
dotenv.config();

import express from 'express';
const chai = require('chai')
const { expect } = chai;
import 'graphql-import-node';
import testServer from './server'

it('Should get all users', async () => {
  const result = await testServer.executeOperation({
    query: `query{
      getUsers{
    status{
    code
          header
          description
  }
        data{
    name
          email
  }
      }
    }`
  });
  expect(result.data.getUsers.status.code).equal(1000);
});

it('Should get token by email', async () => {
  const result = await testServer.executeOperation({
    query: `query {
      token(email: "vinod@test.com")
    }`
  });
  expect(result.data);
});

it('Should get status code 9999', async () => {
  const result = await testServer.executeOperation({
    query: `query {
      findByUserId(
        id:"620fdb746bab7f283c4d46d"
      ){
      status {
          code
          header
          description
        }
       data {
        name
          provider
        }
      }
    }`
  });
  expect(result.data.findByUserId.status.code).equal(9999);
});
it('Should create new record', async () => {
  const result = await testServer.executeOperation({
    query: `mutation {
      addUser(
        input: {
          email: "vinodd${Math.random()}@test.com"
          name: "vinod"
          provider: "self"
          contactType:"personal"
         phone :"999999999"
        }
      ) {
        status {
          code
          header
          description
          moreInfo
        }
        data {
          provider
        }
      }
    }`
  });
  expect(result.data.addUser.status.code)
});
