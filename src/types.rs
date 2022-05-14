enum TechnologySpecialty {
    Warfare,
    Cybernetic,
    Propulsion,
    Biotic,
}

enum PlanetTrait {
    Cultural,
    Hazardous,
    Industrious,
}

enum Wormhole {
    Alpha,
    Beta,
    Delta,
    Gamma,
}

enum Anomaly {
    MuaatSupernova,
    Supernova,
    Nebula,
    GravityRift,
    AsteroidField,
}

enum SystemType {
    Blue,
    Red
}

struct Faction {
    faction_id: i32,
    name: &'static str,
    base_game: bool,
    pok_game: bool,
    home_system_id: i32,
}

struct SystemTile {
    system_id: i32,
    faction_id: Option<i32>,
    name: &'static str,
    base_game: bool,
    pok_game: bool,
    wormhole: Option<Wormhole>,
    anomaly: Option<Anomaly>,
    system_type: SystemType,
    contains_legendary_planet: bool,
    is_mecatol_rex: bool,
}

impl Default for SystemTile {
    fn default() -> SystemTile {
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

struct Planet {
    planet_id: i32,
    system_id: i32,
    name: &'static str,
    flavor_text: &'static str,
    is_legendary: bool,
    is_hazardous: bool,
    is_industrious: bool,
    is_cultural: bool,
    is_home_planet: bool,
    is_mecatol_rex: bool,
    resources: i32,
    influence: i32,
    has_biotic_technology_specialty: bool,
    has_propulsion_technology_specialty: bool,
    has_warfare_technology_specialty: bool,
    has_cybernetic_technology_specialty: bool,
}

impl Default for Planet {
    fn default() -> Planet {
        Planet{
            planet_id: 0,
            system_id: 0,
            name: "",
            flavor_text: "",
            is_legendary: false,
            is_hazardous: false,
            is_industrious: false,
            is_cultural: false,
            is_home_planet: false,
            is_mecatol_rex: false,
            resources: 0,
            influence: 0,
            has_biotic_technology_specialty: false,
            has_propulsion_technology_specialty: false,
            has_warfare_technology_specialty: false,
            has_cybernetic_technology_specialty: false,
        }
    }
}
