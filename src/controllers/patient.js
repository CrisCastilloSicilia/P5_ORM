const {models} = require('../models');

// Muestra la informacion de un paciente
exports.read = async function (patientId) {
    // Rellene aqui ...
    let patient = await models.Patient.findByPk(patientId);
    return patient;
}

// Crea un paciente en un hospital
exports.create = async function (hospitalId, name, surname, dni) {
    // Rellene aqui ...
    try {
        let patient = models.Patient.build({
            name,
            surname,
            dni,
            hospitalId: hospitalId
        });

    } catch (error) {
        console.log(error);
    }
}

// Actualiza un paciente
exports.update = async function (patientId, name, surname, dni) {
    // Rellene aqui ...
    let patient = await models.Patient.findByPk(patientId);
    patient.name = name;
    patient.surname = surname;
    patient.dni = dni;

    try {
        await patient.save({fields: ["name", "surname", "dni"]});
    } catch (error){
        console.log(error);
    }
}

// Borra un paciente
exports.delete = async function (patientId) {
    // Rellene aqui ...
}


// Buscar pacientes de un hospital ordenados por el nombre (de la A a la Z)
exports.indexByHospital = async function (hospitalId) {
    // Rellene aqui ...
}
