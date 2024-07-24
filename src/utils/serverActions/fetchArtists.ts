'use server';

import { sql } from '@vercel/postgres';

export type Artist = {
  id: number;
  name: string;
};

export const fetchArtists = async (): Promise<Artist[]> => {
  try {
    const data = await sql<Artist>`
        SELECT id, name FROM artists
    `;

    return data.rows.map((artist) => ({ ...artist }));
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Error fetching all artists');
  }
};
