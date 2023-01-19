import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Main, SmallButton } from "./styles";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai"

export const MainContent = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState<number[]>([]);

  const [response, setResponse] = useState({});
  const values: any = [];

  const { register, handleSubmit } = useForm();

  const array: any = [];
  const handleData = (data: any) => {
    setLoading(true);

    array.push(data.days1, data.days2, data.days3, data.days4);

    array.map((elem: number) => {
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
    <Main>
      <SmallButton to={"/"} className="backButton"><AiFillHome /></SmallButton>
      <section className="form">
        <h1>Simule sua Antecipação</h1>
        <form onSubmit={handleSubmit(handleData)}>
          <div>
            <label htmlFor="input1">
              Informe o valor da venda <span>*</span>
            </label>
            <input
              type="text"
              id="input1"
              placeholder="Ex: 1000"
              {...register("value")}
            />
          </div>
          <div>
            <label htmlFor="input2">
              Em quantas parcelas <span>*</span>
            </label>
            <input
              type="text"
              id="input2"
              placeholder="Ex: 10"
              {...register("installments")}
            />
          </div>
          <div>
            <label htmlFor="input3">
              Informe o percentual de MDR <span>*</span>
            </label>
            <input
              type="text"
              id="input3"
              placeholder="Ex: 15"
              {...register("percentage")}
            />
          </div>
          <div>
            <label htmlFor="">
              Informe os dias da antecipação <span>*</span>
            </label>
            <div className="select">
              <select {...register("days1")}>
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
              </select>
              <select {...register("days2")}>
                <option value="30" selected>30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="47">47</option>
                <option value="48">48</option>
                <option value="49">49</option>
                <option value="50">50</option>
                <option value="51">51</option>
                <option value="52">52</option>
                <option value="53">53</option>
                <option value="54">54</option>
                <option value="55">55</option>
                <option value="56">56</option>
                <option value="57">57</option>
                <option value="58">58</option>
                <option value="59">59</option>
              </select>
              <select {...register("days3")}>
                <option value="60" selected>60</option>
                <option value="61">61</option>
                <option value="62">62</option>
                <option value="63">63</option>
                <option value="64">64</option>
                <option value="65">65</option>
                <option value="66">66</option>
                <option value="67">67</option>
                <option value="68">68</option>
                <option value="69">69</option>
                <option value="70">70</option>
                <option value="71">71</option>
                <option value="72">72</option>
                <option value="73">73</option>
                <option value="74">74</option>
                <option value="75">75</option>
              </select>
              <select {...register("days4")}>
                <option value="76">76</option>
                <option value="77">77</option>
                <option value="78">78</option>
                <option value="79">79</option>
                <option value="80">80</option>
                <option value="81">81</option>
                <option value="82">82</option>
                <option value="83">83</option>
                <option value="84">84</option>
                <option value="85">85</option>
                <option value="86">86</option>
                <option value="87">87</option>
                <option value="88">88</option>
                <option value="89">89</option>
                <option value="90" selected>90</option>
              </select>
            </div>
          </div>
          <button type="submit">Simular</button>
        </form>
      </section>
      {loading ? (
        <section className="loading">
          <p>Carregando...</p>
        </section>
      ) : (
        <section className="result">
          <h2>VOCÊ RECEBERÁ:</h2>
          {days[0] != 1 ? (
            <p>
              Em {days[0]} dias: <span>R$ {value1 || 0},00</span>
            </p>
          ) : (
            <p>
              Amanhã: <span>R$ {value1 || 0},00</span>
            </p>
          )}
          <p>
            Em {days[1]} dias: <span>R$ {value2 || 0},00</span>
          </p>
          <p>
            Em {days[2]} dias: <span>R$ {value3 || 0},00</span>
          </p>
          <p>
            Em {days[3]} dias: <span>R$ {value4 || 0},00</span>
          </p>
        </section>
      )}
    </Main>
  );
};