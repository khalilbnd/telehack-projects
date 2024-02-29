const Commune = require('../model/Commune');
const Wilaya = require('../model/Wilaya');

module.exports.CoreWilayaController = (req, res) => {
   
    Wilaya.find().then((wilayas) => {
        res.status(200).json(wilayas);
      }
    ).catch((err) => {
        res.status(500).json({error: err});
        }
    );
      
};

module.exports.CoreCommuneController = (req, res) => {
    const { wilaya_id } = req.params;
    Commune.find({wilaya_id}).then((wilayas) => {
        res.status(200).json(wilayas);
      }
    ).catch((err) => {
        res.status(500).json({error: err});
        }
    );
      
};
