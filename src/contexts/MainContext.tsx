import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";


import { useForm } from "react-hook-form";

interface ICalculatorValues {
  value: number;
  installments: number;
  percentage: number;
  days1: number,
  days2: number, 
  days3: number, 
  days4: number
}

interface IMainProvider {
  children: ReactNode;
}

interface IMainContext {
  value1: number;
  value2: number;
  value3: number;
  value4: number;
  loading: boolean;
  days: number[];
  register: any;
  handleSubmit: any;
  handleData(data: ICalculatorValues): void;
}

export const MainContext = createContext<IMainContext>({} as IMainContext);

export const MainProvider = ({ children }: IMainProvider) => {
  const [value1, setValue1] = useState<number>(0);
  const [value2, setValue2] = useState<number>(0);
  const [value3, setValue3] = useState<number>(0);
  const [value4, setValue4] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<any>({});
  const [days, setDays] = useState<number[]>([]);

  const { register, handleSubmit } = useForm<ICalculatorValues>();

  const values: any[] = [];
  const daysList: any = [];

  const handleData = (data: ICalculatorValues) => {
    setLoading(true);

    daysList.push(data.days1, data.days2, data.days3, data.days4);

    daysList.map((elem: number) => {
      setDays((previousDays) => [...previousDays, elem]);
    });

    api
      .post("", {
        amount: data.value,
        installments: data.installments,
        mdr: data.percentage,
        days: daysList,
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
