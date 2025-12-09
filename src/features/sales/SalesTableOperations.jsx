import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

export default function SalesTableOperations() {
  return (
    <div className="flex items-center gap-6">
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "paid", label: "Paid" },
          { value: "pending", label: "Pending" },
        ]}
      />

      <SortBy
        options={[
          { value: "", label: "CHOOSE A SORT OPTION" },
          { value: "vehicles(make)-asc", label: "Vehicles A-Z" },
          { value: "vehicles(make)-desc", label: "Vehicles Z-A" },
          { value: "customers(fullName)-asc", label: "Customers A-Z" },
          { value: "customers(fullName)-desc", label: "Customers Z-A" },
          { value: "saleDate-asc", label: "Sale Date Old to New" },
          {
            value: "saleDate-desc",
            label: "Sale Date New to Old",
          },
          { value: "salePrice-asc", label: "Sale Price Low to High" },
          { value: "salePrice-desc", label: "Sale Price High to Low" },
        ]}
      />
    </div>
  );
}
