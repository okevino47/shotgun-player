'use server';

import { sql } from '@vercel/postgres';

export type Track = {
  id: string;
  name: string;
  preview_url: string;
  duration_ms: number;
  image_url: string;
};

const fetchTest = async () => {
  try {
    const data = await sql<Track>`
        SELECT id, name, preview_url, duration_ms, image_url FROM tracks
    `;

    return data.rows.map((track) => ({ ...track }));
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch all tracks.');
  }
};

export default fetchTest;
