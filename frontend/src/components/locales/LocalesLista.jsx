import React from "react";

const LocalesLista = ({ Locales, Ver, Editar, Borrar }) => {
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
                <th scope="col">Acciones</th>
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
                    <td className="d-flex gap-1">
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() => Ver(store)}
                      >
                        <i className="fa fa-eye"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-warning"
                        onClick={() => Editar(store)}
                      >
                        <i className="fa fa-edit"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => Borrar(store)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
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
