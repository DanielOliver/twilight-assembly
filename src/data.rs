use crate::types::*;

const fn create_faction(faction_id: i32, name: &'static str, base_game: bool) -> Faction {
    let pok_game = true;
    let home_system_id = faction_id;
    Faction {
        faction_id,
        name,
        base_game,
        pok_game,
        home_system_id,
    }
}

const DEFAULT_FACTIONS: &[Faction] = &[
    // BASE GAME
    create_faction(1, "The Federation of Sol", true),
    create_faction(2, "The Mentak Coalition", true),
    create_faction(3, "The Yin Brotherhood", true),
    create_faction(4, "The Embers of Muaat", true),
    create_faction(5, "The Arborec", true),
    create_faction(6, "The Lizix Mindnet", true),
    create_faction(7, "The Winnu", true),
    create_faction(8, "The Nekro Virus", true),
    create_faction(9, "The Naalu Collective", true),
    create_faction(10, "The Barony of Letnev", true),
    create_faction(11, "The Clan of Saar", true),
    create_faction(12, "The Universities of Jol-Nar", true),
    create_faction(13, "Sardakk N'orr", true),
    create_faction(14, "The Xxcha Kingdom", true),
    create_faction(15, "The Yssaril Tribes", true),
    create_faction(16, "The Emirates of Hacan", true),
    create_faction(17, "The Ghosts of Creuss", true),
    // POK
    create_faction(52, "The Mahact Gene-sorcerers", false),
    create_faction(53, "The Nomad", false),
    create_faction(54, "The Vuil'raith Cabal", false),
    create_faction(55, "The Titans of Ul", false),
    create_faction(56, "The Empyrean", false),
    create_faction(57, "The Naaz-Rokha Alliance", false),
    create_faction(58, "The Argent Flight", false),
];

const fn create_home_system(system_id: i32, name: &'static str, base_game: bool) -> SystemTile {
    SystemTile {
        system_id,
        faction_id: Some(system_id),
        name,
        base_game,
        system_type: SystemType::Green,
        ..SystemTile::new()
    }
}

const fn create_planet_system(system_id: i32, base_game: bool) -> SystemTile {
    let faction_id = system_id;
    SystemTile {
        system_id,
        base_game,
        ..SystemTile::new()
    }
}


const fn create_wormhole_system(system_id: i32, base_game: bool, wormhole: Wormhole) -> SystemTile {
    SystemTile {
        system_id,
        base_game,
        wormhole: Some(wormhole),
        system_type: SystemType::Blue,
        ..SystemTile::new()
    }
}

const fn create_empty_system(system_id: i32, base_game: bool) -> SystemTile {
    SystemTile {
        system_id,
        base_game,
        system_type: SystemType::Red,
        ..SystemTile::new()
    }
}

const fn create_anomaly_system(system_id: i32, base_game: bool, anomaly: Anomaly) -> SystemTile {
    SystemTile {
        system_id,
        base_game,
        anomaly: Some(anomaly),
        system_type: SystemType::Red,
        ..SystemTile::new()
    }
}

pub const DEFAULT_SYSTEMS: &'static [SystemTile] = &[
    // BASE GAME Home Systems
    create_home_system(1, "The Federation of Sol", true),
    create_home_system(2, "The Mentak Coalition", true),
    create_home_system(3, "The Yin Brotherhood", true),
    create_home_system(4, "The Embers of Muaat", true),
    create_home_system(5, "The Arborec", true),
    create_home_system(6, "The Lizix Mindnet", true),
    create_home_system(7, "The Winnu", true),
    create_home_system(8, "The Nekro Virus", true),
    create_home_system(9, "The Naalu Collective", true),
    create_home_system(10, "The Barony of Letnev", true),
    create_home_system(11, "The Clan of Saar", true),
    create_home_system(12, "The Universities of Jol-Nar", true),
    create_home_system(13, "Sardakk N'orr", true),
    create_home_system(14, "The Xxcha Kingdom", true),
    create_home_system(15, "The Yssaril Tribes", true),
    create_home_system(16, "The Emirates of Hacan", true),
    SystemTile {
        wormhole: Some(Wormhole::Delta),
        ..create_home_system(17, "The Ghosts of Creuss", true)
    },
    SystemTile {
        wormhole: Some(Wormhole::Delta),
        ..create_home_system(51, "The Ghosts of Creuss", true)
    },
    // POK Home Systems
    create_home_system(52, "The Mahact Gene-sorcerers", false),
    create_home_system(53, "The Nomad", false),
    create_home_system(54, "The Vuil'raith Cabal", false),
    create_home_system(55, "The Titans of Ul", false),
    SystemTile {
        anomaly: Some(Anomaly::Nebula),
        ..create_home_system(56, "The Empyrean", false)
    },
    create_home_system(57, "The Naaz-Rokha Alliance", false),
    create_home_system(58, "The Argent Flight", false),
    // Mecatol Rex
    SystemTile {
        name: "Mecatol Rex",
        is_mecatol_rex: true,
        ..create_planet_system(18, true)
    },
    // More Base Game planets
    create_planet_system(19, true),
    create_planet_system(20, true),
    create_planet_system(21, true),
    create_planet_system(22, true),
    create_planet_system(23, true),
    create_planet_system(24, true),
    create_planet_system(25, true),
    create_planet_system(26, true),
    create_planet_system(27, true),
    create_planet_system(28, true),
    create_planet_system(29, true),
    create_planet_system(30, true),
    create_planet_system(31, true),
    create_planet_system(32, true),
    create_planet_system(33, true),
    create_planet_system(34, true),
    create_planet_system(35, true),
    create_planet_system(36, true),
    create_planet_system(37, true),
    create_planet_system(38, true),
    // More Base Game Anomalies
    create_wormhole_system(39, true, Wormhole::Alpha),
    create_wormhole_system(40, true, Wormhole::Beta),
    create_anomaly_system(41, true, Anomaly::GravityRift),
    create_anomaly_system(42, true, Anomaly::Nebula),
    create_anomaly_system(43, true, Anomaly::Supernova),
    create_anomaly_system(44, true, Anomaly::AsteroidField),
    create_wormhole_system(45, true, Wormhole::Beta),
    create_empty_system(46, true),
    create_empty_system(47, true),
    create_empty_system(48, true),
    create_empty_system(49, true),
    create_empty_system(50, true),
    // More POK planets
    create_planet_system(59, false),
    create_planet_system(60, false),
    create_planet_system(61, false),
    create_planet_system(62, false),
    create_planet_system(63, false),
    create_planet_system(64, false),
    SystemTile {
        contains_legendary_planet: true,
        ..create_planet_system(65, false)
    },
    SystemTile {
        contains_legendary_planet: true,
        ..create_planet_system(66, false)
    },
    SystemTile {
        ..create_anomaly_system(67, false, Anomaly::GravityRift)
    },
    SystemTile {
        ..create_anomaly_system(68, false, Anomaly::Nebula)
    },
    create_planet_system(69, false),
    create_planet_system(70, false),
    create_planet_system(71, false),
    create_planet_system(72, false),
    create_planet_system(73, false),
    create_planet_system(74, false),
    create_planet_system(75, false),
    create_planet_system(76, false),
    create_empty_system(77, false),
    create_empty_system(78, false),
    SystemTile {
        wormhole: Some(Wormhole::Alpha),
        ..create_anomaly_system(79, false, Anomaly::AsteroidField)
    },
    create_anomaly_system(80, false, Anomaly::Supernova),
    create_anomaly_system(81, false, Anomaly::MuaatSupernova),
    SystemTile {
        contains_legendary_planet: true,
        ..create_planet_system(82, false)
    },
];

const fn create_home_planet(system_id: i32, planet_id: i32, name: &'static str, resources: i32, influence: i32) -> Planet {
    Planet {
        system_id,
        planet_id,
        name,
        resources,
        influence,
        is_home_planet: true,
        ..Planet::new()
    }
}

const fn create_planet(system_id: i32, planet_id: i32, name: &'static str, resources: i32, influence: i32, planet_trait: PlanetTrait, specialty: Option<TechnologySpecialty>) -> Planet {
    Planet {
        system_id,
        planet_id,
        name,
        resources,
        influence,
        planet_trait: Some(planet_trait),
        specialty,
        ..Planet::new()
    }
}

pub const DEFAULT_PLANETS: &'static [Planet] = &[
    // BASE GAME Home Planets
    create_home_planet(1, 1, "Jord", 4, 2),
    create_home_planet(2, 2, "Moll Primus", 4, 1),
    create_home_planet(3, 3, "Darien", 4, 4),
    create_home_planet(4, 4, "Muaat", 4, 1),
    create_home_planet(5, 5, "Nestphar", 3, 2),
    create_home_planet(6, 6, "[0.0.0]", 5, 0),
    create_home_planet(7, 7, "Winnu", 3, 4),
    create_home_planet(8, 8, "Mordai II", 4, 0),
    create_home_planet(9, 10, "Maaluuk", 2, 0),
    create_home_planet(9, 11, "Druaa", 3, 1),
    create_home_planet(10, 12, "Arc Prime", 4, 0),
    create_home_planet(10, 13, "Wren Terra", 2, 1),
    create_home_planet(11, 14, "Lisis II", 1, 0),
    create_home_planet(11, 15, "Ragh", 2, 1),
    create_home_planet(12, 16, "Nar", 2, 3),
    create_home_planet(12, 17, "Jol", 1, 2),
    create_home_planet(13, 18, "Tren'lak", 1, 0),
    create_home_planet(13, 19, "Quinarra", 3, 1),
    create_home_planet(14, 20, "Archon Ren", 2, 3),
    create_home_planet(14, 21, "Archon Tau", 1, 1),
    create_home_planet(15, 22, "Retillion", 2, 3),
    create_home_planet(15, 23, "Shalloq", 1, 2),
    create_home_planet(16, 24, "Arretze", 2, 0),
    create_home_planet(16, 25, "Hercant", 1, 1),
    create_home_planet(16, 26, "Kamdorn", 0, 1),
    // Mecatol Rex
    Planet {
        system_id: 18,
        planet_id: 27,
        name: "Mecatol Rex",
        resources: 1,
        influence: 6,
        is_mecatol_rex: true,
        ..Planet::new()
    },
    // BASE GAME Planets
    create_planet(19, 28, "Wellon", 1, 2, PlanetTrait::Industrial, Some(TechnologySpecialty::Cybernetic)),
    create_planet(20, 29, "Vefut II", 2, 2, PlanetTrait::Hazardous, None),
    create_planet(21, 30, "Thibah", 1, 1, PlanetTrait::Industrial, Some(TechnologySpecialty::Propulsion)),
    create_planet(22, 31, "Tar'mann", 1, 1, PlanetTrait::Industrial, Some(TechnologySpecialty::Biotic)),
    create_planet(23, 32, "Saudor", 2, 2, PlanetTrait::Industrial, None),
    create_planet(24, 33, "Mehar Xull", 1, 3, PlanetTrait::Hazardous, Some(TechnologySpecialty::Warfare)),
    create_planet(25, 34, "Quann", 2, 1, PlanetTrait::Cultural, None),
    create_planet(26, 35, "Lodor", 3, 1, PlanetTrait::Cultural, None),
    create_planet(27, 36, "New Albion", 1, 1, PlanetTrait::Industrial, Some(TechnologySpecialty::Biotic)),
    create_planet(27, 37, "Starpoint", 3, 1, PlanetTrait::Hazardous, None),
    create_planet(28, 38, "Tequ'ran", 2, 0, PlanetTrait::Hazardous, None),
    create_planet(28, 39, "Torkan", 0, 3, PlanetTrait::Cultural, None),
    create_planet(29, 40, "Qucen'n", 1, 2, PlanetTrait::Industrial, None),
    create_planet(29, 41, "Rarron", 0, 3, PlanetTrait::Cultural, None),
    create_planet(30, 42, "Mellon", 0, 2, PlanetTrait::Cultural, None),
    create_planet(30, 43, "Zohbat", 3, 1, PlanetTrait::Hazardous, None),
    create_planet(31, 44, "Lazar", 1, 0, PlanetTrait::Industrial, Some(TechnologySpecialty::Cybernetic)),
    create_planet(31, 45, "Sakulag", 2, 1, PlanetTrait::Hazardous, None),
    create_planet(32, 46, "Dal Bootha", 0, 2, PlanetTrait::Cultural, None),
    create_planet(32, 47, "Xxehan", 1, 1, PlanetTrait::Cultural, None),
    create_planet(33, 48, "Corneeq", 1, 2, PlanetTrait::Cultural, None),
    create_planet(33, 49, "Resulon", 2, 0, PlanetTrait::Cultural, None),
    create_planet(34, 50, "Centauri", 1, 3, PlanetTrait::Cultural, None),
    create_planet(34, 51, "Gral", 1, 1, PlanetTrait::Industrial, Some(TechnologySpecialty::Propulsion)),
    create_planet(35, 52, "Bereg", 3, 1, PlanetTrait::Hazardous, None),
    create_planet(35, 53, "Lirta IV", 2, 3, PlanetTrait::Hazardous, None),
    create_planet(36, 54, "Arnor", 2, 1, PlanetTrait::Industrial, None),
    create_planet(36, 55, "Lor", 1, 2, PlanetTrait::Industrial, None),
    create_planet(37, 56, "Arinam", 1, 2, PlanetTrait::Industrial, None),
    create_planet(37, 57, "Meer", 0, 4, PlanetTrait::Hazardous, Some(TechnologySpecialty::Warfare)),
    create_planet(38, 58, "Abyz", 3, 0, PlanetTrait::Hazardous, None),
    create_planet(38, 59, "Fria", 2, 0, PlanetTrait::Hazardous, None),
    // Ghosts of Creuss
    create_home_planet(51, 60, "Creuss", 4, 2),
    // POK Home Planets
    create_home_planet(52, 61, "Ixth", 3, 5),
    create_home_planet(53, 62, "Arcturus", 4, 4),
    create_home_planet(54, 63, "Acheron", 4, 0),
    create_home_planet(55, 64, "Elysium", 4, 1),
    create_home_planet(56, 65, "The Dark", 3, 4),
    create_home_planet(57, 66, "Naazir", 2, 1),
    create_home_planet(57, 67, "Rokha", 1, 2),
    create_home_planet(58, 68, "Valk", 2, 0),
    create_home_planet(58, 69, "Avar", 1, 1),
    create_home_planet(58, 70, "Ylir", 0, 2),
    // POK planets
    create_planet(59, 71, "Archon Vail", 1, 3, PlanetTrait::Hazardous, Some(TechnologySpecialty::Propulsion)),
    create_planet(60, 72, "Perimeter", 2, 1, PlanetTrait::Industrial, None),
    create_planet(61, 73, "Ang", 2, 0, PlanetTrait::Industrial, Some(TechnologySpecialty::Warfare)),
    create_planet(62, 74, "Sem-Lore", 3, 2, PlanetTrait::Cultural, Some(TechnologySpecialty::Cybernetic)),
    create_planet(63, 75, "Vorhal", 0, 2, PlanetTrait::Cultural, Some(TechnologySpecialty::Biotic)),
    create_planet(64, 76, "Atlas", 3, 1, PlanetTrait::Hazardous, None),
    Planet {
        is_legendary: true,
        ..create_planet(65, 77, "Primor", 2, 1, PlanetTrait::Cultural, None)
    },
    Planet {
        is_legendary: true,
        ..create_planet(66, 78, "Hope's End", 3, 0, PlanetTrait::Hazardous, None)
    },
    create_planet(67, 79, "Cormund", 2, 0, PlanetTrait::Hazardous, None),
    create_planet(68, 80, "Everra", 3, 1, PlanetTrait::Cultural, None),
    create_planet(69, 81, "Accoen", 2, 3, PlanetTrait::Industrial, None),
    create_planet(69, 82, "Jeol Ir", 2, 3, PlanetTrait::Industrial, None),
    create_planet(70, 83, "Kraag", 2, 1, PlanetTrait::Hazardous, None),
    create_planet(70, 84, "Siig", 0, 2, PlanetTrait::Hazardous, None),
    create_planet(71, 85, "Ba'Kal", 3, 2, PlanetTrait::Industrial, None),
    create_planet(71, 86, "Alio Prima", 1, 1, PlanetTrait::Cultural, None),
    create_planet(72, 87, "Lisis", 2, 2, PlanetTrait::Industrial, None),
    create_planet(72, 88, "Velnor", 2, 1, PlanetTrait::Industrial, Some(TechnologySpecialty::Warfare)),
    create_planet(73, 89, "Cealdri", 0, 2, PlanetTrait::Cultural, Some(TechnologySpecialty::Cybernetic)),
    create_planet(73, 90, "Xanhact", 0, 1, PlanetTrait::Hazardous, None),
    create_planet(74, 91, "Vega Major", 2, 1, PlanetTrait::Cultural, None),
    create_planet(74, 92, "Vega Minor", 1, 2, PlanetTrait::Cultural, Some(TechnologySpecialty::Propulsion)),
    create_planet(75, 93, "Loki", 1, 2, PlanetTrait::Cultural, None),
    create_planet(75, 94, "Abaddon", 1, 0, PlanetTrait::Cultural, None),
    create_planet(75, 95, "Ashtroth", 2, 0, PlanetTrait::Hazardous, None),
    create_planet(76, 96, "Rigel I", 0, 1, PlanetTrait::Hazardous, None),
    create_planet(76, 97, "Rigel II", 1, 2, PlanetTrait::Industrial, None),
    create_planet(76, 98, "Rigel III", 1, 1, PlanetTrait::Industrial, Some(TechnologySpecialty::Biotic)),
    Planet {
        is_legendary: true,
        ..create_planet(82, 9, "Mallice", 0, 3, PlanetTrait::Cultural, None)
    },
];

pub fn get_base_data() -> InitialMapData {
    InitialMapData {
        planets: DEFAULT_PLANETS.to_vec(),
        system_tiles: DEFAULT_SYSTEMS.to_vec(),
    }
}

pub fn get_base_data_dict() -> InitialMapDataDictionary {
    InitialMapDataDictionary {
        planets: DEFAULT_PLANETS.iter().cloned().map(|x| (x.planet_id, x)).collect(),
        system_tiles: DEFAULT_SYSTEMS.iter().cloned().map(|x| (x.system_id, x)).collect(),
        factions: DEFAULT_FACTIONS.iter().cloned().map(|x| (x.faction_id, x)).collect()
    }
}