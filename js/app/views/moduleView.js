define(["require","exports","module","helper/jquery.module","helper/jquery.loading","hgn!template/module","hgn!template/loading"],function(e,t){e("helper/jquery.module"),e("helper/jquery.loading");var n=e("hgn!template/module"),r=e("hgn!template/loading");t.render=function(e){var t={id:e.id,color:e.get("color"),code:e.get("code"),title:e.get("title"),examDate:e.get("examDate"),lectures:e.count("lectures"),tutorials:e.count("tutorials"),labs:e.count("labs")},r=$(n(t));return r.module({data:e}),r},t.loading=function(e){var t={id:e},n=$(r(t));return n.loading(t),n}});