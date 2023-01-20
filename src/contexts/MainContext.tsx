import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";


import { useForm } from "react-hook-form";
import { toast } from "react-toastify"

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

interface AxiosData {
  amount: number,
  installments: number,
  mdr: number,
  days: number[],
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

  const toastErrorData = () => {
    toast.error("Não foi possível realizar a simulação, por favor verifique os dados e tente novamente.")
  }
  const toastErrorInternal = () => {
    toast.error("Ocorreu um erro inesperado, tente novamente mais tarde.")
  }
  const toastErrorTimeout = () => {
    toast.error("Não foi possível estabelecer uma conexão com o servidor, tente novamente mais tarde.")
  }
  const toastErrorTimeoutUser = () => {
    toast.error("Sua conexão parece estar lenta, não foi possível realizar a simulação.")
  }

  const handleData = (data: ICalculatorValues) => {
    setLoading(true);

    daysList.push(data.days1, data.days2, data.days3, data.days4);

    daysList.map((elem: number) => {
      setDays((previousDays) => [...previousDays, elem]);
    });

    api
      .post<AxiosData>("", {
        amount: data.value,
        installments: data.installments,
        mdr: data.percentage,
        days: daysList,
      })
      .then((res) => setResponse(res.data))
      .catch((err) => {
        if(err.message === "Request failed with status code 400"){
          toastErrorData()
        } else if(err.message === "Request failed with status code 500"){
          toastErrorInternal()
        } else if (err.message === "Request failed with status code 408"){
          toastErrorTimeout()
        } else if (err.message === "timeout of 5000ms exceeded"){
          toastErrorTimeoutUser()
        }
      })
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
