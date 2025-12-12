import { PAGE_SIZE } from "../utils/constants";
import supabase, { supabaseUrl } from "./supabase";

export async function getVehicles(page) {
  let from, to;

  if (page) {
    from = (page - 1) * PAGE_SIZE;
    to = from + PAGE_SIZE - 1;
  }

  const { data, error, count } = await supabase
    .from("vehicles")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) {
    console.error(error);
    throw new Error("Error loading vehicles");
  }
  return { data, count };
}

export async function createEditVehicle(newVehicle, id) {
  const hasImage = newVehicle.image?.startsWith?.(supabaseUrl);
  let imagePath = newVehicle.image;
  let imageName;

  if (!hasImage && newVehicle.image && newVehicle.image?.name) {
    imageName = `${Math.random()}-${newVehicle.image.name}`.replaceAll("/", "");
    imagePath = `${supabaseUrl}/storage/v1/object/public/vehicle-images/${imageName}`;
  }

  let query = supabase.from("vehicles");

  if (!id) {
    query = query.insert([{ ...newVehicle, image: imagePath }]);
  } else {
    query = query.update({ ...newVehicle, image: imagePath }).eq("id", id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Error creating vehicle");
  }
  if (hasImage) return data;
  if (!hasImage && newVehicle.image && newVehicle.image?.name) {
    const { error: storageError } = await supabase.storage
      .from("vehicle-images")
      .upload(imageName, newVehicle.image);

    if (storageError) {
      await supabase.from("vehicles").delete().eq("id", data.id);
      console.error(storageError);
      throw new Error("Error uploading image so vehicle was not created");
    }
  }

  return data;
}

export async function deleteVehicle(id) {
  const { data, error } = await supabase.from("vehicles").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Error deleting vehicle");
  }
  return data;
}

export async function getAvailableVehicles() {
  const { data, error } = await supabase
    .from("vehicles")
    .select("id, make, model")
    .eq("isSold", false);

  if (error) {
    console.error(error);
    throw new Error("Error getting vehicles");
  }
  return data;
}
