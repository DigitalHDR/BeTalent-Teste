import axios from 'axios'
import { useEffect, useState } from 'react'
import { Employee } from '../types/employee'

export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/employees')
      .then((response) => setEmployees(response.data as Employee[]))
      .catch((error) => console.error('Erro ao buscar funcionários:', error))
  }, [])

  return { employees, setEmployees }
}
