'use strict';
const users = [{
  email: "luis20@gmail.com",
  first_name: "Luis",
  last_name: "Gutierrez",
  password: 'luis08',
  token: 'sajdaopwpoqe',
  active: false,
  created_at: new Date(),
  updated_at: new Date()
},
{
  email: "ana07@gmail.com",
  first_name: "Ana",
  last_name: "Gutierrez",
  password: 'ana12345',
  token: 'sajdaopsas123wpoqe',
  active: true,
  created_at: new Date(),
  updated_at: new Date()
}];

const roles = [{
  name: "Administrador",
  created_at: new Date(),
  updated_at: new Date()
},
{
  name: "Cliente",
  created_at: new Date(),
  updated_at: new Date()
}];

let userRoles = [
  {
    user_id: 22,
    role_id: 18, 
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    user_id: 23,
    role_id: 19, 
    created_at: new Date(),
    updated_at: new Date()
  }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let rolesR = await queryInterface.bulkInsert('roles', roles, {returning: true});
    let usersR = await queryInterface.bulkInsert('users', users, {returning: true});
    let {id: adminId} = rolesR.find( role => role.name === 'Administrador');
    // let adminId = rolesR.find( role => role.name === 'Administrador').id;
    let {id: userId} = usersR.find( user => user.email === 'luis20@gmail.com');
    // let userId = usersR.find( user => user.email === 'luis20@gmail.com').id;
    userRoles[0].user_id = userId;
    userRoles[0].role_id = adminId;
    let userRolesR = await queryInterface.bulkInsert('user_roles', userRoles, {returning: true});
    console.log(rolesR, usersR, userRolesR);

     let rolesR2 = await queryInterface.bulkInsert('roles', roles, {returning: true});
    let usersR2 = await queryInterface.bulkInsert('users', users, {returning: true});
    let {id: clientId2} = rolesR.find( role => role.name === 'Cliente');
    // let adminId = rolesR.find( role => role.name === 'Administrador').id;
    let {id: userId2} = usersR.find( user => user.email === 'ana07@gmail.com');
    // let userId = usersR.find( user => user.email === 'luis20@gmail.com').id;
    userRoles[1].user_id = userId2;
    userRoles[1].role_id = clientId2;
    let userRolesR2 = await queryInterface.bulkInsert('user_roles', userRoles, {returning: true});
    console.log(rolesR2, usersR2, userRolesR2); 

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user_roles', null, {});
    await queryInterface.bulkDelete('roles', null, {});
    await queryInterface.bulkDelete('users', null, {});

  }
};