import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        car_make: "Car Make",
        car_model: 'Car Model',
        car_color: "Car Color",
        production_year: "Production Year",
    },
    reducers: {
        chooseCarMake: (state, action) => { state.car_make = action.payload },
        chooseCarModel: (state, action) => { state.car_model = action.payload },
        chooseCarColor: (state, action) => { state.car_color = action.payload },
        chooseProductionYear: (state, action) => { state.production_year = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseCarMake, chooseCarModel, chooseCarColor, chooseProductionYear } = rootSlice.actions