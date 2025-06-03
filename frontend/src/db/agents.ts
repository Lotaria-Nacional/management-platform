export const historyData = [
    {
      idAgente: "10032",
      data: "2025-05-15",
      saldoInicial: "1000000",
      deposito: "500000",
      vendas: "300000",
      pagamentos: "200000",
      final: "1000000",
      alertas: "Boa performance",
    },
    {
      idAgente: "10045",
      data: "2025-05-16",
      saldoInicial: "1500000",
      deposito: "1000000",
      vendas: "200000",
      pagamentos: "100000",
      final: "1200000",
      alertas: "Baixa venda",
    },
    {
      idAgente: "10058",
      data: "2025-05-17",
      saldoInicial: "2000000",
      deposito: "1500000",
      vendas: "500000",
      pagamentos: "2500000",
      final: "500000",
      alertas: "Dívida",
    },
    {
      idAgente: "10061",
      data: "2025-05-18",
      saldoInicial: "1200000",
      deposito: "700000",
      vendas: "1100000",
      pagamentos: "400000",
      final: "1400000",
      alertas: "Boa performance",
    },
    {
      idAgente: "10073",
      data: "2025-05-19",
      saldoInicial: "800000",
      deposito: "600000",
      vendas: "100000",
      pagamentos: "200000",
      final: "500000",
      alertas: "Baixa venda",
    },
  ];
  
  export const agentInfoData = [
    {
      idAgente: "10032",
      area: "E",
      zona: "15",
      status: "ATIVO",
      limite: "2000000",
      balancaAtual:"3200000",
    },
    // {
    //   idAgente: "10045",
    //   area: "N",
    //   zona: "12",
    //   status: "INATIVO",
    //   limite: "1500000",
    //   balancaAtual:"800000",
    // },
    // {
    //   idAgente: "10058",
    //   area: "S",
    //   zona: "08",
    //   status: "ATIVO",
    //   limite: "2500000",
    //   balancaAtual:"2200000",
    // },
    // {
    //   idAgente: "10061",
    //   area: "O",
    //   zona: "11",
    //   status: "ATIVO",
    //   limite: "1800000",
    //   balancaAtual:"1000000",
    // },
    // {
    //   idAgente: "10073",
    //   area: "E",
    //   zona: "07",
    //   status: "ATIVO",
    //   limite: "1000000",
    //   balancaAtual:"600000",
    // },
  ];
  
  export const agentHistoryByDate = [
    {
      data: "12-05-2025",
      divida: "500000",
      deposito: "1000000",
      balanca: "1500000",
    },
    {
      data: "13-05-2025",
      divida: "200000",
      deposito: "500000",
      balanca: "1800000",
    },
    {
      data: "14-05-2025",
      divida: "000",
      deposito: "800000",
      balanca: "2600000",
    },
    {
      data: "15-05-2025",
      divida: "700000",
      deposito: "600000",
      balanca: "1900000",
    },
    {
      data: "16-05-2025",
      divida: "300000",
      deposito: "700000",
      balanca: "2300000",
    },
    {
      data: "17-05-2025",
      divida: "100000",
      deposito: "400000",
      balanca: "2600000",
    },
  ];
  

  // type AgentHistory = {
  //   [idAgente: string]: {
  //     [data: string]: {
  //       divida: string;
  //       deposito: string;
  //       balanca: string;
  //     };
  //   };
  // };
   
  // export const agentHistoryByDate:AgentHistory = {
  //   "10032": {
  //     "12-05-2025": { divida: "5 000,00 AKZ", deposito: "10 000,00 AKZ", balanca: "15 000,00 AKZ" },
  //     "13-05-2025": { divida: "2 000,00 AKZ", deposito: "5 000,00 AKZ", balanca: "18 000,00 AKZ" },
  //     // ...
  //   },
  //   "10045": {
  //     "12-05-2025": { divida: "3 000,00 AKZ", deposito: "7 000,00 AKZ", balanca: "10 000,00 AKZ" },
  //   },
  // };