import get from 'lodash/get';

import { extend } from 'flarum/extend';
import Model from 'flarum/Model';
import Discussion from 'flarum/models/Discussion';
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import Tooltip from 'flarum/common/components/Tooltip';

import DiscussionThumbnail from './components/DiscussionThumbnail';

const find = (obj, clazz) => obj && obj.children && obj.children.filter(e => get(e, 'attrs.className', '').indexOf(clazz) !== -1)[0];

app.initializers.add('block-cat/discussion-thumbnail', () => {
  Discussion.prototype.customThumbnail = Model.attribute('customThumbnail');

  extend(DiscussionListItem.prototype, 'view', function(vdom) {
    const image = this.attrs.discussion.customThumbnail();
  
    if (!image) return;

    const content = find(vdom, 'DiscussionListItem-content');

    if (!content || !content.children) return;

    const tooltip = content.children.find((e) => e.tag && e.tag === Tooltip);
    // Modified by BLockCat
    const author = find(tooltip, 'DiscussionListItem-author');
    if (author === undefined) {
      const autor = find(tooltip, 'DiscussionListItem-author--grid');
      
      const avatar = find(autor, 'Avatar');
    
      if (!avatar) return;

      delete avatar.attrs.src;
      
      author.children[author.children.indexOf(avatar)] = <DiscussionThumbnail elementAttrs={avatar.attrs} src={image} />;
    } else {
      const avatar = find(author, 'Avatar');
      
      if (!avatar) return;
  
      delete avatar.attrs.src;
      
      author.children[author.children.indexOf(avatar)] = <DiscussionThumbnail elementAttrs={avatar.attrs} src={image} />;
    }
    // End modification
  });
});
