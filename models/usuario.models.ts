import {DataType, DataTypes} from 'sequelize'
import db from '../db/connection.database'

const Usuario=db.define("usuario", {
    nombre:{
        type:DataTypes.STRING
    },
	email:{
        type:DataTypes.STRING
    },
	estado:{
        type:DataTypes.BOOLEAN
    }
})
export default Usuario;