import { useEffect, useState, FC, memo } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { getData, deleteObject, addObject } from '../../api/queries'
import { ITableData } from '../../pages/DeviceList/interfaces'
import { ITableProps } from './interfaces'
import { convertDateToString } from '../../utils/converterDate'
import DialogError from '../DialogError/DialogError'
import Spin from '../Spin/Spin'

import { ButtonDelete, ButtonAdd, CustomTableContainer } from './styles'

const DeviceList: FC<ITableProps> = memo(({ listTD, listTH, tableData, setTableData }) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [isFetching, setIsFetching] = useState<boolean>(false)

  const fetchData = async () => {
    try {
      setIsFetching(true)
      const data = await getData()

      data.data.forEach((item: ITableData) => {
        if (item.lastUpdate) {
          item.lastUpdate = convertDateToString(new Date(item.lastUpdate))
        }
      })

      setTableData(data.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setIsFetching(false)
    }
  }

  const handleDelete = async (id: number) => {
    try {
      const data = await deleteObject(id)

      setIsFetching(true)
      setTableData(data.data)
    } catch (error) {
      setOpenDialog(true)
      console.error('Error deleting data:', error)
    } finally {
      setIsFetching(false)
    }
  }

  const handleAdd = async () => {
    try {
      const object = {
        // В проекте, где сущетсвуют токены, благодаря которым можно делать post и delete запросы,
        id: Date.now(), // можно было реализовать форму для заполнения этих данных
        name: 'name',
        uniqueId: 'uniqueId',
        status: 'status',
        lastUpdate: convertDateToString(new Date(Date.now())),
      }

      const data = await addObject(object)

      setIsFetching(true)
      setTableData(data.data)
    } catch (error) {
      setOpenDialog(true)
      console.error('Error adding data:', error)
    } finally {
      setIsFetching(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <CustomTableContainer component={Paper}>
      {isFetching ? (
        <Spin />
      ) : (
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {listTH.map((row, index) => {
                return (
                  <TableCell key={index} align="center">
                    {row}
                  </TableCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData &&
              tableData.map((item) => {
                return (
                  <TableRow key={item.id}>
                    {listTD.map((td, index) => {
                      if (index === listTD.length - 1) {
                        return (
                          <TableCell key={index} align="center">
                            {item[td as keyof ITableData]}
                            <ButtonDelete onClick={() => handleDelete(item.id)}>
                              Удалить
                            </ButtonDelete>
                          </TableCell>
                        )
                      }
                      return (
                        <TableCell key={index} align="center">
                          {item[td as keyof ITableData]}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      )}

      <ButtonAdd onClick={handleAdd}>Добавить</ButtonAdd>

      <DialogError openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </CustomTableContainer>
  )
})

export default DeviceList
