export class Family {
    adults: Object[];
    kids: Object[];
    pets: Object[];

    constructor() {
        this.adults.push({name: 'Mirek', type: true, age: '44'});
        this.kids.push({name: 'MAgda', type: true, age: '30'});
        this.pets.push({name: 'Kot', type: 1, age: '1'});
    }

    public addAdult(obj: any) {
        this.adults.push({obj});
    }

    public addKid(obj: any) {
        this.kids.push({obj});
    }

    public addPet(obj: any) {
        this.pets.push({obj});
    }
}