const checkMillionDollarIdea = (req, res, next) => {
    const revenue = req.body.weeklyRevenue;
    const weeks = req.body.numWeeks;
    
    if (weeks * revenue >= 1000000 && revenue && weeks) {
        next();
    } else {
        res.status(400).send('Not a million dollar idea!');
    }
    
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
