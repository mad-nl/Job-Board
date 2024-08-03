<?php

namespace App\Policies;

use App\Models\Job;
use App\Models\User;

class JobPolicy
{
    public function update(User $user, Job $job)
    {
        return $user->id === $job->user_id;
    }
}
