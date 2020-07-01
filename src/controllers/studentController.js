const studentModel = require("../models/student");

const getStudent = async(req, res) => {
    try {
        const students = await studentModel.find({});
        res.send(students);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getStudentById = async(req, res) => {
    const { id } = req.params;
    try {
        const student = await studentModel.findById(id);
        res.send(student);
    } catch (error) {
        res.status(500).send(error);
    }
};

const createStudent = async(req, res) => {
    try {
        const student = new studentModel(req.body);
        await student.save();
        res.send(student);
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteStudent = async(req, res) => {
    const { id } = req.params;
    try {
        const student = await studentModel.findOneAndDelete(id);
        if (!student) {
            res.status(404).send("Estudante não encontrado");
        }
        res.status(200).send("Estudante removido");
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateStudent = async(req, res) => {
    const { id } = req.params;
    try {
        const student = await studentModel.findOneAndUpdate({ _id: id }, req.body, {
            new: true,
        });

        res.send(student);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    getStudent,
    getStudentById,
    createStudent,
    deleteStudent,
    updateStudent,
};