<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\RatingResource;
use App\Rating;

class RatingController extends Controller
{
    public function index()
    {
        return RatingResource::collection(Rating::all());
    }

    public function submit(Request $request)
    {
        Rating::create([
            'rating' => request('rating')
        ]);
        return response()->json(['message' => 'success'], 200);
    }
}
