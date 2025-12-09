import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

export default function VehicleTableOperations() {
  return (
    <div className="flex items-center gap-6">
      <Filter
        filterField="isSold"
        options={[
          { value: "all", label: "All" },
          { value: "true", label: "Sold" },
          { value: "false", label: "Available" },
        ]}
      />

      <SortBy
        options={[
          { value: "", label: "CHOOSE A SORT OPTION" },
          { value: "make-asc", label: "Make: A to Z" },
          { value: "make-desc", label: "Make: Z to A" },
          { value: "regularPrice-asc", label: "Price: Low to High" },
          { value: "regularPrice-desc", label: "Price: High to Low" },
          { value: "year-asc", label: "Year: Old to New" },
          { value: "year-desc", label: "Year: New to Old" },
          { value: "mileage-asc", label: "Mileage: Low to High" },
          { value: "mileage-desc", label: "Mileage: High to Low" },
        ]}
      />
    </div>
  );
}
