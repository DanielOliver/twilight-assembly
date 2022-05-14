use std::time::SystemTime;

fn create_faction(faction_id: i32, name: &'static str, base_game: bool) -> Faction {
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

const DEFAULT_FACTIONS: &'static [Faction] = &[
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

fn create_home_system(system_id: i32, name: &str, base_game: bool) -> SystemTile {
    SystemTile {
        system_id,
        faction_id: Some(system_id),
        name,
        base_game,
        is_home_system: true,
        is_valid_placement_pool: false,
        ..Default::default()
    }
}

fn create_planet_system(system_id: i32, base_game: bool) -> SystemTile {
    let faction_id = system_id;
    SystemTile {
        system_id,
        base_game,
        ..Default::default()
    }
}


fn create_wormhole_system(system_id: i32, base_game: bool, wormhole: Wormhole) -> SystemTile {
    SystemTile {
        system_id,
        base_game,
        wormhole,
        system_type: SystemType::Blue
            ..Default::default(),
    }
}

fn create_empty_system(system_id: i32, base_game: bool) -> SystemTile {
    SystemTile {
        system_id,
        base_game,
        system_type: SystemType::Red
            ..Default::default(),
    }
}

fn create_anomaly_system(system_id: i32, base_game: bool, anomaly: Anomaly) -> SystemTile {
    SystemTile {
        system_id,
        base_game,
        anomoly,
        system_type: SystemType::Red
            ..Default::default(),
    }
}

const DEFAULT_SYSTEMS: &'static [SystemTile] = &[
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
        wormhole: Wormhole::Delta,
        ..create_home_system(17, "The Ghosts of Creuss", true)
    },
    SystemTile {
        wormhole: Wormhole::Delta,
        ..create_home_system(51, "The Ghosts of Creuss", true)
    },
    // POK Home Systems
    create_home_system(52, "The Mahact Gene-sorcerers", false),
    create_home_system(53, "The Nomad", false),
    create_home_system(54, "The Vuil'raith Cabal", false),
    create_home_system(55, "The Titans of Ul", false),
    SystemTile {
        anomaly: Anomaly::Nebula,
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
    create_anomaly_system(44, true, Anomaly::Asteroid),
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
        wormhole: Wormhole::Alpha,
        ..create_anomaly_system(79, false, Anomaly::AsteroidField)
    },
    create_anomaly_system(80, false, Anomaly::Supernova),
    create_anomaly_system(81, false, Anomaly::MuaatSupernova),
    SystemTile {
        contains_legendary_planet: true,
        ..create_planet_system(82, false)
    },
];

