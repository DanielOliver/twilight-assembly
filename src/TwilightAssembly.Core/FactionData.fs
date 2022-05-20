module TwilightAssembly.Core.FactionData

open TwilightAssembly.Core

let private create_faction(factionId, name, baseGame, faction): Faction =
    {
        Faction.FactionId = factionId
        Name = name
        BaseGame = baseGame
        POK = true
        HomeSystemIds = [ factionId  ]
        Faction = faction
    }

let Default: Faction list = [
        // BASE GAME
    create_faction(1, "The Federation of Sol", true, Factions.FederationOfSol)
    create_faction(2, "The Mentak Coalition", true, Factions.MentakCoalition)
    create_faction(3, "The Yin Brotherhood", true, Factions.YinBrotherhood)
    create_faction(4, "The Embers of Muaat", true, Factions.EmbersOfMuaat)
    create_faction(5, "The Arborec", true, Factions.Arborec)
    create_faction(6, "The Lizix Mindnet", true, Factions.LizixMindnet)
    create_faction(7, "The Winnu", true, Factions.Winnu)
    create_faction(8, "The Nekro Virus", true, Factions.NekroVirus)
    create_faction(9, "The Naalu Collective", true, Factions.NaaluCollective)
    create_faction(10, "The Barony of Letnev", true, Factions.BaronyOfLetnev)
    create_faction(11, "The Clan of Saar", true, Factions.ClanOfSaar)
    create_faction(12, "The Universities of Jol-Nar", true, Factions.UniversitiesOfJolNar)
    create_faction(13, "Sardakk N'orr", true, Factions.SardakkNorr)
    create_faction(14, "The Xxcha Kingdom", true, Factions.XxchaKingdom)
    create_faction(15, "The Yssaril Tribes", true, Factions.YssarilTribes)
    create_faction(16, "The Emirates of Hacan", true, Factions.EmiratesOfHacan)
    { create_faction(17, "The Ghosts of Creuss", true, Factions.GhostsOfCreuss) with HomeSystemIds = [ 51 ] } 
    // POK
    create_faction(52, "The Mahact Gene-sorcerers", false, Factions.MahactGeneSorcerers)
    create_faction(53, "The Nomad", false, Factions.Nomad)
    create_faction(54, "The Vuil'raith Cabal", false, Factions.VuilraithCabal)
    create_faction(55, "The Titans of Ul", false, Factions.TitansOfUl)
    create_faction(56, "The Empyrean", false, Factions.Empyrean)
    create_faction(57, "The Naaz-Rokha Alliance", false, Factions.NaazRokhaAlliance)
    create_faction(58, "The Argent Flight", false, Factions.ArgentFlight)
]
