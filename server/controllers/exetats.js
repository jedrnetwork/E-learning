<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> trial
const Exetat = require('../models/Exetat');

const getAllExetats = async (req, res) => {
    try {
        const exetats = await Exetat.find({});
        res.status(200).json({ exetats })
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const getExetat = async (req, res) => {
    try {
        const {id: exetatID} = req.params;
        const exetat = await Exetat.findOne({year: `${exetatID}`});
    if (!exetat) {
        return res.status(404).json({ msg: `No exetat of year: ${exetatID}`})
    }
    res.status(200).json({ exetat })
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const createExetat = async (req, res) => {
    try {
        const exetat = await Exetat.create(req.body)
        res.status(201).json({ exetat })
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const updateExetat = async (req, res) => {
    try {
        const {id: exetatID} = req.params;
        const exetat = await Exetat.findOneAndUpdate({year: `${exetatID}`}, req.body, {
            new: true,
            runValidators: true,
        });
    
    if (!exetat) return res.status(404).json({ msg: `No extat of year: ${ exetatID }`})
    res.status(200).json({ exetat})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const deleteExetat = async (req, res) => {
    try {
        const {id: exetatID} = req.params;
        const exetat = await Exetat.findOneAndDelete({year: `${exetatID}`});
    if (!exetat) {
        return res.status(404).json({ msg: `No extat of year: ${ exetatID }`})
    }
    res.status(200).json({ exetat})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}


module.exports = {
    getAllExetats,
    createExetat,
    getExetat,
    updateExetat,
    deleteExetat,
<<<<<<< HEAD
=======
const Exetat = require('../models/Exetat');

const getAllExetats = async (req, res) => {
    try {
        const exetats = await Exetat.find({});
        res.status(200).json({ exetats })
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const getExetat = async (req, res) => {
    try {
        const {id: exetatID} = req.params;
        const exetat = await Exetat.findOne({year: `${exetatID}`});
    if (!exetat) {
        return res.status(404).json({ msg: `No exetat of year: ${exetatID}`})
    }
    res.status(200).json({ exetat })
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const createExetat = async (req, res) => {
    try {
        const exetat = await Exetat.create(req.body)
        res.status(201).json({ exetat })
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const updateExetat = async (req, res) => {
    try {
        const {id: exetatID} = req.params;
        const exetat = await Exetat.findOneAndUpdate({year: `${exetatID}`}, req.body, {
            new: true,
            runValidators: true,
        });
    
    if (!exetat) return res.status(404).json({ msg: `No extat of year: ${ exetatID }`})
    res.status(200).json({ exetat})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const deleteExetat = async (req, res) => {
    try {
        const {id: exetatID} = req.params;
        const exetat = await Exetat.findOneAndDelete({year: `${exetatID}`});
    if (!exetat) {
        return res.status(404).json({ msg: `No extat of year: ${ exetatID }`})
    }
    res.status(200).json({ exetat})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}


module.exports = {
    getAllExetats,
    createExetat,
    getExetat,
    updateExetat,
    deleteExetat,
>>>>>>> e53b29d43532b642db32db4b8c9c7740b5fd1a34
=======

>>>>>>> trial
}