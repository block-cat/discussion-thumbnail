<?php

/*
 * This file is part of block-cat/discussion-thumbnail.
 *
 * Copyright (c) 2021 Iulian.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace BlockCat\DiscussionThumbnail;

use Flarum\Extend;
use Flarum\Api\Serializer\BasicDiscussionSerializer;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    
    (new Extend\ApiSerializer(BasicDiscussionSerializer::class))
        ->attributes(Listener\AddDiscussionThumbnail::class),
];
