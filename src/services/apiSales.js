import supabase from "./supabase";
import { PAGE_SIZE } from "../utils/constants";
import { getToday } from "../utils/helpers";

export async function getSales({ filter, sortBy, page } = {}) {
  let query = supabase
    .from("sales")
    .select(
      "id, created_at, saleDate, salePrice, status, vehicles!sales_vehicleId_fkey(make, model, image), customers!sales_customerId_fkey1(fullName, email, phoneNumber)",
      { count: "exact" }
    );

  if (filter !== null) {
    query = query.eq(filter.field, filter.value);
  }

  if (sortBy) {
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });
  }

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error("Error loading sales:", error);
    throw new Error("Error loading sales");
  }

  return { data, count };
}

export async function getSale(id) {
  const { data, error } = await supabase
    .from("sales")
    .select(
      "id, created_at, saleDate, salePrice, status, soldBy, pickupDate, downPayment, totalOwed, pickedUpAt, vehicles!sales_vehicleId_fkey(make, model, image, regularPrice), customers!sales_customerId_fkey1(fullName, email, phoneNumber)"
    )
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error loading sale:", error);
    throw new Error("Error loading sale");
  }

  return data;
}

export async function updateSale(id, obj) {
  const { data, error } = await supabase
    .from("sales")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Sale could not be updated");
  }
  return data;
}

export async function deleteSale(id) {
  const { data, error } = await supabase.from("sales").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Sale could not be deleted");
  }
  return data;
}

export async function getSalesAfterDate(date) {
  const { data, error } = await supabase
    .from("sales")
    .select("created_at, salePrice, downPayment, pickupDate")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Error loading sales");
  }
  return data;
}

export async function getTodaysPickups() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const { data, error } = await supabase
    .from("sales")
    .select(
      "*, vehicles!sales_vehicleId_fkey(make, model), customers!sales_customerId_fkey1(fullName)"
    )
    .gte("pickupDate", today.toISOString())
    .lt("pickupDate", tomorrow.toISOString());

  if (error) {
    console.error(error);
    throw new Error("Error loading pickup sales");
  }
  return data;
}
