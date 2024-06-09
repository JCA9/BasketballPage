import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Historia } from "../components/Historia";
import { Equipos } from "../components/Equipos";
import { Jugadores } from "../components/Jugadores";
import { Contacto } from "../components/Contacto";
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';

export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/*Header y Navegacion */}
      <HeaderNav />
      {/*Contenido Centrar */}
      <section className='content'>
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/equipos" element={<Equipos />} />
          <Route path="/jugadores" element={<Jugadores />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </section>
      {/*Footer */}
      <Footer />


    </BrowserRouter>
  )
}
