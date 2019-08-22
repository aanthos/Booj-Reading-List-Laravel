<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Book extends JsonResource
{
    /**
     * Transform the resource into an array.
     * Represents a single model that needs to be transformed into a JSON structure.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'            => $this->id,
            'name'          => $this->name,
            'isbn'          => $this->isbn,
            'title'         => $this->title,
            'authors'       => $this->authors,
            'publishers'    => $this->publishers,
            'publishDate'   => $this->publishDate,
            'imgPath'       => $this->imgPath,
            'created_at'    => $this->created_at,
            'updated_at'    => $this->updated_at,
        ];
    }
}
