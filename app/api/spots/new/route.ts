import { NextResponse } from 'next/server';
import { insertSpot } from '../../../lib/db';

// functie om nieuwe spot te posten naar db
export async function POST(request: Request) {
  try {

    // collect form data
    const data = await request.formData();
    const name = data.get('name');
    const location = data.get('location');
    const image = data.get('image');
    const description = data.get('description');
    const link = data.get('link');

    // check form data + convert naar strings
    const nameStr = typeof name === 'string' ? name : '';
    const locationStr = typeof location === 'string' ? location : '';
    const imageStr = typeof image === 'string' ? image : '';
    const descriptionStr = typeof description === 'string' ? description : undefined;
    const linkStr = typeof link === 'string' ? link : undefined;
    const result = insertSpot(nameStr, locationStr, imageStr, descriptionStr, linkStr);

    // return success response with new spot id
    return NextResponse.json({ success: true, inserted: result.lastInsertRowid });

    // error handling
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
