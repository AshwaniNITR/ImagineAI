import { NextRequest, NextResponse } from 'next/server';
import jwt, { JwtPayload } from 'jsonwebtoken';
import User from '@/models/userModel'; // adjust the import path accordingly
import connectMongo from '@/dbConnect/dbConnect'; // adjust the import path accordingly

export async function GET(request: NextRequest) {
    const token = request.cookies.get('token'); // Retrieve the token from cookies

    if (!token) {
        return NextResponse.json(null, { status: 401 }); // No token found, return Unauthorized
    }

    try {
        // Verify the token to get the decoded payload
        const decodedToken = jwt.verify(token.value, process.env.TOKEN_SECRET!) as JwtPayload;

        // Extract user ID from the decoded token
        const userId = decodedToken.id;

        await connectMongo(); // Connect to the database
        const user = await User.findById(userId); // Use the extracted user ID

        if (!user) {
            return NextResponse.json(null, { status: 404 }); // No user found
        }

        return NextResponse.json(user); // Return the found user
    } catch (error) {
        console.error('Error fetching user:', error);
        return NextResponse.json(null, { status: 500 }); // Error in fetching user
    }
}
