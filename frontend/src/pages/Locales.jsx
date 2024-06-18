import React, { useState, useEffect } from "react";
import localesService from "../services/locales.service";

import LocalesLista from "../components/locales/LocalesLista";
import LocalesBusqueda from "../components/locales/LocalesBusqueda";
import LocalesForm from "../components/locales/LocalesForm";

const Locales = () => {
  const [Locales, setLocales] = useState("");
  const [Local, setLocal] = useState(null);
  const [Interior, setInterior] = useState(false);
  const [Nombre, setNombre] = useState("");
  const [Accion, setAccion] = useState("L"); // L: Listar
  const [Ciuades, setCiudades] = useState([{}]);

  async function getLocalesInterior() {
    const response = await localesService.getLocalesInterior();
    setInterior(true);
    setLocales(response.data);
  }

  async function getLocales() {
    const response = await localesService.getLocales();
    setInterior(false);
    setLocales(response.data);
  }

  async function buscarLocales(Nombre) {
    const response = await localesService.findStoreByName(Nombre);
    setLocales(response.data);
  }

  async function getCiudades() {
    const response = await localesService.getCiudadesArgentina();
    setCiudades(response.data);
  }

  async function Agregar() {
    setAccion("A");
    setLocal({
      address: "",
      city: "",
      country: "AR",
      latitude: 0,
      longitude: 0,
      name: "",
      number: "",
      postcode: "",
      province: "",
    });
  }

  async function findStoreById(local, accion) {
    const response = await localesService.getStoreById(local);
    setAccion(accion);
    setLocal(response.data);
  }

  function Ver(local) {
    findStoreById(local, "V");
  }

  function Editar(local) {
    findStoreById(local, "E");
  }

  async function Borrar(local) {
    alert(`¿Eliminar Local ${local.number}?`);
  }

  function Volver() {
    setAccion("L");
  }

  function Guardar(local) {
    try {
      if (Accion === "A") {
        localesService.createStore(local);
      } else {
        localesService.updateStore(local);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getLocales();
    getCiudades();
  }, []);

  return (
    <>
      <main className="container">
        <div className="col-12 col-lg-10 my-5 mx-auto">
          <h3 className="text-center text-muted my-3 fs-1">
            {Accion === "L"
              ? "Lista de locales"
              : Accion === "A"
              ? "Nuevo local"
              : Accion === "V"
              ? "Ver local"
              : "Editar local"}
          </h3>

          {/* 👇 */}
          {Accion === "L" && (
            <div className="d-flex justify-content-between align-items-center my-3">
              <div className="flex-grow-1 me-3">
                <LocalesBusqueda
                  className="w-100"
                  Buscar={buscarLocales}
                  Nombre={Nombre}
                  setNombre={setNombre}
                />
              </div>
              <div>
                <button className="btn btn-success me-1" onClick={Agregar}>
                  <i className="fas fa-plus"></i> Nuevo
                </button>

                <button
                  className="btn btn-warning"
                  onClick={() =>
                    Interior ? getLocales() : getLocalesInterior()
                  }
                >
                  <i className="fas fa-sync"></i>
                  {Interior ? " Mostrar todos" : " Sólo interior"}
                </button>
              </div>
            </div>
          )}

          {/* 👇 */}
          {Accion === "L" && Locales.length > 0 && (
            <LocalesLista
              Locales={Locales}
              Ver={Ver}
              Editar={Editar}
              Borrar={Borrar}
            />
          )}

          {/* 👇 */}
          {Accion === "L" && Locales.length === 0 && (
            <div className="alert alert-warning text-center">
              No se encontraron locales
            </div>
          )}

          {/* 👇 */}
          {Accion !== "L" && (
            <LocalesForm
              Accion={Accion}
              Local={Local}
              Ciudaes={Ciuades}
              Guardar={Volver}
              Volver={Volver}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default Locales;
