import React from "react";
import { useForm } from "react-hook-form";

const LocalesForm = ({ Accion, Local, Ciudaes, Guardar, Volver }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
  } = useForm({ values: Local });

  const onSubmit = (data) => {
    Guardar(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
      <fieldset disabled={Accion === "C"}>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Dirección
          </label>
          <input
            type="text"
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
            id="address"
            {...register("address", { required: true })}
          />
          {errors.address && (
            <div className="invalid-feedback">Este campo es requerido</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            Ciudad
          </label>
          <select
            className={`form-select ${errors.city ? "is-invalid" : ""}`}
            id="city"
            {...register("city", { required: true })}
          >
            {Ciudaes.map((ciudad) => (
              <option key={ciudad.city} value={ciudad.city}>
                {ciudad.city}
              </option>
            ))}
          </select>
          {errors.city && (
            <div className="invalid-feedback">Este campo es requerido</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            País
          </label>
          <input
            type="text"
            className={`form-control ${errors.country ? "is-invalid" : ""}`}
            id="country"
            {...register("country", { required: true })}
          />
          {errors.country && (
            <div className="invalid-feedback">Este campo es requerido</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="latitude" className="form-label">
            Latitud
          </label>
          <input
            type="number"
            className={`form-control ${errors.latitude ? "is-invalid" : ""}`}
            id="latitude"
            {...register("latitude", { required: true })}
          />
          {errors.latitude && (
            <div className="invalid-feedback">Este campo es requerido</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="longitude" className="form-label">
            Longitud
          </label>
          <input
            type="number"
            className={`form-control ${errors.longitude ? "is-invalid" : ""}`}
            id="longitude"
            {...register("longitude", { required: true })}
          />
          {errors.longitude && (
            <div className="invalid-feedback">Este campo es requerido</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <div className="invalid-feedback">Este campo es requerido</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            Número
          </label>
          <input
            type="text"
            className={`form-control ${errors.number ? "is-invalid" : ""}`}
            id="number"
            {...register("number", { required: true })}
          />
          {errors.number && (
            <div className="invalid-feedback">Este campo es requerido</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="postcode" className="form-label">
            Código postal
          </label>
          <input
            type="text"
            className={`form-control ${errors.postcode ? "is-invalid" : ""}`}
            id="postcode"
            {...register("postcode", { required: true })}
          />
          {errors.postcode && (
            <div className="invalid-feedback">Este campo es requerido</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="province" className="form-label">
            Provincia
          </label>
          <input
            type="text"
            className={`form-control ${errors.province ? "is-invalid" : ""}`}
            id="province"
            {...register("province", { required: true })}
          />
          {errors.province && (
            <div className="invalid-feedback">Este campo es requerido</div>
          )}
        </div>
      </fieldset>

      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-secondary" onClick={Volver}>
          Volver
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!isValid || isSubmitted}
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default LocalesForm;

/* ejemplo de local
address: "Avenida Gral. Guemes 897"
city: "Avellaneda"
country: "AR"
latitude: -34.68
longitude: -58.37
name: "Alto Avelleneda"
number: "1278-139526"
postcode: "B1870"
province: "B"
*/
