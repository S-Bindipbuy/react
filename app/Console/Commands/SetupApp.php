<?php


namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;

class SetupApp extends Command
{
    protected $signature = 'app:setup';
    protected $description = 'Set up the application by linking storage, copying .env, and generating app key';

    public function handle()
    {
        // Check if storage link exists, otherwise create it
        if (!File::exists(public_path('storage'))) {
            $this->info('Creating storage link...');
            Artisan::call('storage:link');
            $this->info('Storage linked successfully!');
        } else {
            $this->info('Storage link already exists.');
        }

        // Copy .env.example to .env if .env doesn't exist
        if (!File::exists(base_path('.env'))) {
            $this->info('Copying .env.example to .env...');
            File::copy(base_path('.env.example'), base_path('.env'));
            $this->info('.env file created successfully!');
        } else {
            $this->info('.env file already exists.');
        }

        // Generate application key
        $this->info('Generating application key...');
        Artisan::call('key:generate');
        $this->info('Application key generated successfully!');
    }
}
