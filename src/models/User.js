import { Plan } from "./Plan.js";

class User {
    constructor({id,name,planId,credits=0,isBlocked=false}) {
        this.id = id;
        this.name = name;
        this.planId = planId;
        this.credits = credits;
        this.isBlocked = isBlocked;
    }

    block(){
        this.isBlocked = true;
    }
    unBlock(){
        this.isBlocked = false;
    }
    addCredit(value){
        this.creditsredit += value;
    }
    deductCredits(value){
        this.credits -= value
    }
    
}

module.exports = User;

