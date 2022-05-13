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

struct Faction {
    faction_id: i32,
    name: &'static str,
    base_game: bool,
    pok_game: bool,
    home_system_id: i32,
}

struct System {
    system_id: i32,
    faction_id: Option<i32>,
    name: &'static str,
    base_game: bool,
    pok_game: bool,
    flip_side_system_id: i32,
    is_anomaly: bool,
    is_asteroid: bool,
    is_nebula: bool,
    is_supernova: bool,
    is_valid_placement_pool: bool,
    is_gravity_rift: bool,
    is_home_system: bool,
    is_mecatol_rex: bool,
    is_wormhole_nexus: bool,
    planets: i32,
    contains_legendary_planet: bool,
    contains_alpha_wormhole: bool,
    contains_beta_wormhole: bool,
    contains_delta_wormhole: bool,
    contains_gamma_wormhole: bool,
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

