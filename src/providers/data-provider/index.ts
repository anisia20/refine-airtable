"use client";

import airtable from "@refinedev/airtable";

const API_TOKEN = process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN!;
const BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID!;

export const dataProvider = airtable(API_TOKEN, BASE_ID);
