import { ofArray, singleton, empty } from "../../front/src/.fable/fable-library.3.2.9/List.js";
import { Anomaly as Anomaly_1, UniqueTile, Wormhole, SystemTile, SystemType } from "./Types.fs.js";

function create_home_system(system_id, name, baseGame) {
    return new SystemTile(system_id, system_id, name, baseGame, true, void 0, empty(), new SystemType(2), false, void 0);
}

function create_planet_system(system_id, baseGame) {
    return new SystemTile(system_id, void 0, "", baseGame, true, void 0, empty(), new SystemType(0), false, void 0);
}

function create_anomaly_system(system_id, baseGame, anomaly) {
    return new SystemTile(system_id, void 0, "", baseGame, true, anomaly, empty(), new SystemType(1), true, void 0);
}

function create_empty_system(system_id, baseGame) {
    return new SystemTile(system_id, void 0, "", baseGame, true, void 0, empty(), new SystemType(1), true, void 0);
}

export const Default = ofArray([create_home_system(1, "The Federation of Sol", true), create_home_system(2, "The Mentak Coalition", true), create_home_system(3, "The Yin Brotherhood", true), create_home_system(4, "The Embers of Muaat", true), create_home_system(5, "The Arborec", true), create_home_system(6, "The Lizix Mindnet", true), create_home_system(7, "The Winnu", true), create_home_system(8, "The Nekro Virus", true), create_home_system(9, "The Naalu Collective", true), create_home_system(10, "The Barony of Letnev", true), create_home_system(11, "The Clan of Saar", true), create_home_system(12, "The Universities of Jol-Nar", true), create_home_system(13, "Sardakk N\u0027orr", true), create_home_system(14, "The Xxcha Kingdom", true), create_home_system(15, "The Yssaril Tribes", true), create_home_system(16, "The Emirates of Hacan", true), (() => {
    const inputRecord = create_home_system(17, "The Ghosts of Creuss", true);
    return new SystemTile(inputRecord.SystemId, inputRecord.FactionId, inputRecord.Name, inputRecord.BaseGame, inputRecord.POK, inputRecord.Anomaly, singleton(new Wormhole(2)), inputRecord.SystemType, true, new UniqueTile(1));
})(), (() => {
    const inputRecord_1 = create_home_system(51, "The Ghosts of Creuss", true);
    return new SystemTile(inputRecord_1.SystemId, inputRecord_1.FactionId, inputRecord_1.Name, inputRecord_1.BaseGame, inputRecord_1.POK, inputRecord_1.Anomaly, singleton(new Wormhole(2)), inputRecord_1.SystemType, inputRecord_1.EmptySystem, new UniqueTile(2));
})(), create_home_system(52, "The Mahact Gene-sorcerers", false), create_home_system(53, "The Nomad", false), create_home_system(54, "The Vuil\u0027raith Cabal", false), create_home_system(55, "The Titans of Ul", false), (() => {
    const inputRecord_2 = create_home_system(56, "The Empyrean", false);
    return new SystemTile(inputRecord_2.SystemId, inputRecord_2.FactionId, inputRecord_2.Name, inputRecord_2.BaseGame, inputRecord_2.POK, new Anomaly_1(1), inputRecord_2.Wormholes, inputRecord_2.SystemType, inputRecord_2.EmptySystem, inputRecord_2.Unique);
})(), create_home_system(57, "The Naaz-Rokha Alliance", false), create_home_system(58, "The Argent Flight", false), (() => {
    const inputRecord_3 = create_planet_system(18, true);
    return new SystemTile(inputRecord_3.SystemId, inputRecord_3.FactionId, "Mecatol Rex", inputRecord_3.BaseGame, inputRecord_3.POK, inputRecord_3.Anomaly, inputRecord_3.Wormholes, inputRecord_3.SystemType, inputRecord_3.EmptySystem, new UniqueTile(0));
})(), create_planet_system(19, true), create_planet_system(20, true), create_planet_system(21, true), create_planet_system(22, true), create_planet_system(23, true), create_planet_system(24, true), create_planet_system(25, true), create_planet_system(26, true), create_planet_system(27, true), create_planet_system(28, true), create_planet_system(29, true), create_planet_system(30, true), create_planet_system(31, true), create_planet_system(32, true), create_planet_system(33, true), create_planet_system(34, true), create_planet_system(35, true), create_planet_system(36, true), create_planet_system(37, true), create_planet_system(38, true), (() => {
    const inputRecord_4 = create_empty_system(39, true);
    return new SystemTile(inputRecord_4.SystemId, inputRecord_4.FactionId, inputRecord_4.Name, inputRecord_4.BaseGame, inputRecord_4.POK, inputRecord_4.Anomaly, singleton(new Wormhole(0)), inputRecord_4.SystemType, inputRecord_4.EmptySystem, inputRecord_4.Unique);
})(), (() => {
    const inputRecord_5 = create_empty_system(40, true);
    return new SystemTile(inputRecord_5.SystemId, inputRecord_5.FactionId, inputRecord_5.Name, inputRecord_5.BaseGame, inputRecord_5.POK, inputRecord_5.Anomaly, singleton(new Wormhole(1)), inputRecord_5.SystemType, inputRecord_5.EmptySystem, inputRecord_5.Unique);
})(), create_anomaly_system(41, true, new Anomaly_1(3)), create_anomaly_system(42, true, new Anomaly_1(1)), create_anomaly_system(43, true, new Anomaly_1(2)), create_anomaly_system(44, true, new Anomaly_1(0)), (() => {
    const inputRecord_6 = create_empty_system(45, true);
    return new SystemTile(inputRecord_6.SystemId, inputRecord_6.FactionId, inputRecord_6.Name, inputRecord_6.BaseGame, inputRecord_6.POK, inputRecord_6.Anomaly, singleton(new Wormhole(1)), inputRecord_6.SystemType, inputRecord_6.EmptySystem, inputRecord_6.Unique);
})(), create_empty_system(46, true), create_empty_system(47, true), create_empty_system(48, true), create_empty_system(49, true), create_empty_system(50, true), create_planet_system(59, false), create_planet_system(60, false), create_planet_system(61, false), create_planet_system(62, false), create_planet_system(63, false), create_planet_system(64, false), (() => {
    const inputRecord_7 = create_planet_system(65, false);
    return new SystemTile(inputRecord_7.SystemId, inputRecord_7.FactionId, inputRecord_7.Name, inputRecord_7.BaseGame, inputRecord_7.POK, inputRecord_7.Anomaly, inputRecord_7.Wormholes, inputRecord_7.SystemType, inputRecord_7.EmptySystem, new UniqueTile(6));
})(), (() => {
    const inputRecord_8 = create_planet_system(66, false);
    return new SystemTile(inputRecord_8.SystemId, inputRecord_8.FactionId, inputRecord_8.Name, inputRecord_8.BaseGame, inputRecord_8.POK, inputRecord_8.Anomaly, inputRecord_8.Wormholes, inputRecord_8.SystemType, inputRecord_8.EmptySystem, new UniqueTile(5));
})(), (() => {
    const inputRecord_9 = create_anomaly_system(67, false, new Anomaly_1(3));
    return new SystemTile(inputRecord_9.SystemId, inputRecord_9.FactionId, inputRecord_9.Name, inputRecord_9.BaseGame, inputRecord_9.POK, inputRecord_9.Anomaly, inputRecord_9.Wormholes, inputRecord_9.SystemType, false, inputRecord_9.Unique);
})(), (() => {
    const inputRecord_10 = create_anomaly_system(68, false, new Anomaly_1(1));
    return new SystemTile(inputRecord_10.SystemId, inputRecord_10.FactionId, inputRecord_10.Name, inputRecord_10.BaseGame, inputRecord_10.POK, inputRecord_10.Anomaly, inputRecord_10.Wormholes, inputRecord_10.SystemType, false, inputRecord_10.Unique);
})(), create_planet_system(69, false), create_planet_system(70, false), create_planet_system(71, false), create_planet_system(72, false), create_planet_system(73, false), create_planet_system(74, false), create_planet_system(75, false), create_planet_system(76, false), create_empty_system(77, false), create_empty_system(78, false), (() => {
    const inputRecord_11 = create_anomaly_system(79, false, new Anomaly_1(0));
    return new SystemTile(inputRecord_11.SystemId, inputRecord_11.FactionId, inputRecord_11.Name, inputRecord_11.BaseGame, inputRecord_11.POK, inputRecord_11.Anomaly, singleton(new Wormhole(0)), inputRecord_11.SystemType, inputRecord_11.EmptySystem, inputRecord_11.Unique);
})(), create_anomaly_system(80, false, new Anomaly_1(2)), create_anomaly_system(81, false, new Anomaly_1(4)), (() => {
    const inputRecord_12 = create_planet_system(82, false);
    return new SystemTile(inputRecord_12.SystemId, inputRecord_12.FactionId, inputRecord_12.Name, inputRecord_12.BaseGame, inputRecord_12.POK, inputRecord_12.Anomaly, singleton(new Wormhole(3)), inputRecord_12.SystemType, inputRecord_12.EmptySystem, new UniqueTile(3));
})(), (() => {
    const inputRecord_13 = create_planet_system(83, false);
    return new SystemTile(inputRecord_13.SystemId, inputRecord_13.FactionId, inputRecord_13.Name, inputRecord_13.BaseGame, inputRecord_13.POK, inputRecord_13.Anomaly, ofArray([new Wormhole(3), new Wormhole(0), new Wormhole(1)]), inputRecord_13.SystemType, inputRecord_13.EmptySystem, new UniqueTile(4));
})()]);

