const Client = require("../model/Client");



module.exports.ClientPostController = (req, res) => {
    const { name, surname, wilaya, commune, n_telephone, adresse, subscription_pack } = req.body;
    const client = new Client(
        { 
            name, 
            surname, 
            wilaya, 
            commune, 
            n_telephone, 
            adresse,
            subscription_pack
         }
    );
    client.save().then((client) => {
        res.status(200).json(client);
    }
    ).catch((err) => {
        res.status(500).json({ error: err });
    }
    );

}