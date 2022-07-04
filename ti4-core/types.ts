export enum PlanetType {
    Home = 1,
    Normal,
    MecatolRex,
    Legendary
}

export enum Trait {
    Cultural = 1,
    Industrial,
    Hazardous
}

export enum Specialty {
    Cybernetics = 1,
    Biotic,
    Propulsion,
    Warfare
}

export interface Planet {
    SystemId: number;
    PlanetId: number;
    Name: string;
    Resources: number;
    Influence: number;    
    PlanetType: PlanetType;
    Trait?: Trait;
    Specialty?: Specialty;
}
