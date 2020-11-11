export class Tecnicos {
      id: number;
      name: string;
      rg: string;
      dataNascimento: string;
      nomeMae: string;
      endereco: string;
      cidade: string;
      estado: string;
      cep: string;
      pais: string;
      telefone: string;
      valorChamado: string;
      valorHora: string;
      valorMes: string;
      banco: string;
      agencia: string;
      conta: string;
      nomeTitularConta: string;
      cpfTitularConta: string;
 }

 export interface RequestCreateTecnicos {
    name: string;
    rg: string;
    dataNascimento: string;
    nomeMae: string;
    endereco: string;
    cidade: string;
    estado: string;
    cep: string;
    pais: string;
    telefone: string;
    valorChamado: string;
    valorHora: string;
    valorMes: string;
    banco: string;
    agencia: string;
    conta: string;
    nomeTitularConta: string;
    cpfTitularConta: string;
 }