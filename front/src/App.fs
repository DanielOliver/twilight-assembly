module TwilightAssembly.Front.App

Fable.Core.JsInterop.importAll "bootstrap/dist/css/bootstrap.min.css"
Fable.Core.JsInterop.importAll "bootstrap/dist/js/bootstrap.js"

open Browser.Dom
open Feliz

[<ReactComponent>]
let Counter () =
    let (count, setCount) = React.useState (0)

    let increment =
        Html.button [ prop.classes [ Css.bootstrap.Btn
                                     Css.bootstrap.BtnInfo ]
                      prop.onClick (fun _ -> setCount (count + 1))
                      prop.text "Increment" ]

    let decrement =
        Html.button [ prop.classes [ Css.bootstrap.Btn
                                     Css.bootstrap.BtnInfo ]
                      prop.onClick (fun _ -> setCount (count - 1))
                      prop.text "Decrement" ]


    Html.div [ prop.classes [ Css.bootstrap.ContainerLg ]
               prop.children [ increment
                               decrement
                               Html.h1 count ] ]

let Navigation () =
    Html.nav [ prop.classes [ Css.bootstrap.Navbar
                              Css.bootstrap.NavbarExpandLg
                              Css.bootstrap.BgLight ]
               prop.children [ Html.div [ prop.classes [ Css.bootstrap.ContainerLg ]
                                          prop.children [ Html.a [ prop.classes [ Css.bootstrap.NavbarBrand ]
                                                                   prop.text "Twilight Assembly" ] ] ] ] ]

let World () = Html.div [ Navigation(); Counter() ]

ReactDOM.render (World(), document.getElementById "root")
