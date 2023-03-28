const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_login: { type: DataTypes.STRING, unique: true },
    user_password: { type: DataTypes.STRING }
})

const Course = sequelize.define('course', {
    course_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    course_name: { type: DataTypes.STRING, unique: true },
    course_duration: { type: DataTypes.INTEGER },
    course_price: { type: DataTypes.INTEGER }
})

const Type = sequelize.define('type', {
    type_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type_name: { type: DataTypes.STRING, unique: true }
})

const Shedule = sequelize.define('shedule', {
    shedule_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    shedule_dateofstart: { type: DataTypes.DATEONLY },
    shedule_dateoffinish: { type: DataTypes.DATEONLY }
})

const Format = sequelize.define('format', {
    format_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    format_name: { type: DataTypes.STRING, unique: true }
})

const Module = sequelize.define('module', {
    module_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    module_name: { type: DataTypes.STRING },
})

const SubjectOfModule = sequelize.define('subjectofmodule', {
    subjectofmodule_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Subject = sequelize.define('subject', {
    subject_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    subject_name: { type: DataTypes.STRING, unique: true }
})

Type.hasMany(Course)
Course.belongsTo(Type)

Course.hasMany(Shedule, { as: 'course_shedule' })
Shedule.belongsTo(Course)

Format.hasMany(Course)
Course.belongsTo(Format)

Course.hasMany(Module, { as: 'course_module' })
Module.belongsTo(Course)

Module.belongsToMany(Subject, { through: SubjectOfModule })
Subject.belongsToMany(Module, { through: SubjectOfModule })

module.exports = {
    User,
    Course,
    Type,
    Shedule,
    Format,
    Module,
    SubjectOfModule,
    Subject
}