import { sql } from '@vercel/postgres';

const fetchArtists = async () => {
  try {
    const data = await sql`
        SELECT id, name FROM artists
    `;

    return data.rows.map((artist) => ({ ...artist }));
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Error fetching all artists');
  }
};
