import { Button } from '@patternfly/react-core';
import { TableComposable, Tbody, Td, Th, Thead, Tr } from '@patternfly/react-table';
import { FunctionComponent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export type PersonList = {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  gender: string
};

export const PersonListTable: FunctionComponent = () => {

  const history = useHistory();

  const onClick = () => {
    history.push(`details`)
  }



  const [isLodaing, setIsLoading] = useState<boolean>(true)
  const [personList, setPersonList] = useState<PersonList[]>([]);

  useEffect(() => {
    axios.get('http://localhost:4000/person-details').then((res) => {
      setPersonList(res.data)
      setIsLoading(false)
    })
  }, [])

  const columnNames = {
    id: "ID",
    first_name: "First Name",
    last_name: "Last Name",
    email: "Email ID",
    gender: "Gender"


  };

  if (isLodaing) {
    return <h1>Personal details loading</h1>
  }

  return (
    <TableComposable
      aria-label="Simple table"
    >
      <Thead>
        <Tr>
          <Th>{columnNames.id}</Th>
          <Th>{columnNames.first_name}</Th>
          <Th>{columnNames.last_name}</Th>
          <Th>{columnNames.email}</Th>
          <Th>{columnNames.gender}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {personList.map((person) => {
          return (
            <Tr key={person.id}>
              <Td dataLabel={columnNames.id}><Button variant="link" onClick={onClick}>{person.id}</Button></Td>
              <Td dataLabel={columnNames.first_name}>{person.first_name}</Td>
              <Td dataLabel={columnNames.last_name}>{person.last_name}</Td>
              <Td dataLabel={columnNames.email}>{person.email}</Td>
              <Td dataLabel={columnNames.gender}>{person.gender}</Td>
            </Tr>
          )
        })}
      </Tbody>
    </TableComposable>
  )
}
