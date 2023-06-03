const experienciasRepository = require('../repositories/experienciasRepository')

exports.getAllExperiencias = async (req, res) => { 
       const tipo = req.query.tipo;
      const experiencias = await experienciasRepository.getAllExperiencias(tipo);
      res.json(experiencias);
};

exports.getExperienciasById = async (req, res) => { 
       const id = parseInt(req.params.id);
       const experiencias = await experienciasRepository.getExperienciasById(id);
       res.json(experiencias);
};

exports.createExperiencias = async (req, res) => {
       const experiencias = req.body;
       const newExperiencias = await experienciasRepository.createExperiencias(experiencias);
       res.json(newExperiencias);
}

exports.updateExperiencias = async (req, res) => {
     const id = parseInt(req.params.id);
    const experiencias = req.body;
    const updateExperiencias = await experienciasRepository.updateExperiencias(id,experiencias);
    res.json(updateExperiencias);
}

exports.deleteExperiencias = async (req, res) => {
    const id = parseInt(req.params.id);
    await experienciasRepository.deleteExperiencias(id);
   res.json({message:`Experiencias ${id}deleted`});
}