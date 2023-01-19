import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

import { useForm } from "react-hook-form";

export const MainContext = createContext({});

export const MainProvider = ({ children }) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  const [days, setDays] = useState([]);

  const { register, handleSubmit } = useForm();

  const values = [];
  const array = [];

  const handleData = (data) => {
    setLoading(true);

    array.push(data.days1, data.days2, data.days3, data.days4);

    array.map((elem) => {
      setDays((previousDays) => [...previousDays, elem]);
    });

    api
      .post("", {
        amount: data.value,
        installments: data.installments,
        mdr: data.percentage,
        days: array,
      })
      .then((res) => setResponse(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const handleValues = () => {
      for (const [key, value] of Object.entries(response)) {
        values.push(value);
      }
      setValue1(values[0]);
      setValue2(values[1]);
      setValue3(values[2]);
      setValue4(values[3]);
    };
    handleValues();
  }, [response]);

  return (
    <MainContext.Provider
      value={{
        value1,
        value2,
        value3,
        value4,
        loading,
        days,
        register,
        handleSubmit,
        handleData,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
