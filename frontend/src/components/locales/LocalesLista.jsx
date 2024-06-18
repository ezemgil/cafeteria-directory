import React from "react";

const LocalesLista = ({ Locales }) => {
  return (
    <>
      <section className="d-flex flex-column justify-content-start">
        <div className="table-responsive">
          <table className="table container table-bordered table-sm text-center">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Direccion</th>
                <th scope="col">Ciudad</th>
                <th scope="col">Latitud</th>
                <th scope="col">Longitud</th>
              </tr>
            </thead>
            <tbody>
              {Locales &&
                Locales.map((store, index) => (
                  <tr key={index}>
                    <td>{store.number}</td>
                    <td>{store.name}</td>
                    <td>{store.address}</td>
                    <td>{store.city}</td>
                    <td>{store.latitude}</td>
                    <td>{store.longitude}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default LocalesLista;
