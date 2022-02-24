import {Sequelize} from 'sequelize'

const db=new Sequelize("nodecrud","root","",{
    host:'localhost',
    dialect:"mysql",
    //logging:false
});
export default db;