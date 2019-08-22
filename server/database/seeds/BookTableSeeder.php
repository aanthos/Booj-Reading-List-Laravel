<?php

use App\Book;
use Illuminate\Database\Seeder;

/**
 * For seeders such as this one, 
 * it needs to be called in the main DatabaseSeeder.php in order to
 * run properly.
 */
class BookTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Book::create([
            'name'          => 'Test Book',
            'isbn'          => '1234567890',
            'title'         => 'The Bookening',
            'authors'       => 'anthos',
            'publishers'    => 'Penguin',
            'publishDate'   => '2019',
            'imgPath'       => 'jpg',
        ]);
    }
}
