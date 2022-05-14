pub enum TechnologySpecialty {
    Warfare,
    Cybernetic,
    Propulsion,
    Biotic,
}

pub enum PlanetTrait {
    Cultural,
    Hazardous,
    Industrial,
}

pub enum Wormhole {
    Alpha,
    Beta,
    Delta,
    Gamma,
}

pub enum Anomaly {
    MuaatSupernova,
    Supernova,
    Nebula,
    GravityRift,
    AsteroidField,
}

pub enum SystemType {
    Blue,
    Red,
    Green,
}

pub struct Faction {
    pub faction_id: i32,
    pub name: &'static str,
    pub base_game: bool,
    pub pok_game: bool,
    pub home_system_id: i32,
}

pub struct SystemTile {
    pub system_id: i32,
    pub faction_id: Option<i32>,
    pub name: &'static str,
    pub base_game: bool,
    pub pok_game: bool,
    pub wormhole: Option<Wormhole>,
    pub anomaly: Option<Anomaly>,
    pub system_type: SystemType,
    pub contains_legendary_planet: bool,
    pub is_mecatol_rex: bool,
}

impl SystemTile {
    pub const fn new() -> SystemTile {
        SystemTile {
            system_id: 0,
            faction_id: None,
            name: "",
            base_game: true,
            pok_game: true,
            wormhole: None,
            anomaly: None,
            system_type: SystemType::Blue,
            contains_legendary_planet: false,
            is_mecatol_rex: false,
        }
    }
}

pub struct Planet {
    pub system_id: i32,
    pub planet_id: i32,
    pub name: &'static str,
    pub flavor_text: &'static str,
    pub resources: i32,
    pub influence: i32,
    pub is_legendary: bool,
    pub is_home_planet: bool,
    pub is_mecatol_rex: bool,
    pub planet_trait: Option<PlanetTrait>,
    pub specialty: Option<TechnologySpecialty>,
}

impl Planet {
    pub const fn new() -> Planet {
        Planet{
            system_id: 0,
            planet_id: 0,
            name: "",
            flavor_text: "",
            resources: 0,
            influence: 0,
            is_legendary: false,
            is_home_planet: false,
            is_mecatol_rex: false,
            planet_trait: None,
            specialty: None
        }
    }
}
