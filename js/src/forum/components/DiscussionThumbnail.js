import Component from 'flarum/Component';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import classList from 'flarum/common/utils/classList';

import 'object.assign/auto';
import 'intersection-observer';

const loadedSet = new Set();

export default class DiscussionThumbnail extends Component {    
    view() {
        const attrs = { ...this.attrs.elementAttrs };
        const loaded = loadedSet.has(this.attrs.src);
        
        if (!attrs.style) attrs.style = {};

        
        attrs.style.position = 'relative';
        // Added by BlockCat
        attrs.style.objectFit = 'cover';
        // Finish adding

        if (!loaded) {
            attrs.style.opacity = '0';

            attrs.oncreate = this.configImage.bind(this);
            attrs.onload = this.onLoad.bind(this);
        }

        // Modified by BlockCat
        if (this.attrs.src.includes('imgur')) {
            let image_url= this.attrs.src;
            let image_prefix = image_url.substring(0, image_url.lastIndexOf("."));
            let image_sufix = image_url.substring(image_url.lastIndexOf("."));
            attrs[loaded ? 'src' : 'data-src'] = image_prefix + 'l' + image_sufix;
        }
        else {
            // Original instruction
            attrs[loaded ? 'src' : 'data-src'] = this.attrs.src;
        }
        // Finished modification
        
        return (
            <div className={classList(attrs.className, 'DiscussionListItem-thumbnail')}>
                {!loaded && <LoadingIndicator />}
                <img {...attrs} />
            </div>
        );
    }

    configImage(vnode) {
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    observer.unobserve(lazyImage);
                }
            });
        });

        observer.observe(vnode.dom);
    }

    onLoad(evt) {
        const img = evt.target;

        loadedSet.add(this.attrs.src);

        img.style.opacity = 1;

        this.$('.LoadingIndicator-container').remove();
    }
}