const { gql } = require('apollo-server')

const typeDefs = gql`

type User {
  email: String
  name: String
  provider: String
  photoUrl: String
  contactType:String
  phone:String
}

type Query {
  getUsers(contactType:String): getUsersData
}
type getUsersData {
status:Status
data:[User]
}

type Query {
  findByUserId(id: String!): findByUserIdData
}
type findByUserIdData{
  status:Status
  data:User
}

type  deleteUsersData{
 status:Status
}

type Mutation {
  deleteUser(id: String): deleteUsersData
}

type Query {
  token(email: String!): String!
}

type Mutation {
  addUser(input: InputUser!): userData
}

type Mutation {
  updateUser(id: String, input: InputUser!): userData
}

input InputUser {
  email: String
  name: String
  provider: String
  photoUrl: String
  contactType:String
  phone:String
}

type Status {
  code :Int 
  header: String
  description : String
  moreInfo :String
}

type userData {
  status: Status
  data:User
}
`
export = typeDefs
