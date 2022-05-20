module TwilightAssembly.Front.Pages

open Feliz
open Feliz.Router

let UrlIndex = ""
let UrlPlanets = "planets"
let UrlSystems = "systems"

[<RequireQualifiedAccess>]
type PageType =
    | Index
    | Planets
    | Systems

let Navigation (currentPage: PageType) =
    let Active(page: PageType ) =
        if page = currentPage then "active"
        else ""
    
    let NavLinks =
        [ Html.li [ prop.classes [ Css.bootstrap.NavItem ]
                    prop.children [ Html.a [ prop.text "Systems"
                                             prop.classes [ Css.bootstrap.NavLink; Active PageType.Systems ]
                                             prop.href (Router.format UrlSystems) ] ] ]
          Html.li [ prop.classes [ Css.bootstrap.NavItem ]
                    prop.children [ Html.a [ prop.text "Planets"
                                             prop.classes [ Css.bootstrap.NavLink; Active PageType.Planets ]
                                             prop.href (Router.format UrlPlanets) ] ] ] ]

    let NavChildren =
        [ Html.a [ prop.classes [ Css.bootstrap.NavbarBrand ]
                   prop.href (Router.format UrlIndex)
                   prop.text "Twilight Assembly" ]
          Html.button [ prop.classes [ Css.bootstrap.NavbarToggler ]
                        prop.type' "button"
                        prop.custom ("data-bs-toggle", "collapse")
                        prop.custom ("data-bs-target", "#navbarSupportedContent")
                        prop.ariaControls "navbarSupportedContent"
                        prop.ariaExpanded false
                        prop.ariaLabel "Toggle navigation"
                        prop.children [ Html.span [ prop.classes [ Css.bootstrap.NavbarTogglerIcon ] ] ] ]
          Html.div [ prop.classes [ Css.bootstrap.Collapse
                                    Css.bootstrap.NavbarCollapse ]
                     prop.id "navbarSupportedContent"
                     prop.children [ Html.ul [ prop.classes [ Css.bootstrap.NavbarNav
                                                              Css.bootstrap.MeAuto
                                                              Css.bootstrap.Mb2
                                                              Css.bootstrap.MbLg0 ]
                                               prop.children NavLinks ] ] ] ]

    Html.nav [ prop.classes [ Css.bootstrap.Navbar
                              Css.bootstrap.NavbarExpandLg
                              Css.bootstrap.BgLight ]
               prop.children [ Html.div [ prop.classes [ Css.bootstrap.ContainerLg ]
                                          prop.children NavChildren ] ] ]


// <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//      <span class="navbar-toggler-icon"></span>
//    </button>
//    <div class="collapse navbar-collapse" id="navbarSupportedContent">
//      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//        <li class="nav-item">
//          <a class="nav-link active" aria-current="page" href="#">Home</a>
//        </li>
//        <li class="nav-item">
//          <a class="nav-link" href="#">Link</a>
//        </li>
