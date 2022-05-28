module TwilightAssembly.App.Pages

open Feliz
open Feliz.Router
open TwilightAssembly.App.Css

let UrlIndex = ""
let UrlPlanets = "planets"
let UrlSystems = "systems"
let UrlTiles = "tiles"

[<RequireQualifiedAccess>]
type PageType =
  | Index
  | Planets
  | Systems
  | Tiles

[<ReactComponent>]
let Navigation (currentPage: PageType) =
  let Active (page: PageType) =
    if page = currentPage then
      "active"
    else
      ""

  let NavLinks =
    [ Html.li [ prop.classes [ boot.NavItem ]
                prop.children [ Html.a [ prop.text "Systems"
                                         prop.classes [ boot.NavLink
                                                        Active PageType.Systems ]
                                         prop.href (Router.formatPath UrlSystems) ] ] ]
      Html.li [ prop.classes [ boot.NavItem ]
                prop.children [ Html.a [ prop.text "Planets"
                                         prop.classes [ boot.NavLink
                                                        Active PageType.Planets ]
                                         prop.href (Router.formatPath UrlPlanets) ] ] ]
      Html.li [ prop.classes [ boot.NavItem ]
                prop.children [ Html.a [ prop.text "Tiles"
                                         prop.classes [ boot.NavLink
                                                        Active PageType.Tiles ]
                                         prop.href (Router.formatPath UrlTiles) ] ] ] ]

  let NavChildren =
    [ Html.a [ prop.classes [ boot.NavbarBrand ]
               prop.href (Router.formatPath UrlIndex)
               prop.text "Twilight Assembly" ]
      Html.button [ prop.classes [ boot.NavbarToggler ]
                    prop.type' "button"
                    prop.custom ("data-bs-toggle", "collapse")
                    prop.custom ("data-bs-target", "#navbarSupportedContent")
                    prop.ariaControls "navbarSupportedContent"
                    prop.ariaExpanded false
                    prop.ariaLabel "Toggle navigation"
                    prop.children [ Html.span [ prop.classes [ boot.NavbarTogglerIcon ] ] ] ]
      Html.div [ prop.classes [ boot.Collapse
                                boot.NavbarCollapse ]
                 prop.id "navbarSupportedContent"
                 prop.children [ Html.ul [ prop.classes [ boot.NavbarNav
                                                          boot.MeAuto
                                                          boot.Mb2
                                                          boot.MbLg0 ]
                                           prop.children NavLinks ] ] ] ]

  Html.nav [ prop.classes [ boot.Navbar
                            boot.NavbarExpandLg
                            boot.BgLight ]
             prop.children [ Html.div [ prop.classes [ boot.ContainerLg ]
                                        prop.children NavChildren ] ] ]
