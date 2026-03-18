class Plan {
    constructor({id, name, monthlyCredits = 0, overageAllowed = false}) {
        this.id = id;
        this.name = name;
        this.monthlyCredits = monthlyCredits;
        this.overageAllowed = overageAllowed;
    }
}

module.exports = Plan;

