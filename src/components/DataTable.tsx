import React, { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
  { field: 'id', headerName: "ID", width: 90, hide: true },
  { field: 'car_make', headerName: 'Car Make', flex: 1 },
  { field: 'car_model', headerName: 'Car Model', flex: 1},
  { field: 'car_color', headerName: 'Car Color', flex: 1},
  { field: 'production_year', headerName: 'Production Year', flex: 2}
]

function DataTable() {
  const [ open, setOpen ] = useState(false);
  const { carData, getData } = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection model: ${selectionModel}`)
    setTimeout( () => { window.location.reload() }, 500)
  } 

  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className='flex flex-row'>
            <div>
                <button
                    className='p-3 bg-black text-white m-3 rounded hover:bg-red-800 hover:text-black'
                    onClick={() => handleOpen()}
                >
                    Create New Car
                </button>
            </div>
            <Button onClick={handleOpen} className="p-3 bg-black m-3 text-white rounded hover:bg-red-800 hover:text-black" >Update</Button>
            <Button onClick={deleteData} className="p-3 bg-black m-3 text-white rounded hover:bg-red-800 hover:text-black" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
          style={{ height: 400, width: '100%' }}
          >
            <h2 className="p-3 bg-red-800 my-2 rounded">My Cars</h2>
            <DataGrid rows={carData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
              setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTable
