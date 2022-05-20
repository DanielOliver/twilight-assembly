module TwilightAssembly.Front.App

//Fable.Core.JsInterop.importAll "bootstrap/dist/css/bootstrap.min.css"

open Browser.Dom
open Feliz
open Feliz.Router
open TwilightAssembly.Front.Pages


let IndexPage () =
    Html.div [ prop.classes [ Css.bootstrap.ContainerLg ]
               prop.children [ Navigation PageType.Index
                               Html.h1 "Work in progress" ] ]

let SystemsPage () =
    Html.div [ prop.classes [ Css.bootstrap.ContainerLg ]
               prop.children [ Navigation PageType.Systems
                               Html.h1 "Systems: Work in progress" ] ]

let PlanetsPage() =
    Html.div [ prop.classes [ Css.bootstrap.ContainerLg ]
               prop.children [ Navigation PageType.Planets
                               Html.h1 "Planets: Work in progress" ] ]
[<ReactComponent>]
let Router () =
    let (currentUrl, updateUrl) =
        React.useState (Router.currentUrl ())

    React.router [ router.onUrlChanged updateUrl
                   router.children [ match currentUrl with
                                     | [] -> IndexPage()
                                     | [ "systems" ] -> SystemsPage()
                                     | [ "planets" ] -> PlanetsPage()
                                     | otherwise -> Html.h1 "Not found" ] ]

ReactDOM.render (Router(), document.getElementById "root")

//Fable.Core.JsInterop.importAll "bootstrap/dist/js/bootstrap.js"
