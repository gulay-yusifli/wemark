import type { XSchoolData } from "./types";

const API_URL = process.env.API_URL ?? "https://admin.wemark.pro/api/tasks-xschool/";


export async function getXSchoolData(): Promise<XSchoolData> {
  const res = await fetch(API_URL, { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error(`xSchool API request failed: ${res.status} ${res.statusText}`);
  }
  return (await res.json()) as XSchoolData;
}
