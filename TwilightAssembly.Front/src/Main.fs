module Main

open Feliz
open Feliz.Router
open Browser.Dom
open Fable.Core.JsInterop
open TwilightAssembly.Core
open TwilightAssembly.App
open TwilightAssembly.App.Pages

importSideEffects "./styles/global.scss"

[<ReactComponent>]
let IndexPage () =
  Html.div [ prop.classes [ Css.boot.ContainerLg ]
             prop.children [ Navigation PageType.Index
                             Html.h1 "Work in progress" ] ]

[<ReactComponent>]
let SystemsPage () =
  let systemRows =
    SystemData.Default
    |> List.map (fun t ->
      Html.tr [ prop.key t.SystemId
                prop.children [ Html.th t.SystemId
                                Html.td (t.SystemType.ToString())
                                Html.td t.Name
                                Html.td (
                                  t.Anomaly
                                  |> Option.map (fun t -> t.Readable)
                                  |> Option.defaultValue ""
                                )
                                Html.td (System.String.Join(", ", t.Wormholes))
                                Html.td (if t.EmptySystem then "Empty" else "")
                                Html.td (
                                  if t.IsRedBorder then
                                    "Red Border"
                                  else
                                    ""
                                )
                                Html.td (if t.BaseGame then "Base" else "POK") ] ])

  let systemsTable =
    Html.table [ prop.classes [ Css.boot.Table
                                Css.boot.TableStriped
                                Css.boot.TableBordered
                                Css.boot.TableHover
                                Css.boot.TableResponsive
                                Css.boot.WAuto ]
                 prop.children [ Html.thead [ Html.tr [ Html.th "#"
                                                        Html.th "System Type"
                                                        Html.th "Name"
                                                        Html.th "Anomaly"
                                                        Html.th "Wormholes"
                                                        Html.th "Planets"
                                                        Html.th "Red Border"
                                                        Html.th "Base Game" ] ]
                                 Html.tfoot [ Html.tr [ Html.th "#"
                                                        Html.th "System Type"
                                                        Html.th "Name"
                                                        Html.th "Anomaly"
                                                        Html.th "Wormholes"
                                                        Html.th "Planets"
                                                        Html.th "Red Border"
                                                        Html.th "Base Game" ] ]
                                 Html.tbody systemRows ] ]

  Html.div [ prop.classes [ Css.boot.ContainerLg ]
             prop.children [ Navigation PageType.Systems

                             Html.h1 [ prop.text "Systems"
                                       prop.classes [ "display-1" ] ]
                             Html.br []
                             systemsTable ] ]

[<ReactComponent>]
let PlanetsPage () =
  let planetRows =
    PlanetData.Default
    |> List.map (fun t ->
      Html.tr [ prop.key t.PlanetId
                prop.children [ Html.th t.PlanetId
                                Html.td (t.SystemId.ToString())
                                Html.td t.Name
                                Html.td t.Resources
                                Html.td t.Influence
                                Html.td (
                                  t.Specialty
                                  |> Option.map (fun t -> t.ToString())
                                  |> Option.defaultValue ""
                                )
                                Html.td (
                                  t.Trait
                                  |> Option.map (fun t -> t.ToString())
                                  |> Option.defaultValue ""
                                )
                                Html.td (t.PlanetType.ToString()) ] ])

  let headersRow =
    [ Html.tr [ Html.th "#"
                Html.th "System Id"
                Html.th "Name"
                Html.th "Resources"
                Html.th "Influence"
                Html.th "Specialty"
                Html.th "Trait"
                Html.th "Type" ] ]

  let planetsTable =
    Html.table [ prop.classes [ Css.boot.Table
                                Css.boot.TableStriped
                                Css.boot.TableBordered
                                Css.boot.TableHover
                                Css.boot.TableResponsive
                                Css.boot.WAuto ]
                 prop.children [ Html.thead headersRow
                                 Html.tfoot headersRow
                                 Html.tbody planetRows ] ]

  Html.div [ prop.classes [ Css.boot.ContainerLg ]
             prop.children [ Navigation PageType.Planets
                             Html.h1 [ prop.text "Planets"
                                       prop.classes [ "display-1" ] ]
                             Html.br []
                             planetsTable ] ]

[<ReactComponent>]
let TilesPage () =
  let tileCards =
    SystemData.DefaultWithoutMalliceBack
    |> List.map (fun t ->
      Html.div [ prop.key t.SystemId
                 prop.classes [ Css.boot.Col ]
                 prop.children [ Html.div [ prop.classes [ Css.boot.Card ]
                                            prop.children [ Html.img [ prop.src (
                                                                         "/static/tiles/ST_"
                                                                         + t.SystemId.ToString()
                                                                         + ".png"
                                                                       )
                                                                       prop.width 364
                                                                       prop.classes [ "card-img-top" ] ]
                                                            Html.div [ prop.classes [ Css.boot.CardBody ]
                                                                       prop.children [ Html.h5 [ prop.classes [ Css.boot.CardTitle ]
                                                                                                 prop.text t.Name ] ] ] ] ] ] ])

  let tileRow =
    Html.div [ prop.classes [ Css.boot.RowColsAuto
                              Css.boot.Row ]
               prop.children tileCards ]

  Html.div [ prop.classes [ Css.boot.ContainerFluid ]
             prop.children [ Navigation PageType.Tiles
                             Html.div [ prop.classes [ Css.boot.ContainerLg ]
                                        prop.children [ Html.h1 [ prop.text "Tiles"
                                                                  prop.classes [ "display-1" ] ]

                                                         ] ]
                             Html.br []
                             tileRow ] ]



[<ReactComponent>]
let Router () =
  let (currentUrl, updateUrl) =
    React.useState (Router.currentPath ())

  React.router [ router.pathMode
                 router.onUrlChanged updateUrl
                 router.children [ match currentUrl with
                                   | [] -> IndexPage()
                                   | [ "systems" ] -> SystemsPage()
                                   | [ "planets" ] -> PlanetsPage()
                                   | [ "tiles" ] -> TilesPage()
                                   | otherwise -> Html.h1 "Not found" ] ]

ReactDOM.render (Router(), document.getElementById "root")
