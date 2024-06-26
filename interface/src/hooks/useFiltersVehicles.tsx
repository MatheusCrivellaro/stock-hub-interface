import { useState, useEffect } from 'react';
import {Vehicle} from "../interfaces/Vehicle.ts";
import {Filters} from "../interfaces/Filters.ts";

const useFilteredVehicles = (vehicles: Vehicle[] = [], initialFilters: Filters = {}) => {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehicles);

  useEffect(() => {
    let result = vehicles;
    let updateAllowed = false

    if (vehicles.length>0)
      updateAllowed = true

    if (filters.marca) {
      updateAllowed = true
      result = result.filter(vehicle => vehicle.marca.toLowerCase().includes(filters.marca?.toLowerCase() as string));
    }

    if (updateAllowed){
      setFilteredVehicles(result);
    }
  }, [vehicles, filters]);

  return {
    filteredVehicles,
    setFilters,
  };
};

export default useFilteredVehicles;