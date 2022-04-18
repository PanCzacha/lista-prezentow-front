import React from 'react';
import {GiftsView} from "./views/GiftsView";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import {NotFoundView} from "./views/NotFoundView";
import {SingleGiftView} from "./views/SingleGiftView";
import {ChildView} from "./views/ChildView";

export const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/gift" element={<GiftsView/>}/>
                <Route path="/gift/:giftId" element={<SingleGiftView/>}/>
                {/*<Route path="/test/:jakiesParametry" element={<TestView/>}/> dodawanie parametrów do ścieżek*/}
                <Route path="/child" element={<ChildView/>}/>
                <Route path="*" element={<NotFoundView/>}/>
            </Routes>
        </>
    );
}
