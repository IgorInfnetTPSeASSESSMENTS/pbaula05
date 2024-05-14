import { faker } from '@faker-js/faker';
import DataTable from 'react-data-table-component';

export default function Fornecedores() {
  
  const fornecedores = new Array(10).fill().map((value, index) => {
    let fornecedor = new Object()
    fornecedor.id = faker.string.uuid();
    fornecedor.nomeFantasia = faker.company.name();
    fornecedor.razaoSocial = faker.company.buzzPhrase();
    fornecedor.cnpj = faker.finance.accountNumber(14);
    return fornecedor;
  })

  const colunas = [
    {name: "Nome Fantasia", selector: row => row.nomeFantasia, sortable: true},
    {name: "Razão Social", selector: row => row.razaoSocial},
    {name: "CNPJ", selector: row => row.cnpj},
  ]

  const opcoes = {rowsPerPageText: "Linhas por página", rangeSeparatorText: "de"}


  return (
    <div>
      <h2>Fornecedores</h2>
      <DataTable 
      columns={colunas}
      data={fornecedores}
      pagination
      paginationPerPage={5}
      dense
      responsive
      striped
      paginationComponentOptions={opcoes}
      defaultSortFieldId={1}
      selectableRows
      selectableRowsHighLight
      selectableRowsSingle
      ></DataTable>
    </div>
  )
  
 
}
