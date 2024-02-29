const Subscription = require("../model/Subscription");



module.exports.RecommandationsSubscriptionController = (req, res) => {
    const {answers} = req.body;
    const recommandations = [];

    Subscription.find().then((subscriptions) => {
        subscriptions.forEach(subscription => {
            console.log(answers);
            let score = 0;
            answers.forEach(answer => {
                if(subscription.advantage.includes(answer)){
                    score++;
                }
            });
            recommandations.push({subscription, score});
        });
        recommandations.sort((a, b) => b.score - a.score);
        res.status(200).json(recommandations);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({error: err});
    });
}



