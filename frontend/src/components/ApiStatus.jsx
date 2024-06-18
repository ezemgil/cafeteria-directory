import React, { useEffect, useState } from "react";
import statusService from "../services/status.service";

const ApiStatus = () => {
  const [Response, setResponse] = useState("");

  useEffect(() => {
    statusService.getStatus().then((res) => {
      setResponse(res.data);
    });
  }, []);

  return (
    <>
      <span className="text-muted fs-6 mt-4 mb-4 text-center text-lg-start">
        Estado de la API:{" "}
      </span>
      <span className="badge bg-success">
        {Response ? Response.status : "No disponible"}
      </span>
    </>
  );
};

export default ApiStatus;
