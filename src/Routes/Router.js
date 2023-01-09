import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../pages/home/Home'
import {Pokedex} from '../pages/pokedex/Pokedex'



export function RouterComponet() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/pokedex" element={<Pokedex />} />
            </Routes>
        </BrowserRouter>
    )
}